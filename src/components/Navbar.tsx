import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-brand">Sokratis Kelemidis</a>

      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links${open ? ' nav-open' : ''}`}>
        <li><a href="#skills" onClick={close}>Skills</a></li>
        <li><a href="#experience" onClick={close}>Experience</a></li>
        <li><a href="#projects" onClick={close}>Projects</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>
    </nav>
  )
}
