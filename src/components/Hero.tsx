"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { site } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/site/hero-firefighter.png"
          alt="Firefighter tackling a blaze"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/80 to-brand-ink/20" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24 sm:px-6 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white backdrop-blur"
        >
          <ShieldCheck className="h-4 w-4 text-brand-gold" />
          {site.certification}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl font-display text-4xl uppercase leading-tight text-white text-balance sm:text-5xl md:text-6xl"
        >
          Engineering trust for{" "}
          <span className="text-brand-red">safer spaces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl font-display text-xl italic text-brand-gold"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-base leading-relaxed text-white/70"
        >
          From fire extinguishers and alarm systems to hydrant installations,
          we help homes, businesses, and facilities choose and maintain the
          protection they need across Indore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="rounded-full bg-brand-red px-7 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
          >
            Request a Site Visit
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
