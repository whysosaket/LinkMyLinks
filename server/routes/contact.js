require("dotenv").config();

const expess = require("express");

const router = expess.Router();
const nodemailer = require("nodemailer");

router.route("/").post(async (req, res) => {
    const { firstName, lastName, phone, email, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD
            },
            secure: true
    
          });
        const mailOptions = {
            from: 'Personal Contact Helper <' + process.env.EMAIL + '>',
            to: "saketaryan2018@gmail.com",
            subject: 'New Form Submission',
            html: `
              <h4>First Name: ${firstName}</h4>
                <h4>Last Name: ${lastName}</h4>
                <h4>Phone: ${phone}</h4>
                <h4>Email: ${email}</h4>
                <h4>Message: ${message}</h4>
            `
          };
          
          transporter.sendMail(mailOptions, async function(error, info){
            if (error) {
              console.log(error);
              return res.json({ error: "Something Went Wrong!" });
            }
            else {
              console.log('Email sent: ' + info.response);
              return res.json({ success: true, info: "Form Submitted Successfully" });
            }
          }
          );
        // return res.json({ success: true, info: "Form Submitted Successfully" });
    } catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    }
});
module.exports = router;