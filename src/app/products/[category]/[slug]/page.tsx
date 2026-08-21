import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { productCategories } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      slug: product.slug,
    }))
  );
}

async function getProduct(params: ProductPageProps["params"]) {
  const { category: categorySlug, slug } = await params;
  const category = productCategories.find((item) => item.slug === categorySlug);
  const product = category?.products.find((item) => item.slug === slug);

  return category && product ? { category, product } : undefined;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const result = await getProduct(params);

  if (!result) {
    return { title: "Product Not Found | Blaze Proof Solution" };
  }

  return {
    title: `${result.product.name} | Blaze Proof Solution`,
    description: `${result.product.name} from the ${result.category.title} catalog. Request a quote from Blaze Proof Solution.`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const result = await getProduct(params);

  if (!result) {
    notFound();
  }

  const { category, product } = result;

  return (
    <>
      <PageHero
        eyebrow={category.title}
        title={product.name}
        description="Request product availability, pricing, and technical guidance for your facility."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain p-10"
              priority
            />
          </div>

          <div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wide text-brand-red hover:text-brand-red-dark"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to products
            </Link>
            <p className="mt-8 font-display text-sm uppercase tracking-widest text-brand-red">
              Product category
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase leading-tight text-brand-ink">
              {category.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
              {category.description}
            </p>
            <div className="mt-8">
              <p className="font-display text-xs uppercase tracking-wide text-brand-ink/60">
                Reference standards
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.standards.map((standard) => (
                  <span
                    key={standard}
                    className="rounded-full border border-brand-gold/60 bg-brand-gold/10 px-3 py-1.5 text-sm font-medium text-brand-ink"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
