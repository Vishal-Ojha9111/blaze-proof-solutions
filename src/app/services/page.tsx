import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Blaze Proof Solution",
  description:
    "Explore our fire safety services, from installation and maintenance to audits and staff training.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="End-to-end fire safety services designed to protect your people, property, and operations."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Comprehensive Fire Safety Solutions"
          description="From installation to ongoing maintenance, we cover every stage of fire safety compliance."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video bg-brand-cream">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-black/5 px-6 py-5">
                <h3 className="font-display text-base uppercase tracking-wide text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
