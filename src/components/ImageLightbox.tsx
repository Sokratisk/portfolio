import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  images: string[]
  startIndex: number
  alt: string
  onClose: () => void
}

export function ImageLightbox({ images, startIndex, alt, onClose }: Props) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(
    () => setCurrent(c => (c - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setCurrent(c => (c + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return createPortal(
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>

      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img
          key={current}
          src={images[current]}
          alt={`${alt} — image ${current + 1} of ${images.length}`}
          className="lightbox-img"
        />

        {images.length > 1 && (
          <>
            <button
              className="lightbox-nav lightbox-nav--prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="lightbox-nav lightbox-nav--next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="lightbox-counter">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}
