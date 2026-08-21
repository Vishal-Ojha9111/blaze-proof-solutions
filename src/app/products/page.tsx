import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import WaveDivider from "@/components/WaveDivider";
import { productCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products | Blaze Proof Solution",
  description:
    "Browse our full catalog of fire hydrant systems, fire alarm systems, and fire safety accessories.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Our Products"
        description="ISI marked, rigorously tested fire safety equipment for every building and facility."
      />

      <nav
        aria-label="Product categories"
        className="border-b border-black/5 bg-white"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-4 sm:px-6">
          {productCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="shrink-0 rounded-full border border-black/10 px-4 py-2 font-display text-xs uppercase tracking-wide text-brand-ink/75 transition-colors hover:border-brand-red hover:text-brand-red"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      {productCategories.map((category, index) => (
        <div key={category.slug}>
          {index > 0 && <WaveDivider flip={index % 2 === 0} />}
          <section id={category.slug} className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionHeading eyebrow="Category" title={category.title} description={category.description} />
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-brand-ink/65">
              <span className="font-medium uppercase tracking-wide">Reference standards:</span>
              {category.standards.map((standard) => (
                <span
                  key={standard}
                  className="rounded-full border border-brand-gold/60 bg-brand-gold/10 px-3 py-1 font-medium text-brand-ink"
                >
                  {standard}
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {category.products.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  href={`/products/${category.slug}/${product.slug}`}
                />
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
