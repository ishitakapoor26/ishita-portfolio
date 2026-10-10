import { motion, useReducedMotion } from "motion/react";
import WorkFeaturedIn from "../components/WorkFeaturedIn";

const heroCards = [
  {
    id: "01",
    title: "Strategy",
    image: "/images/strategy.jpg",
    alt: "Business strategy and planning",
    className: "hero-card--strategy",
  },
  {
    id: "02",
    title: "Product",
    image: "/images/product.jpg",
    alt: "Product design and user experience",
    className: "hero-card--product",
  },
  {
    id: "03",
    title: "Technology",
    image: "/images/technology.jpg",
    alt: "Technology and artificial intelligence",
    className: "hero-card--technology",
  },
  {
    id: "04",
    title: "Impact",
    image: "/images/impact.jpg",
    alt: "Accessibility and social impact",
    className: "hero-card--impact",
  },
];

const projects = [
  {
    number: "01",
    category: "PRODUCT · ACCESSIBILITY",
    name: "Neenva Innovations",
    role: "Founder, Product & Strategy",
    description:
      "Building accessible STEM learning experiences for visually impaired students through assistive technology and inclusive design.",
    visual: "Accessible learning",
  },
  {
    number: "02",
    category: "GROWTH · HEALTH TECH",
    name: "Feel Your Best",
    role: "Founder’s Office · Growth & Strategy",
    description:
      "Working on customer acquisition, lead qualification and conversion systems for a digital wellness company.",
    visual: "Growth systems",
  },
  {
    number: "03",
    category: "DATA · RESEARCH",
    name: "University of Calgary",
    role: "Data Analyst",
    description:
      "Analyzing large-scale survey data to explore accessibility, gender gaps and differences in educational outcomes.",
    visual: "Research & insights",
  },
];

const experience = [
  {
    date: "2026 — 2027",
    role: "Schwarzman Scholar",
    organization: "Tsinghua University · Beijing",
    description:
      "Studying global affairs, leadership and the intersection of technology, business and public policy.",
  },
  {
    date: "2025 — PRESENT",
    role: "Founder’s Office · Growth & Strategy",
    organization: "Feel Your Best",
    description:
      "Supporting growth strategy, customer journeys and operational systems at a digital wellness company.",
  },
  {
    date: "2024",
    role: "Data Analyst",
    organization: "University of Calgary",
    description:
      "Working with large survey datasets to investigate accessibility and gender-related education gaps.",
  },
  {
    date: "2024 — 2025",
    role: "Founder & CEO",
    organization: "Neenva Innovations",
    description:
      "Leading product development and stakeholder engagement for assistive STEM education technology.",
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      {/* Hero */}
      <section className="hero-section" id="top">
        <nav className="site-nav" aria-label="Main navigation">
          <div className="site-nav-links">
            <a href="#work">WORK</a>
            <span className="nav-separator" aria-hidden="true">
              |
            </span>
            <a href="#about">ABOUT</a>
            <span className="nav-separator" aria-hidden="true">
              |
            </span>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>

        <div className="site-container">
          <div className="hero-inner">
            <motion.div
              className="hero-location"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p style={{ fontWeight: 600, fontSize: "0.8rem" }}>
                BEIJING, CHINA
              </p>
              <a href="mailto:ISHITA.KAPOOR.CAREER@GMAIL.COM">
                ISHITA.KAPOOR.CAREER@GMAIL.COM
              </a>
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ISHITA KAPOOR
            </motion.h1>

            {/* Four individually positioned cards */}
            <div className="hero-cards" aria-label="Areas of work">
              {heroCards.map((card, index) => {
                const rotations = [-8, 4, -3, 8];
                const hoverRotations = [-11, 7, -6, 11];

                return (
                  <motion.a
                    key={card.id}
                    href="#work"
                    aria-label={`Explore ${card.title} work`}
                    className={`hero-card ${card.className}`}
                    initial={
                      reduceMotion
                        ? {
                            opacity: 1,
                            rotate: rotations[index],
                          }
                        : {
                            opacity: 0,
                            y: 22,
                            scale: 0.94,
                            rotate: rotations[index],
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: rotations[index],
                    }}
                    transition={{
                      duration: 0.75,
                      delay: reduceMotion ? 0 : 0.35 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -9,
                            scale: 1.045,
                            rotate: hoverRotations[index],
                            zIndex: 20,
                            transition: { duration: 0.3 },
                          }
                    }
                  >
                    {/* Placeholder remains visible if the image fails */}
                    <div className="hero-card-placeholder" aria-hidden="true">
                      <span>{card.id} / 04</span>
                      <strong>{card.title}</strong>
                    </div>

                    <img
                      src={card.image}
                      alt={card.alt}
                      className="hero-card-image"
                      loading="eager"
                      onError={(event) => {
                        event.currentTarget.style.opacity = "0";
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Main positioning statement */}
            <motion.div
              className="hero-positioning"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p>BUSINESS STRATEGY,</p>
              <p>PRODUCT &amp; TECHNOLOGY</p>
            </motion.div>

            {/* Collaborations */}
            <motion.div
              className="hero-clients"
              id="mentions"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            ></motion.div>
          </div>
        </div>
      </section>

      <WorkFeaturedIn />

      {/* Selected work */}
      <section className="section" id="work">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 className="section-title">Ideas into action.</h2>
            </div>

            <p className="section-description">
              A selection of work across product, business strategy, technology
              and impact.
            </p>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.number}>
                <div className="work-card-visual">
                  <p className="work-card-visual-title">{project.visual}</p>
                  <span className="work-card-number">
                    {project.number} / 03
                  </span>
                </div>

                <div className="work-card-content">
                  <div className="work-card-meta">
                    <span>{project.category}</span>
                  </div>

                  <h3 className="work-card-title">{project.name}</h3>

                  <p className="work-card-meta">{project.role}</p>

                  <p className="work-card-description">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2 className="section-title">Where I’ve been.</h2>
            </div>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.role}>
                <p className="experience-date">{item.date}</p>

                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-organization">{item.organization}</p>
                  <p className="experience-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="site-container">
          <p className="eyebrow">03 / A LITTLE ABOUT ME</p>

          <div className="about-grid">
            <h2 className="about-lead">
              Curious about how technology, business and people shape the world.
            </h2>

            <div>
              <p className="about-copy">
                I’m a computer science graduate and Schwarzman Scholar at
                Tsinghua University, interested in building products and
                businesses that solve meaningful problems.
              </p>

              <p className="about-copy">
                My experience spans entrepreneurship, accessible education, data
                analysis and growth strategy. I enjoy connecting technical
                possibilities with human needs and business decisions.
              </p>

              <p className="about-copy">
                I’m particularly interested in product management, responsible
                AI, global collaboration and the ways ideas move across
                industries and borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="site-container">
          <p className="eyebrow">04 / GET IN TOUCH</p>

          <h2 className="contact-title">
            Have something
            <br />
            interesting in mind?
          </h2>

          <a className="contact-link" href="mailto:YOUR_EMAIL@example.com">
            LET’S TALK <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer site-container">
        <p>© {new Date().getFullYear()} Ishita Kapoor</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
