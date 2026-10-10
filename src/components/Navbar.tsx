const navigation = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="hero-nav absolute left-1/2 top-5 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-3 sm:gap-5">
        {navigation.map((item, index) => (
          <div key={item.label} className="flex items-center gap-3 sm:gap-5">
            <a href={item.href} className="hero-nav-link">
              {item.label}
            </a>

            {index < navigation.length - 1 && (
              <span aria-hidden="true" className="hero-nav-divider">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
