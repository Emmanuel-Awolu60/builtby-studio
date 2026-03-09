"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./Portfolio.module.css";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Store } from "lucide-react";

export default function Portfolio() {
  const gridRef = useReveal();
  const ctaRef = useReveal();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="section-label dark">Our Work</div>
      <h2 className="section-title dark">
        Built with purpose.
        <br />
        Designed to perform.
      </h2>

      <div className={`${styles.grid} reveal`} ref={gridRef}>
        {projects.map((project) => {
          const IconComponent = project.iconComponent || Store;
          return (
            <div
              key={project.id}
              className={`${styles.card} ${project.tall ? styles.tall : ""}`}
            >
              <div className={styles.imgWrapper}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projectImg}
                  />
                ) : (
                  <IconComponent className={styles.cardIcon} size={48} strokeWidth={1.5} />
                )}
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.meta}>
                <div className={styles.category}>{project.category}</div>
                <div className={styles.cardTitle}>{project.title}</div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewBtn}
                >
                  View Project →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`${styles.cta} reveal`} ref={ctaRef}>
        <a href="#contact" className="btn-primary">
          See All Projects →
        </a>
      </div>
    </section>
  );
}
