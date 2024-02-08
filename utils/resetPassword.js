import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { capitalize } from 'lodash';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

const secretKey = process.env.RESET_PASSWORD_SECRET;

export async function generateResetToken() {
    const token = await crypto.randomBytes(32).toString('hex');
    const date = new Date();

    const newToken = date.toString().replace(/\s/g, '') + token; //Replace spaces

    return newToken;
}

async function signToken(data) {
    return jwt.sign(data, secretKey, { expiresIn: '1h' }); // Set appropriate expiration time
}

export async function sendResetPasswordEmail({ email, name, resetToken }) {
    const signedToken = await signToken({ email: email, resetToken: resetToken });
    const resetLink = `${process.env.BASE_URL}/0/auth/resetPassword?token=${signedToken}`;

    // console.log("The reset lnk ==> ", resetLink);

    const emailContent = `
    <html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Agdasima&family=Lato&display=swap" rel="stylesheet">
    </head>
        <body>
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #fff;background: linear-gradient(rgba(43,57,144,0.8),rgb(39,170,225) 65%);border-radius: 20px;font-family: 'Lato', sans-serif;">
                <h2 style="font-weight: 500;line-height: 1.1;font-size: 30px;color: rgb(255,255,255);font-family: 'Agdasima',sans-serif;">Password Reset Request</h2>
                <p>Hello ${capitalize(name)},</p>
                <p>You have requested to reset your password. Please click the button below to reset your password. This link will expire in 1 hour.</p>
                <a href="${resetLink}" style="background: linear-gradient(rgb(109,110,113),rgb(0,0,0)); color: #ffffff; text-decoration: none; padding: 10px 20px; margin: 15px 0; border-radius: 5px; display: inline-block;">Reset Password</a>
                <p>If you did not request this, please ignore this email.</p>
                <p>Best regards,</p>
                <p>Friend Finder</p>
            </div>
        </body>
    </html>`;

    // console.log("Email Content ==> ", emailContent);

    await transporter.sendMail({
        from: '"Friend Finder" <' + process.env.MAIL_USERNAME + '>',
        to: email,
        subject: 'Reset Password Request',
        html: emailContent,
    });
}