import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Blaze Proof Solution",
  description:
    "Get in touch with Blaze Proof Solution for fire safety equipment, hydrant systems, and alarm installations in Indore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question about a product or need a site visit? Reach out and our team will get back to you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <h3 className="font-display text-sm uppercase text-brand-ink">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">
                    {site.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <h3 className="font-display text-sm uppercase text-brand-ink">Phone</h3>
                  {site.phones.map((phone) => (
                    <p key={phone} className="mt-1 text-sm text-brand-ink/70">
                      <a href={`tel:+91${phone}`} className="hover:text-brand-red">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <h3 className="font-display text-sm uppercase text-brand-ink">Email</h3>
                  <p className="mt-1 break-all text-sm text-brand-ink/70">
                    <a href={`mailto:${site.email}`} className="hover:text-brand-red">
                      {site.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
              <iframe
                title="Blaze Proof Solution location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  site.address
                )}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="font-display text-xl uppercase text-brand-ink">
              Send Us a Message
            </h2>
            <p className="mt-1 text-sm text-brand-ink/60">
              Fill out the form and our team will reach out to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
