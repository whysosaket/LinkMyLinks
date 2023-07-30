require("dotenv").config();

const expess = require("express");

const router = expess.Router();
const nodemailer = require("nodemailer");

router.route("/").post(async (req, res) => {
    const { firstName, lastName, phone, email, message } = req.body;
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: "saketaryan2018@gmail.com",
            subject: "New Form Submission",
            text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        });
        return res.json({ success: true, info: "Form Submitted Successfully" });
    } catch (error) {
        console.log(error);
        return res.json({ error: "Something Went Wrong!" });
    }
});
module.exports = router;