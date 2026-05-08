const profilePic = "/assets/profile.jpg";

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Hi, I'm</p>
            <h1>Sokratis Kelemidis</h1>
            <h2>Full-stack Software Engineer</h2>
            <p className="hero-description">
              Full-stack engineer based in Athens, Greece — 4+ years owning the{" "}
              <strong>full product cycle</strong> from architecture to
              deployment across insurance, pharma &amp; automotive. Expert in{" "}
              <strong>Angular</strong> and <strong>.NET</strong>, with
              experience in Vue, Django, and Unity 3D. Currently building
              AI-assisted products with <strong>Claude</strong>.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
              <a href="/cv" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View CV
              </a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="hero-avatar-ring">
              <img
                src={profilePic}
                alt="Sokratis Kelemidis"
                className="hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
