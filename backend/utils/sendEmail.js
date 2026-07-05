import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, subject, message }) => {

    try {

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.EMAIL_USER,

                pass: process.env.EMAIL_PASS

            }

        });

        const mailOptions = {

            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

            to: process.env.EMAIL_USER,

            replyTo: email,

            subject: `📩 New Portfolio Message - ${subject}`,

            html: `
                <div style="font-family:Arial,sans-serif;padding:20px">

                    <h2>New Portfolio Contact</h2>

                    <hr>

                    <p><strong>Name:</strong> ${name}</p>

                    <p><strong>Email:</strong> ${email}</p>

                    <p><strong>Subject:</strong> ${subject}</p>

                    <p><strong>Message:</strong></p>

                    <p>${message}</p>

                    <hr>

                    <small>
                        Sent from Yuvraj's Portfolio Website
                    </small>

                </div>
            `

        };

        await transporter.sendMail(mailOptions);

        console.log("✅ Email Sent Successfully");

    }

    catch (error) {

        console.error("❌ Email Error");

        console.error(error);

        throw error;

    }

};

export default sendEmail;