import { useState } from "react";
import type { Project } from "../data/projects";
import { ImageLightbox } from "./ImageLightbox";

interface Props {
  project: Project;
  index: number;
}

export function ProjectSection({ project, index }: Props) {
  const [slide, setSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isReversed = index % 2 !== 0;

  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const prev = () => setSlide((s) => (s - 1 + images.length) % images.length);
  const next = () => setSlide((s) => (s + 1) % images.length);

  return (
    <>
      <article
        className={`project-entry${isReversed ? " project-entry--reverse" : ""}`}
      >
        <div className="project-entry-inner">
          <div className="project-carousel">
            <div className="carousel-frame">
              <img
                key={slide}
                src={images[slide]}
                alt={`${project.title} screenshot ${slide + 1}`}
                className="carousel-img carousel-img--zoomable"
                onClick={() => images.length > 0 && setLightboxOpen(true)}
              />
              {images.length > 1 && (
                <>
                  <button
                    className="carousel-btn carousel-btn--prev"
                    onClick={prev}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="carousel-btn carousel-btn--next"
                    onClick={next}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                  <div className="carousel-dots">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        className={`carousel-dot${i === slide ? " active" : ""}`}
                        onClick={() => setSlide(i)}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {(project.github || project.live) && (
              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      {lightboxOpen && images.length > 0 && (
        <ImageLightbox
          images={images}
          startIndex={slide}
          alt={project.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
