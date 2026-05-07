import { useState, useEffect } from 'react'

const SECTIONS = ['skills', 'experience', 'projects', 'contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.25, rootMargin: '-10% 0px -55% 0px' }
    )
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-brand">SK</a>
      <div className="nav-divider" aria-hidden="true" />
      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links${open ? ' nav-open' : ''}`}>
        {SECTIONS.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={close}
              className={active === id ? 'active' : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
