import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Nama wajib diisi" });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Email tidak valid" });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ message: "Pesan wajib diisi" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Pesan baru dari ${name} (Portofolio)`,
      text: message,
    });

    return res.status(200).json({ message: "Pesan berhasil dikirim" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Gagal mengirim pesan" });
  }
}

