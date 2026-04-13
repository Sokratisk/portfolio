export function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1>Sokratis Kelemidis</h1>
        <h2>Frontend Software Engineer</h2>
        <p className="hero-description">
          Frontend Software Engineer based in Athens, Greece with 4+ years of
          experience delivering production applications for enterprise clients
          in insurance, pharma, and automotive. Specialized in{" "}
          <strong>Angular</strong> and <strong>Vue</strong>, with full-stack
          reach into <strong>.NET</strong> and <strong>Django</strong> — and a
          background in <strong>Unity 3D</strong> game and VR development.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
