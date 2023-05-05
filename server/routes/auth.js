// Using enviroment variables to save data from being published online
require("dotenv").config();

const expess = require("express");
const router = expess.Router();
const User = require("../models/User");
const Otp = require("../models/Otp");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = process.env.JWT_SECRET;
const nodemailer = require("nodemailer");

/*

╭━━━╮╱╱╱╱╱╭╮╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╭╯╰╮╱╱╱╭╯┃
┃╰━╯┣━━┳╮┣╮╭╋━━╮╰╮┃
┃╭╮╭┫╭╮┃┃┃┃┃┃┃━┫╱┃┃
┃┃┃╰┫╰╯┃╰╯┃╰┫┃━┫╭╯╰╮
╰╯╰━┻━━┻━━┻━┻━━╯╰━━╯

*/

// Creating a user using POST: (/api/auth/createuser) , Doesn't require auth (or no login required);
router
  .route("/createuser")
  .post(
    [
      body("name", "Enter a valid name").isLength({ min: 3 }),
      body("password").isLength({ min: 6 }),
      body("username").isLength({ min: 4 }),
      body("email").isEmail(),
    ],
    async (req, res) => {
      let success = false;

      // Validating if email/password/name is acceptable
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }

      // Saving req data into a variable
      let data = req.body;

      try {
        // Checking if user already exists
        let user = await User.findOne({
          username: data.username.toLowerCase(),
        });
        if (user) {
          res
            .status(400)
            .json({
              success,
              error: "Sorry, a user with this username already exists!",
            });
          return null;
        }

        // Checking if email already exists
        user = await User.findOne({ email: data.email.toLowerCase() });
        if (user) {
          res.status(400).json({
            success,
            error: "Sorry, a user with this email already exists!",
          });
          return null;
        }

        // Checking if otp is valid
        const otpCheck = await Otp.findOne({ email: data.email.toLowerCase() });
        if (!otpCheck) {
          res.status(400).json({
            success,
            error: "Sorry, the otp is invalid or expired!",
          });
          return null;
        }

        // Checking if otp is valid
        if (otpCheck.otp !== data.otp) {
          res.status(400).json({
            success,
            error: "Sorry, the otp is invalid or expired!",
          });
          return null;
        }

        // Using bcrypt to generate a secured password

        // Crating a salt from bcrypt
        const securedPassword = await bcrypt.hash(data.password.toString(), 10);

        // Creating the user
        user = await User.create({
          name: data.name,
          password: securedPassword,
          username: data.username.toLowerCase(),
          email: data.email.toLowerCase(),
        });

        const returnData = {
          user: {
            id: user.id,
          },
        };
        success = true;
        return res.json({ success, info: "Account Created Successfully!!" });
      } catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
      }
    }
  );

/*


╭━━━╮╱╱╱╱╱╭╮╱╱╱╱╭━━━╮
┃╭━╮┃╱╱╱╱╭╯╰╮╱╱╱┃╭━╮┃
┃╰━╯┣━━┳╮┣╮╭╋━━╮╰╯╭╯┃
┃╭╮╭┫╭╮┃┃┃┃┃┃┃━┫╭━╯╭╯
┃┃┃╰┫╰╯┃╰╯┃╰┫┃━┫┃┃╰━╮
╰╯╰━┻━━┻━━┻━┻━━╯╰━━━╯

*/

// Authenticate a user using POST: (/api/auth/login) , Doesn't require auth (or no login required);

router
  .route("/login")
  .post(
    [
      body("username", "Enter a employeeID").exists(),
      body("password", "Password cannot be blank").exists(),
    ],
    async (req, res) => {
      // Validating if employeeid/password/name is acceptable
      const errors = validationResult(req);
      let success = false;

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let { username, password } = req.body;
      username = username.toLowerCase();

      try {
        let user = await User.findOne({ username }).exec();

        if (!user) {
          return res
            .status(400)
            .json({success, error: "Please, login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(
          password.toString(),
          user.password
        );
        if (!passwordCompare) {
          return res
            .status(400)
            .json({success, error: "Please, login with correct credentials" });
        }

        const payload = {
          user: {
            id: user.id,
          },
        };

        const authtoken = jwt.sign(payload, JWT_SECRET);
        success = true;
        return res.json({ success, username, authtoken });
      } catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
      }
    }
  );

router
  .route("/updatepassword")
  .post(
    [
      body("username", "Username cannot be less than 6 characters").isLength({ min: 4 }),
      body("oldpassword", "Password cannot be blank/less than 6 characters").isLength({ min: 6 }),
      body("newpassword", "Password cannot be blank/less than 6 characters").isLength({ min: 6 }),
    ],
    fetchuser,
    async (req, res) => {
      // Validating if employeeid/password/name is acceptable
      const errors = validationResult(req);
      let success = false;

      let {username, oldpassword, newpassword} = req.body;
      username = username.toLowerCase();

      try{
      // Sending a error 400 response as validators didn't work
      if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }

      // Validating if the account exist or not
      const user = await User.findById(req.user.id);
      if (!user) {
        return res
          .status(400)
          .json({success, error: "Please, try again with correct credentials" });
      }

      // Validating if username is correct
      if (user.username !== username) {
        return res
          .status(400)
          .json({success, error: "Please, try again with correct credentials" });
      }

      // Validating if the old password matches userpassword
      const passwordCompare = await bcrypt.compare(
        oldpassword.toString(),
        user.password
      );
      if (!passwordCompare) {
        return res
          .status(400)
          .json({success, error: "Please, try again with correct credentials" });
      }

      // Generating a secured password
      // Crating a salt from bcrypt
      const securedPassword = await bcrypt.hash(newpassword.toString(), 10);

      // Actually updaing the password
      user.password = securedPassword;
      user.save();

      success = true;
      return res.json({ success, info: "Password updated successfully" });

      }catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
      }
    }
  );

router.route('/otp').post(async (req, res) => {
  const {email} = req.body;
  // check if email is valid and not a spam email
  
  if(!email || !isValid(email.toLowerCase())){
    return res.json({error: "Please enter a valid email"});
  }

    let email1 = email.toLowerCase();
    if(isValid(email1)){

      // check if email is already registered
      const user = await User.findOne({email: email1});
      if(user){
        return res.json({error: "Email already registered"});
      }

      // check if otp is already sent
      const gotOtp = await Otp.findOne({email: email1});
      if(gotOtp){
        return res.json({error: "OTP already sent, check your email!"});
      }

      // use nodemailer to send otp
      const otp = Math.floor(100000 + Math.random() * 900000);
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        },
        secure: true

      });

      const mailOptions = {
        from: 'LinkMyLinks <' + process.env.EMAIL + '>',
        to: email,
        subject: 'Your One-Time Password (OTP) Verification Code',
        html: `
          <p>Hello There,</p>
          <p>Thank you for choosing our service. To verify your account, please enter the following One-Time Password (OTP) in the provided field:</p>
          <h2 style="font-weight: bold;">${otp}</h2>
          <p>Please note that this OTP is valid for only a single use and will expire in <strong>5 Minutes</strong>. If you have not initiated this verification process, please disregard this email.</p>
          <p>Thank you for your cooperation.</p>
          <p>Best regards,</p>
          <h4>LinkMyLinks Co.</h4>
        `
      };
      
      transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
          console.log(error);
          res.json({error: "Something went wrong"});
        } else {
          await Otp.create({email: email1, otp});
          return res.json({success: true, message: "OTP sent successfully"});
        }
      }
      );
    }else{
      return res.json({error: "Please enter a valid email"});
    }
})

function isValid(email){
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

module.exports = router;
