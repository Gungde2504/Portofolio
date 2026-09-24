import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Pesan baru dari ${name} (Portofolio)`,
    text: message,
  });
}
