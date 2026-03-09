'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    category: 'E-Commerce · Retail',
    title: 'ShopCraft — Full E-Commerce Platform',
    icon: '🏪',
    bg: 'linear-gradient(145deg, #1e3a5f, #0f2342)',
    tall: true,
  },
  {
    id: 2,
    category: 'Website · Restaurant',
    title: 'Harvest Table — Restaurant & Reservations',
    icon: '🍽️',
    bg: 'linear-gradient(145deg, #1a2e1a, #0d1f0d)',
    tall: false,
  },
  {
    id: 3,
    category: 'Landing Page · Healthcare',
    title: 'MedCore — Clinic & Appointments Landing',
    icon: '💊',
    bg: 'linear-gradient(145deg, #2d1b4e, #180d30)',
    tall: false,
  },
];

export default function Portfolio() {
  const gridRef = useReveal();
  const ctaRef = useReveal();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="section-label dark">Our Work</div>
      <h2 className="section-title dark">
        Built with purpose.<br />Designed to perform.
      </h2>

      <div className={`${styles.grid} reveal`} ref={gridRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.card} ${project.tall ? styles.tall : ''}`}
          >
            <div
              className={styles.imgWrapper}
              style={{ background: project.bg }}
            >
              <div className={styles.imgOverlay} />
              <span className={styles.cardIcon}>{project.icon}</span>
            </div>
            <div className={styles.meta}>
              <div className={styles.category}>{project.category}</div>
              <div className={styles.cardTitle}>{project.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.cta} reveal`} ref={ctaRef}>
        <a href="#contact" className="btn-primary">See All Projects →</a>
      </div>
    </section>
  );
}
