'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const stats = [
  { num: '50', suffix: '+', label: 'Projects Delivered' },
  { num: '98', suffix: '%', label: 'Client Satisfaction' },
  { num: '72', suffix: 'h', label: 'Average First Delivery' },
  { num: '4', suffix: 'x', label: 'Avg. Traffic Growth' },
];

export default function Hero() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targets = [50, 98, 72, 4];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts(targets.map(target => Math.min(Math.floor(target * progress), target)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.glow} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        <div className={styles.label}>Web Development Agency</div>

        <h1 className={styles.heading}>
          We Build the Web.<br />
          <em>You Build</em> the Business.
        </h1>

        <p className={styles.sub}>
          BuiltBy Studio crafts high-performance websites and digital experiences
          that help businesses of every size communicate, convert, and grow.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">Start Your Project →</a>
          <a href="#portfolio" className="btn-ghost">View Our Work</a>
        </div>

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statNum}>
                {counts[index]}<span>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator}>Scroll</div>
    </section>
  );
}
