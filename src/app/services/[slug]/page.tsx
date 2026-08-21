import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

async function getService(params: ServicePageProps["params"]) {
  const { slug } = await params;
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params);

  if (!service) {
    return { title: "Service Not Found | Blaze Proof Solution" };
  }

  return {
    title: `${service.title} | Blaze Proof Solution`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = await getService(params);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        description={service.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wide text-brand-red hover:text-brand-red-dark"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to services
            </Link>
            <SectionHeading
              eyebrow="How We Can Help"
              title="A Practical Starting Point for Your Facility"
              description="Every engagement begins with understanding your building, current systems, and the outcome you need. We can then recommend the appropriate next steps."
            />
            {service.standards && (
              <div className="mt-8">
                <p className="font-display text-xs uppercase tracking-wide text-brand-ink/60">
                  Reference standards
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.standards.map((standard) => (
                    <span
                      key={standard}
                      className="rounded-full border border-brand-gold/60 bg-brand-gold/10 px-3 py-1.5 text-sm font-medium text-brand-ink"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-brand-cream">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-8"
              />
            </div>
            <div className="border-t border-black/5 p-6">
              <h2 className="font-display text-xl uppercase text-brand-ink">
                Discuss your requirement
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                Share your property type and requirement with our team for a practical next step.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
              >
                Request Engineer Call Back
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
