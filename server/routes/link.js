require("dotenv").config();

const expess = require("express");
const router = expess.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const isValidURL = require("../middleware/isValidURL")
const Link = require("../models/Link");

const JWT_SECRET = process.env.JWT_SECRET;

router.route("/fetchalllinks").get(fetchuser, async (req, res) => {
  let success = false;

  // Validating if the account exist or not
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ success, error: "Could Not Find User!" });
  }

  try {
    const links = await Link.find({ user: req.user.id });
    success = true;
    return res.json({ success, links });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something Went Wrong!" });
  }
});

router.route("/addlink").post(
  [
    body("title", "TitleUsername cannot be less than 6 characters").isLength({
      min: 4,
    }),
    body(
      "linkaddress",
      "Link Address cannot be blank/less than 4 characters"
    ).isLength({ min: 4 }),
  ],
  fetchuser,isValidURL,
  async (req, res) => {
    let success = false;

    // Validating if email/password/name is acceptable
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    // Validating if the account exist or not
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ success, error: "Could Not Find User!" });
    }

    // aading limiter to 30 links per hour
    const links = await Link.find({ user: req.user.id });
    if (links.length >= 20) {
        let validationlink = links[19];
        let validationtime = validationlink.createdAt;
        let currenttime = Date.now();
        let difference = currenttime - validationtime;
        if (difference < 3600000) {
            return res.status(400).json({ success, error: "Timeout! Try again after sometime." });
        }
    }ß

    try {
      // Saving body data into constants
      const { title, list, linkaddress } = req.body;

      const link = await Link.create({
        user: req.user.id,
        title,
        linkaddress,
        list,
      });

      success = true;
      return res.json({ success, info: "Link Added!" });
    } catch (error) {
      console.log(error);
      return res.json({ error: "Something Went Wrong!" });
    }
  }
);

router.route("/updatelink/:id").put(fetchuser, async (req, res) => {
  let success = false;

  try {
    const { title, linkaddress, list } = req.body;

    // Create a new link object
    let newLink = {};

    if (title) newLink.title = title;
    if (linkaddress) newLink.linkaddress = linkaddress;
    if (list) newLink.list = list;

    // find a new link to be updated and then update it
    let link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({success,  error: "Not Found!", success });
    }

    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({success, error: "Bad Request!"});
    }

    link = await Link.findByIdAndUpdate(
      req.params.id,
      { $set: newLink },
      { new: true }
    );
    success = true;
    return res.json({success, info: "Link Updated", link });
  } catch (error) {
    console.log(error);
    return res.json({success: false, error: "Something Went Wrong!" });
  }
});

router.route("/:id").delete(fetchuser, async (req, res) => {
  try {
    // Checking if link exists
    let success = false;

    const link = await Link.findById(req.params.id);

    // Case when link doesn't exists
    if (!link) {
      return res
        .status(404)
        .json({success, error: "Sorry, couldn't find what you're looking for"});
    }

    // Checking if the link belongs to the user

    if (link.user.toString() !== req.user.id) {
      return res.status(401).json({success, error: "Bad Request!"});
    }

    // Performing the delete operation

    const delLink = await Link.findByIdAndDelete(req.params.id);
    success = true;
    return res.json({success, info: "Item "+ delLink.title+" Deleted!"});
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something Went Wrong!" });
  }
});

module.exports = router;
