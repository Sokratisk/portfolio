import { useState } from 'react'
import { experience } from '../data/experience'

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="experience">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => {
            const isOpen = openIndex === i
            const hasDetails = job.details && job.details.length > 0

            return (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker" />
                <div
                  className={`timeline-body${hasDetails ? ' timeline-body--clickable' : ''}${isOpen ? ' timeline-body--open' : ''}`}
                  onClick={() => hasDetails && toggle(i)}
                  role={hasDetails ? 'button' : undefined}
                  tabIndex={hasDetails ? 0 : undefined}
                  onKeyDown={e => hasDetails && e.key === 'Enter' && toggle(i)}
                  aria-expanded={hasDetails ? isOpen : undefined}
                >

                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{job.role}</h3>
                      <p className="timeline-company">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ''}
                      </p>
                    </div>
                    <span className="timeline-period">{job.period}</span>
                  </div>

                  <ul className="timeline-description">
                    {job.description.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>

                  {hasDetails && (
                    <>
                      <div className={`timeline-details${isOpen ? ' timeline-details--open' : ''}`}>
                        <div className="timeline-details-inner">
                          <div className="timeline-details-divider" />
                          <ul className="timeline-description timeline-details-list">
                            {job.details!.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button
                        className="timeline-expand-btn"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <span>{isOpen ? 'Show less' : 'Show more'}</span>
                        <svg
                          className={`expand-chevron${isOpen ? ' expand-chevron--open' : ''}`}
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </>
                  )}

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
