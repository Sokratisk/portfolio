export function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1>Sokratis Kelemidis</h1>
        <h2>Frontend Developer</h2>
        <p className="hero-description">
          I build modern, responsive web applications using{" "}
          <strong>Angular</strong>, <strong>React</strong> and{" "}
          <strong>Vue</strong>.
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
