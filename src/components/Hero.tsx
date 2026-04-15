export function Hero() {
  return (
    <section id="hero">
      <div className="hero-main">
        <div className="hero-content">
          <p className="hero-eyebrow">Hi, I'm</p>
          <h1>Sokratis Kelemidis</h1>
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
      <div className="hero-about-strip">
        <p className="hero-about-bio">
          Frontend engineer based in Athens, Greece — 4+ years building enterprise apps in insurance,
          pharma &amp; automotive with <strong>Angular</strong>, <strong>Vue</strong>,{' '}
          <strong>.NET</strong> and <strong>Django</strong>. Integrated Master's in CS&amp;E, plus
          shipped games and VR experiences with <strong>Unity 3D</strong>.
        </p>
      </div>
    </section>
  )
}
