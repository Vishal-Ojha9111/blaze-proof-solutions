"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, XCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-brand-red px-7 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Enquiry"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brand-ink/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-brand-ink/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand-ink/80">
          Email (optional)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-ink/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
          placeholder="Tell us what you need..."
        />
      </div>

      <SubmitButton />

      {state.status !== "idle" && (
        <div
          className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {state.status === "success" ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0" />
          )}
          {state.message}
        </div>
      )}
    </form>
  );
}
