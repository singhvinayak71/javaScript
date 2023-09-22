"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "singhvinayak7111@gmail.com",
    pass: "kkqhfopzumypcotu",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html ) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'singhvinayak7111@gmail.com', // sender address
    to,// list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });

}

module.exports = sendMail


// "viveks9131@gmail.com", 