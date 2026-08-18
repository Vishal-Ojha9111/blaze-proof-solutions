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

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    const res = await fetch("https://api.resend.com/emails", {
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

    if (!res.ok) {
      return {
        status: "error",
        message: "Something went wrong sending your message. Please call us instead.",
      };
    }
  } else {
    console.log("New contact enquiry (RESEND_API_KEY not set):", {
      name,
      phone,
      email,
      message,
    });
  }

  return {
    status: "success",
    message: "Thanks! Your enquiry has been received. We'll get back to you shortly.",
  };
}
