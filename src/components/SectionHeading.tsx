interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_1fr]">
      <div>
        {eyebrow && (
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
            {eyebrow}
          </p>
        )}

        <h2 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] md:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-md self-end text-[14px] leading-6 text-[var(--muted)] md:justify-self-end">
          {description}
        </p>
      )}
    </div>
  );
}
