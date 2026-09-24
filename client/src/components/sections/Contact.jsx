import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { socials } from "../../data/socials";
import { MailIcon, SendIcon } from "../ui/icons";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 max-w-5xl mx-auto py-24">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="skill-card p-8 flex flex-col justify-between"
        >
          <div>
            <p className="text-xs font-bold tracking-wide text-primary mb-2">{t("contact.label")}</p>
            <h2 className="text-3xl font-extrabold mb-4">{t("contact.heading")}</h2>
            <p className="text-slate-500 dark:text-gray-400 leading-relaxed mb-8">
              {t("contact.description")}
            </p>
            <a
              href="mailto:shemarawiditrisna@gmail.com"
              className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors mb-6"
            >
              <span className="skill-icon-well w-10 h-10 flex items-center justify-center p-2 text-primary">
                <MailIcon className="w-full h-full" />
              </span>
              shemarawiditrisna@gmail.com
            </a>
          </div>

          <div className="flex gap-3 flex-wrap">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                aria-label={s.name}
                className="skill-icon-well w-11 h-11 flex items-center justify-center p-2.5 text-primary dark:text-blue-300"
              >
                <s.icon className="w-full h-full" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="skill-card p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              placeholder={t("contact.formName")}
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              name="email"
              type="email"
              placeholder={t("contact.formEmail")}
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder={t("contact.formMessage")}
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "loading"}
              className="btn-primary px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2"
            >
              {status === "loading" ? t("contact.sending") : (<>{t("contact.send")}<SendIcon className="w-4 h-4" /></>)}
            </motion.button>
            {status === "success" && (
              <p className="text-green-500 text-sm">{t("contact.success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm">{t("contact.error")}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}





