 /* ******************************************** MAIL TO */
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');   


router.get('/', function(req, res, next) {
    res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

router.post("/", (req, res) => {
    //console.log(req.body);
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>CONTACT INFO</h3>
            <ul>
                <li>First name: ${req.body.firstname}</li>
                <li>Last name: ${req.body.lastname}</li>
                <li>Email: ${req.body.email}</li>  
                <li>Phone number: ${req.body.pnumber}</li>
            </ul>
            <br>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({ 
            //service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'loginTestmailer@gmail.com',
                pass: 'Login123!'
            }
        });

        let mailOptions = {
            from: '"loginTestmailer@gmail.com', // sender address
            to: 'michael.sansone@hotmail.com', // list of receivers
            replyTo: 'michael.sansone@hotmail.com',
            subject: 'Hello ✔', // Subject line
            text: req.body.message, // plain text body
            html: htmlEmail // html body
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info.messageId);
            res.json({success : "Updated Successfully", status : 200});
        });

    })
})

module.exports = router;

/* ******************************************** MAIL TO */