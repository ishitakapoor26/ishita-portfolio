import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-[var(--background)]/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a href="#top" className="text-sm font-semibold tracking-[-0.01em]">
            Ishita Kapoor
          </a>

          <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a href="#work" className="transition-colors hover:text-black">
              Work
            </a>

            <a href="#about" className="transition-colors hover:text-black">
              About
            </a>

            <a href="#writing" className="transition-colors hover:text-black">
              Writing
            </a>

            <a href="#resume" className="transition-colors hover:text-black">
              Résumé
            </a>

            <a
              href="#contact"
              className="text-black transition-opacity hover:opacity-60"
            >
              Let’s talk ↗
            </a>
          </div>

          <button className="text-sm md:hidden" aria-label="Open navigation">
            Menu
          </button>
        </nav>
      </Container>
    </header>
  );
}
