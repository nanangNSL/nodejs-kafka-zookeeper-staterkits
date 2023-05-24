const nodemailer = require("nodemailer");
require("dotenv").config();

exports.Sendmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER, // write your smtp account user name
        pass: process.env.MAIL_PASS, // write your smtp account user password
      },
    });
    let code = `<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>
        /* Styling untuk email */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h1 {
          color: #333333;
          font-size: 24px;
          margin-bottom: 20px;
        }
        
        p {
          margin-bottom: 20px;
        }
        
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
        }
        
        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 14px;
        }
        
        .footer p {
          margin-bottom: 0;
        }
        
        @media only screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
          
          h1 {
            font-size: 22px;
          }
          
          p {
            font-size: 16px;
          }
          
          .button {
            display: block;
            margin: 0 auto;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Dear ${req?.body?.name ? req?.body?.name : req?.body?.to_send},</h1>
        
        <p>Anda sudah hampir siap! Mohon masukkan kode verifikasi ini, Bersiaplah untuk memulai petualangan digital bersama kami!</p>
        <h3>874874</h3>
        
        <a href="#" class="button">Learn More</a>
        
        <div class="footer">
          <p>Best regards,</p>
          <p>Q-log @Qtasnim Digital Technology</p>
        </div>
      </div>
    </body>
    </html>`;

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "worklifebalance212@gmail.com", // sender address
      to: req?.body.to_send, // list of receivers
      subject: req.body?.subject, // Subject line
      html: code, // html body
    });
    res.status(200).json({ message: `Message send ${info.messageId}` });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log("Error: %s", error);
  }
};
