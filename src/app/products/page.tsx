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

      {productCategories.map((category, index) => (
        <div key={category.slug}>
          {index > 0 && <WaveDivider flip={index % 2 === 0} />}
          <section id={category.slug} className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionHeading eyebrow="Category" title={category.title} description={category.description} />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {category.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
