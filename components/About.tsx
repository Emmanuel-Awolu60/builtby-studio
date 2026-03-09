'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './About.module.css';
import { Zap, Handshake, Target, Telescope } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Quality-First',
    desc: 'Every pixel, every line of code crafted with precision.',
  },
  {
    icon: Handshake,
    title: 'True Partnership',
    desc: "Your success is our success. We work with you, not for you.",
  },
  {
    icon: Target,
    title: 'Impact-Driven',
    desc: 'Simplicity with purpose — every element earns its place.',
  },
  {
    icon: Telescope,
    title: 'Future-Ready',
    desc: 'Modern tech, scalable builds, ready to grow with you.',
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={styles.about}>
      <div className="section-label dark">Who We Are</div>
      <h2 className="section-title dark">
        More than a web agency.<br />Your digital growth partner.
      </h2>

      <div className={`${styles.grid} reveal`} ref={ref}>
        <div className={styles.left}>
          <p>
            BuiltBy Studio is a forward-thinking web development agency helping
            businesses across every industry establish, strengthen, and grow
            their digital presence.
          </p>
          <p>
            From the local restaurant that needs to be found on Google, to the
            enterprise company launching a global platform — we build websites
            that don&apos;t just look great, but <strong>genuinely work</strong>.
          </p>
          <p>
            We combine sharp design, clean engineering, and a deep understanding
            of business goals to deliver digital solutions that drive real results.
          </p>
        </div>

        <div className={styles.values}>
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className={styles.valueItem}>
                <Icon className={styles.valueIcon} size={28} strokeWidth={1.5} />
                <div className={styles.valueTitle}>{v.title}</div>
                <div className={styles.valueDesc}>{v.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
