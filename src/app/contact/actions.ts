"use server";

import { site } from "@/lib/site-data";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !phone || !message) {
    return { status: "error", message: "Please fill in your name, phone, and message." };
  }

  if (name.length > 100 || phone.length > 30 || email.length > 254 || message.length > 4000) {
    return { status: "error", message: "Please keep your details within the allowed limits." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const googleSheetsWebhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  const resendApiKey = process.env.RESEND_API_KEY;
  let delivered = false;

  if (googleSheetsWebhookUrl) {
    try {
      const sheetsResponse = await fetch(googleSheetsWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          submittedAt: new Date().toISOString(),
          secret: googleSheetsWebhookSecret,
        }),
      });

      if (!sheetsResponse.ok) {
        return {
          status: "error",
          message: "We could not save your enquiry. Please call us instead.",
        };
      }

      delivered = true;
    } catch {
      return {
        status: "error",
        message: "We could not save your enquiry. Please call us instead.",
      };
    }
  }

  if (resendApiKey) {
    let res: Response;

    try {
      res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Blaze Proof Solution Website <onboarding@resend.dev>",
          to: [site.email],
          reply_to: email || undefined,
          subject: `New enquiry from ${name}`,
          text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "-"}\n\nMessage:\n${message}`,
        }),
      });
    } catch {
      return {
        status: "error",
        message: "We could not send your message. Please call us instead.",
      };
    }

    if (!res.ok) {
      return {
        status: "error",
        message: "Something went wrong sending your message. Please call us instead.",
      };
    }

    delivered = true;
  }

  if (!delivered) {
    return {
      status: "error",
      message: "Online enquiries are not configured yet. Please call us instead.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your enquiry has been received. We'll get back to you shortly.",
  };
}
