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
    <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            {eyebrow}
          </p>
        )}

        <h2 className="font-serif text-4xl leading-none tracking-[-0.02em] md:text-5xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
