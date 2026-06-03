/* eslint-disable no-undef */
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, company, phone, product, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    await resend.emails.send({
      from: "contact@freeze.net.in",
      to: "info@freeze.net.in",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Product Interest:</strong> ${product || "Not specified"}</p>

        <hr />

        <p>${message || "No message provided."}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to send email",
    });
  }
}
