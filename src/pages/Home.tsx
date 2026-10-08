import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";

const projects = [
  {
    title: "Neenva Innovations",
    role: "Founder · Product · Strategy",
    description:
      "Building accessible STEM learning experiences for visually impaired students.",
    featured: true,
  },
  {
    title: "Feel Your Best",
    role: "Founder’s Office · Growth & Strategy",
    description:
      "Working across acquisition, qualification and conversion for a health-tech startup.",
  },
  {
    title: "University of Calgary",
    role: "Data Analyst · Research",
    description:
      "Turning large-scale education survey data into insights around accessibility and gender gaps.",
  },
];

const experience = [
  {
    year: "2026 — 2027",
    title: "Schwarzman Scholar",
    organization: "Tsinghua University · Beijing",
  },
  {
    year: "2025 — Present",
    title: "Founder’s Office · Growth & Strategy",
    organization: "Feel Your Best",
  },
  {
    year: "2024",
    title: "Data Analyst",
    organization: "University of Calgary",
  },
  {
    year: "2024 — 2025",
    title: "Founder & CEO",
    organization: "Neenva Innovations",
  },
];

export default function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="min-h-[calc(100vh-5rem)] border-b border-[var(--border)]">
          <Container className="flex min-h-[calc(100vh-5rem)] items-center py-24">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium text-[var(--muted)]">
                Product · Strategy · Technology
              </p>

              <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.035em] md:text-8xl lg:text-[9rem]">
                I build products,
                <br />
                businesses and
                <br />
                ideas that matter.
              </h1>

              <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
                  Computer scientist turned founder, strategist and product
                  thinker. Currently exploring technology, business and global
                  affairs from Beijing.
                </p>

                <a
                  href="#work"
                  className="w-fit border-b border-black pb-1 text-sm font-medium"
                >
                  Explore my work ↓
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* MENTIONS */}
        <section className="border-b border-[var(--border)] py-12">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Selected mentions & collaborations
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[var(--muted)]">
                <span>Microsoft</span>
                <span>Google</span>
                <span>UNICEF</span>
              </div>
            </div>
          </Container>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="border-b border-[var(--border)] py-24 md:py-32"
        >
          <Container>
            <SectionHeading
              eyebrow="Selected work"
              title="Things I’ve built, studied and helped grow."
              description="A selection of work across product, strategy, research and entrepreneurship."
            />

            <div className="grid gap-5">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={
                    index === 0
                      ? "min-h-[520px] border border-[var(--border)] bg-[var(--card)] p-8 md:p-12"
                      : "border border-[var(--border)] bg-[var(--card)] p-8 md:p-10"
                  }
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                        {project.role}
                      </p>

                      <h3 className="font-serif text-4xl tracking-[-0.02em] md:text-6xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="mt-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                      <p className="max-w-lg text-base leading-7 text-[var(--muted)]">
                        {project.description}
                      </p>

                      <span className="text-sm font-medium">
                        View case study ↗
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* MORE WORK */}
        <section className="border-b border-[var(--border)] py-24 md:py-32">
          <Container>
            <SectionHeading
              eyebrow="More work"
              title="Other things worth exploring."
            />

            <div className="grid border-t border-[var(--border)] md:grid-cols-2">
              {[
                "AI & responsible innovation",
                "Product experiments",
                "Technology & accessibility",
                "Global youth & leadership",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="border-b border-[var(--border)] py-6 text-lg transition-opacity hover:opacity-50 md:px-4"
                >
                  <div className="flex items-center justify-between">
                    <span>{item}</span>
                    <span>↗</span>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* EXPERIENCE */}
        <section className="border-b border-[var(--border)] py-24 md:py-32">
          <Container>
            <SectionHeading
              eyebrow="Recent adventures"
              title="A path that keeps changing shape."
            />

            <div className="border-t border-[var(--border)]">
              {experience.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="grid gap-3 border-b border-[var(--border)] py-7 md:grid-cols-[180px_1fr_1fr]"
                >
                  <p className="text-sm text-[var(--muted)]">{item.year}</p>

                  <p className="font-medium">{item.title}</p>

                  <p className="text-sm text-[var(--muted)]">
                    {item.organization}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* MOMENTS */}
        <section className="border-b border-[var(--border)] py-24 md:py-32">
          <Container>
            <SectionHeading
              eyebrow="Moments that mattered"
              title="The people, places and rooms behind the work."
            />

            <div className="grid min-h-[500px] grid-cols-2 gap-3 md:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-[#ebe9e2]" />
              ))}
            </div>
          </Container>
        </section>

        {/* RECOGNITION */}
        <section className="border-b border-[var(--border)] py-24 md:py-32">
          <Container>
            <SectionHeading
              eyebrow="Recognition"
              title="A few milestones along the way."
            />

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm text-[var(--muted)]">2026</p>
                <h3 className="mt-2 text-2xl font-medium">
                  Schwarzman Scholar
                </h3>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">2023</p>
                <h3 className="mt-2 text-2xl font-medium">Best Invention</h3>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">2023</p>
                <h3 className="mt-2 text-2xl font-medium">
                  Best Research Paper
                </h3>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">Patent</p>
                <h3 className="mt-2 text-2xl font-medium">
                  Intellectual property
                </h3>
              </div>
            </div>
          </Container>
        </section>

        {/* ARCHIVE */}
        <section className="border-b border-[var(--border)] py-24 md:py-32">
          <Container>
            <SectionHeading
              eyebrow="From the archive"
              title="A visual record of the journey."
            />

            <div className="grid gap-3 md:grid-cols-3">
              <div className="h-80 bg-[#ebe9e2]" />
              <div className="h-96 bg-[#e6e4dd] md:mt-16" />
              <div className="h-72 bg-[#ecebe5]" />
              <div className="h-96 bg-[#e8e6df] md:col-span-2" />
              <div className="h-72 bg-[#e4e2db]" />
            </div>
          </Container>
        </section>

        {/* WRITING */}
        <section
          id="writing"
          className="border-b border-[var(--border)] py-24 md:py-32"
        >
          <Container>
            <SectionHeading
              eyebrow="Writing"
              title="Notes from the field."
              description="Ideas on technology, product, leadership, global affairs and building things."
            />

            <div className="border-t border-[var(--border)]">
              {[
                "What building for accessibility taught me about product",
                "Technology, ambition and the responsibility to build well",
                "Learning to think across markets and cultures",
              ].map((article) => (
                <a
                  key={article}
                  href="#"
                  className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-7 transition-opacity hover:opacity-50"
                >
                  <span className="text-lg md:text-2xl">{article}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="border-b border-[var(--border)] py-24 md:py-32"
        >
          <Container>
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                About
              </p>

              <div>
                <h2 className="max-w-4xl font-serif text-5xl leading-tight tracking-[-0.025em] md:text-7xl">
                  India → Canada → China.
                  <br />
                  CS → founder → strategy → product.
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-8 text-[var(--muted)]">
                  I’m interested in the messy space between technology, business
                  and people: understanding problems, making decisions, building
                  products and figuring out how ideas move across borders.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 md:py-48">
          <Container>
            <div className="max-w-5xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Contact
              </p>

              <h2 className="font-serif text-6xl leading-[0.95] tracking-[-0.03em] md:text-8xl">
                Have an interesting
                <br />
                problem worth
                <br />
                thinking about?
              </h2>

              <a
                href="mailto:"
                className="mt-10 inline-block border-b border-black pb-2 text-lg"
              >
                Let’s talk ↗
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8">
        <Container>
          <div className="flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Ishita Kapoor</p>

            <div className="flex gap-6">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Résumé</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
