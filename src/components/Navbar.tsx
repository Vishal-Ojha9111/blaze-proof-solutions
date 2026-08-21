"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/site/logo-mark.png"
            alt={site.name}
            width={160}
            height={106}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`font-display text-sm uppercase tracking-wide transition-colors ${
                  active ? "text-brand-red" : "text-brand-ink/80 hover:text-brand-red"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-brand-red px-4 py-2 font-display text-sm uppercase tracking-wide text-brand-red transition-colors hover:bg-brand-red hover:text-white"
          >
            Request a Site Visit
          </Link>
          <a
            href={`tel:+91${site.phones[0]}`}
            className="flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
          >
            <Phone className="h-4 w-4" />
            {site.phones[0]}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-brand-cream md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`rounded-md px-3 py-2 font-display text-sm uppercase tracking-wide ${
                  pathname === link.href
                    ? "bg-brand-red/10 text-brand-red"
                    : "text-brand-ink/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:+91${site.phones[0]}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-2 font-display text-sm uppercase tracking-wide text-white"
            >
              <Phone className="h-4 w-4" />
              Call {site.phones[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
