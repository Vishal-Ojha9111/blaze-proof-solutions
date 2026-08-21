import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I need a quote for fire safety products or services for my property."
  );
  const phone = `91${site.phones[0]}`;

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Request a quote on WhatsApp"
      title="Request a quote on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display text-xs uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      WhatsApp Quote
    </a>
  );
}
