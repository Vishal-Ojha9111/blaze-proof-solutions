import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import {
  installationPhotos,
  missionPillars,
  site,
  whyChooseUs,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Blaze Proof Solution",
  description:
    "Learn about Blaze Proof Solution's mission, vision, and why businesses across Indore trust us for fire safety.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Guarding Life, Property & the Environment"
        description={`${site.name} is an ${site.certification.toLowerCase()} committed to fire safety excellence.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-red" />
              <div>
                <h3 className="font-display text-base uppercase text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-ink py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="Our Vision"
            title="The Foremost Guardian of Life & Property"
            description="Our vision is to be the foremost guardian of life, property, and the environment through our unwavering commitment to fire safety excellence. We aspire to set new industry standards and redefine fire protection by delivering innovative solutions that anticipate and prevent fire-related hazards."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {missionPillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-sm font-medium text-brand-gold"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="On-Site Work" title="Installations We're Proud Of" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {installationPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/5 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading align="center" eyebrow="Trusted By" title="Our Clients" />
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-brand-ink/60">
            We approach each client with dedication at the core of every
            engagement, building lasting relationships.
          </p>
          <div className="relative mx-auto mt-10 aspect-[1715/429] w-full max-w-3xl">
            <Image
              src="/images/site/p6_clients-strip.png"
              alt="Our clients: PW, Indian Oil, Government of India, Gosh Deep, JMD Project, Bharat Petroleum, Aditya Birla Grasim, CHRC, Shivashish Resort & Marriage Garden, Murphy's"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
