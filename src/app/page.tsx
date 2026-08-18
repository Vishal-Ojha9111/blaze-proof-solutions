import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import {
  installationPhotos,
  productOverview,
  whyChooseUs,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Comprehensive Range of Products"
          description="Our commitment to safety is reflected in our diverse product catalog."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productOverview.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg uppercase text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-full bg-brand-red px-7 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
          >
            View Full Catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>



      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="On-Site Work"
          title="Fire Hydrant System & Fire Protection Installations"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Blaze Proof Solution?"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Flame className="h-6 w-6 text-brand-red" />
                <h3 className="mt-4 font-display text-base uppercase text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading align="center" eyebrow="Trusted By" title="Our Clients" />
          <div className="relative mx-auto mt-10 aspect-[1715/429] w-full max-w-5xl">
            <Image
              src="/images/site/clients.png"
              alt="Our clients: PW, Indian Oil, Government of India, Gosh Deep, JMD Project, Bharat Petroleum, Aditya Birla Grasim, CHRC, Shivashish Resort & Marriage Garden, Murphy's"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-red py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl uppercase text-white sm:text-4xl">
            Protect What Matters Most
          </h2>
          <p className="max-w-xl text-white/80">
            Talk to our team about the right fire safety equipment and hydrant
            systems for your building or facility.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3 font-display text-sm uppercase tracking-wide text-brand-red transition-colors hover:bg-brand-cream"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
