'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './WhyUs.module.css';

const reasons = [
  {
    num: '01',
    title: 'Business-First Thinking',
    desc: 'We ask why before we ask how. Every decision maps back to your business goals.',
  },
  {
    num: '02',
    title: 'No Templates, Ever',
    desc: 'Every website we build is custom-designed from the ground up for your brand.',
  },
  {
    num: '03',
    title: 'On-Time, Every Time',
    desc: 'We set realistic timelines and hit them — with regular updates along the way.',
  },
  {
    num: '04',
    title: 'Post-Launch Support',
    desc: "We don't disappear after delivery. Maintenance, updates, and growth are part of the deal.",
  },
];

export default function WhyUs() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="why" className={styles.why}>
      <div className={styles.grid}>
        <div className={`${styles.left} reveal`} ref={leftRef}>
          <div className="section-label">Why BuiltBy Studio</div>
          <h2 className="section-title">Built different.<br />Delivered better.</h2>
          <p className="section-sub">
            We&apos;re not just order-takers. We&apos;re strategic partners who care about
            what happens after launch.
          </p>
        </div>

        <div className={`${styles.items} reveal`} ref={rightRef}>
          {reasons.map((r) => (
            <div key={r.num} className={styles.item}>
              <div className={styles.itemNum}>{r.num}</div>
              <div className={styles.itemTitle}>{r.title}</div>
              <p className={styles.itemDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
