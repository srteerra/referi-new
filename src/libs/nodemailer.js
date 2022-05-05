'use strict';
const nodemailer = require('nodemailer');

async function sendMail(info) {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: 'referigames@gmail.com',
        pass: 'rgnnlbkqsaxtqmdd',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail(info);
  } catch (error) {
    throw error;
  }
}

module.exports = { sendMail };
