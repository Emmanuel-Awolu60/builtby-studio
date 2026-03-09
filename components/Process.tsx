'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    name: 'Discovery',
    desc: 'We learn your business, goals, and audience through a focused discovery call and brief.',
  },
  {
    num: '02',
    name: 'Strategy',
    desc: 'We create a sitemap, wireframes, and design direction tailored to your objectives.',
  },
  {
    num: '03',
    name: 'Design',
    desc: 'High-fidelity designs that reflect your brand and are refined through your feedback.',
  },
  {
    num: '04',
    name: 'Build',
    desc: 'Clean, fast, responsive development with regular progress updates.',
  },
  {
    num: '05',
    name: 'Launch',
    desc: 'Go live with full testing, handover training, and ongoing support available.',
  },
];

export default function Process() {
  const titleRef = useReveal();
  const stepsRef = useReveal();

  return (
    <section id="process" className={styles.process}>
      <div className={`reveal`} ref={titleRef}>
        <div className="section-label">How We Work</div>
        <h2 className="section-title">
          A process built for<br />clarity and results.
        </h2>
      </div>

      <div className={`${styles.steps} reveal`} ref={stepsRef}>
        {steps.map((step) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.dot}>{step.num}</div>
            <div className={styles.stepName}>{step.name}</div>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
