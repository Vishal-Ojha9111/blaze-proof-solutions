import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site-data";

export default function ProductCard({
  product,
  href,
}: {
  product: Product;
  href?: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-square bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-black/5 px-4 py-3">
        <p className="text-center font-display text-sm uppercase tracking-wide text-brand-ink">
          {product.name}
        </p>
        {href && (
          <Link
            href={href}
            className="mt-3 block text-center font-display text-xs uppercase tracking-wide text-brand-ink/65 transition-colors hover:text-brand-red"
          >
            View product details
          </Link>
        )}
        <Link
          href="/contact"
          className="mt-3 block rounded-full border border-brand-red px-3 py-2 text-center font-display text-xs uppercase tracking-wide text-brand-red transition-colors hover:bg-brand-red hover:text-white"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
