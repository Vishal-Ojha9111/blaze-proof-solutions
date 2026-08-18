import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-lg bg-brand-cream p-2">
            <Image
              src="/images/site/logo-mark.png"
              alt={site.name}
              width={200}
              height={132}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {site.tagline} ISO 9001:2015 certified supplier and installer of fire
            extinguishers, fire hydrant systems, fire alarm systems, and PPE.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 transition-colors hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{site.address}</span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
                <a href={`tel:+91${phone}`} className="hover:text-brand-gold">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-gold break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
