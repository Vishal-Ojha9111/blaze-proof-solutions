export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="font-display text-sm uppercase tracking-widest text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-display text-3xl uppercase leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-brand-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded bg-gradient-to-r from-brand-red to-brand-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-brand-ink/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
