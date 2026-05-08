import { useState, useEffect } from "react";

const SECTIONS = ["skills", "experience", "projects", "contact"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -55% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-brand">
        SK
      </a>
      <div className="nav-divider" aria-hidden="true" />

      <button
        className={`nav-toggle${open ? " open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links${open ? " nav-open" : ""}`}>
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={close}
              className={active === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-divider" aria-hidden="true" />
      <a
        href="/cv"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cv-link"
      >
        CV
      </a>
      <div className="nav-divider" aria-hidden="true" />
      <button
        className="nav-theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </nav>
  );
}
