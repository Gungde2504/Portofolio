import { Router } from "express";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import { sendContactEmail } from "../controllers/contactController.js";

const router = Router();

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 });

router.post(
  "/",
  limiter,
  [
    body("name").trim().notEmpty().withMessage("Nama wajib diisi"),
    body("email").isEmail().withMessage("Email tidak valid"),
    body("message").trim().notEmpty().withMessage("Pesan wajib diisi"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await sendContactEmail(req.body);
      res.status(200).json({ message: "Pesan berhasil dikirim" });
    } catch (err) {
      res.status(500).json({ message: "Gagal mengirim pesan" });
    }
  }
);

export default router;
