export function Contact() {
  return (
    <section id="contact">
      <div className="section-inner contact-inner">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm open to new opportunities. Whether you have a question or just
          want to say hi — my inbox is open!
        </p>
        <div className="contact-links">
          <a href="mailto:your@email.com" className="btn btn-primary">
            Send Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
