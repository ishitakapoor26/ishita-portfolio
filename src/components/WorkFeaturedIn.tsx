import { useReducedMotion } from "motion/react";

const organizations = [
  { name: "Microsoft", image: "/logos/microsoft.svg" },
  { name: "Google", image: "/logos/google.svg" },
  { name: "UNICEF", image: "/logos/unicef.svg" },
  { name: "Tsinghua University", image: "/logos/tsinghua.svg" },
  // Add more organisations here
];

export default function WorkFeaturedIn() {
  const reduceMotion = useReducedMotion();

  // Duplicate the logos for a seamless marquee loop.
  const logoSets = reduceMotion
    ? [organizations]
    : [organizations, organizations];

  return (
    <section className="featured-section" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="featured-heading">
        WORK FEATURED IN
      </h2>

      <div className="featured-marquee">
        <div
          className={`featured-track ${
            reduceMotion ? "featured-track--static" : ""
          }`}
        >
          {logoSets.map((set, setIndex) => (
            <div
              className="featured-group"
              key={setIndex}
              aria-hidden={setIndex === 1}
            >
              {set.map((organization, index) => (
                <div
                  className="featured-logo"
                  key={`${organization.name}-${index}`}
                >
                  <img
                    src={organization.image}
                    alt={setIndex === 0 ? organization.name : ""}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
