import { Resend } from "resend";

const sendEmail = async ({ name, email, subject, message }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("RESEND_API_KEY =", process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.EMAIL_TO,
    subject: `📩 ${subject}`,
    replyTo: email,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Portfolio Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default sendEmail;