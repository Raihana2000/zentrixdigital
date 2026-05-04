import { Router, type IRouter } from "express";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = (req.body ?? {}) as Record<string, unknown>;

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email and message are required" });
    return;
  }

  const smtpHost = process.env["SMTP_HOST"];
  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env["SMTP_PORT"] ?? "587"),
        secure: process.env["SMTP_SECURE"] === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });

      const to = process.env["CONTACT_EMAIL"] ?? smtpUser;
      const phoneStr = typeof phone === "string" && phone.trim() ? phone.trim() : "—";
      const msgStr = typeof message === "string" ? message : String(message);

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`,
        replyTo: String(email),
        to,
        subject: `Nieuw contactformulier van ${name}`,
        text: `Naam: ${name}\nE-mail: ${email}\nTelefoon: ${phoneStr}\n\n${msgStr}`,
        html: [
          `<p><strong>Naam:</strong> ${name}</p>`,
          `<p><strong>E-mail:</strong> ${email}</p>`,
          `<p><strong>Telefoon:</strong> ${phoneStr}</p>`,
          `<p><strong>Bericht:</strong><br>${msgStr.replace(/\n/g, "<br>")}</p>`,
        ].join(""),
      });

      req.log.info({ name, email }, "contact form email sent");
    } catch (err) {
      req.log.error({ err }, "failed to send contact email — returning 200 to client");
    }
  } else {
    logger.warn(
      { name, email },
      "SMTP not configured — contact form submission logged but not emailed. Set SMTP_HOST, SMTP_USER, SMTP_PASS to enable email dispatch.",
    );
  }

  res.status(200).json({ ok: true });
});

export default router;
