require("dotenv").config();

const expess = require("express");
const router = expess.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const Link = require("../models/Link");

const JWT_SECRET = process.env.JWT_SECRET;

router.route("/fetchalllinks")
.get(fetchuser,
    async (req, res) => {

});

router.route("/addlink")
.post(
  [
    body("title", "TitleUsername cannot be less than 6 characters").isLength({
      min: 4,
    }),
    body(
      "linkaddress",
      "Link Address cannot be blank/less than 4 characters"
    ).isLength({ min: 4 }),
  ],
  fetchuser,
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
      return res
        .status(400)
        .json({ error: "Please, try again with correct credentials" });
    }

    try {
        // Saving body data into constants
      const { title, list, linkaddress } = req.body;

      const link = await Link.create({
        user: req.user.id,
        title,
        linkaddress,
        list
      })

      success = true;
      res.json({success, info: "Link Added!"});

    } catch (error) {
      console.log(error);
      res.json({ error: "Something Went Wrong!" });
    }
  }
);

router.route("/updatelink")
.post(fetchuser,
    async (req, res) => {

    });

module.exports = router;
