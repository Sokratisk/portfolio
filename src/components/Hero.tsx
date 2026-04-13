export function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1>Sokratis Kelemidis</h1>
        <h2>Frontend Software Engineer</h2>
        <p className="hero-description">
          I build complex, customer-facing web applications using{" "}
          <strong>Angular</strong>, <strong>Vue</strong> and{" "}
          <strong>React</strong> — with full-stack experience in{" "}
          <strong>.NET</strong> and <strong>Django</strong>.
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
