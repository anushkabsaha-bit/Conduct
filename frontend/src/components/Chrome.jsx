import { useEffect, useState } from "react";

export const Mark = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect x="8" y="40" width="14" height="16" fill="#D54C15" />
    <rect x="25" y="26" width="14" height="30" fill="#D54C15" />
    <rect x="42" y="12" width="14" height="44" fill="#D54C15" />
  </svg>
);

const links = [
  ["Evidence", "#built"],
  ["Growth OS", "#growth-os"],
  ["The Desk", "#agents"],
  ["Why", "#why"],
  ["Anniversary", "#anniversary"],
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm border-b border-linen/15" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <a href="#top" data-testid="nav-home-link" className="flex items-center gap-3">
          <Mark />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen">Anushka Saha</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-testid={`nav-link-${label.toLowerCase().replace(/\s/g, "-")}`}
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-linen/60 hover:text-tangelo transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:Anushkabsaha@gmail.com"
            data-testid="nav-contact-button"
            className="font-mono text-[11px] tracking-[0.18em] uppercase bg-tangelo text-linen px-4 py-2 hover:bg-linen hover:text-chocolate transition-colors"
          >
            Talk to me
          </a>
        </nav>
        <a
          href="mailto:Anushkabsaha@gmail.com"
          data-testid="nav-contact-button-mobile"
          className="md:hidden font-mono text-[11px] tracking-[0.18em] uppercase bg-tangelo text-linen px-3 py-2"
        >
          Talk
        </a>
      </div>
    </header>
  );
};

export const Marquee = ({ items, tone = "paper" }) => {
  const tones = {
    paper: "bg-linen text-chocolate border-chocolate/25",
    dark: "bg-chocolate text-linen border-chocolate",
    orange: "bg-tangelo text-linen border-tangelo",
  };
  const row = items.join("  ✳  ") + "  ✳  ";
  return (
    <div data-testid="editorial-marquee" className={`overflow-hidden py-4 border-y ${tones[tone]}`}>
      <div className="marquee-track flex whitespace-nowrap w-max">
        {[0, 1].map((i) => (
          <span key={i} className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase pr-2">
            {row}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Grain = () => <div className="grain" aria-hidden="true" />;
