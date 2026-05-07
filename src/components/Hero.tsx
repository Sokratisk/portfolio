export function Hero() {
  return (
    <section id="hero">
      <div className="hero-main">
        <div className="hero-content">
          <p className="hero-eyebrow">Hi, I'm</p>
          <h1>Sokratis Kelemidis</h1>
          <p className="hero-description">
            Full-stack engineer based in Athens, Greece — 4+ years owning the <strong>full product cycle</strong>{' '}
            from architecture to deployment across insurance, pharma &amp; automotive. Expert in{' '}
            <strong>Angular</strong> and <strong>.NET</strong>, with experience in Vue, Django, and Unity 3D.
            Currently building AI-powered products with <strong>Claude</strong>.
          </p>
          <h2>Frontend Software Engineer</h2>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
