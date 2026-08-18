export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,35,42,0.35),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm uppercase tracking-widest text-brand-gold">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
