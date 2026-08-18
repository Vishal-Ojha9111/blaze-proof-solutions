import Image from "next/image";
import type { Product } from "@/lib/site-data";

export default function ProductCard({ product }: { product: Product }) {
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
      </div>
    </div>
  );
}
