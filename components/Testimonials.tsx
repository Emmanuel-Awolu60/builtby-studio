'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    stars: 5,
    quote:
      "BuiltBy Studio didn't just build us a website — they built us a growth engine. Bookings are up 60% since launch.",
    name: 'Adaeze Okonkwo',
    title: 'Owner, Harvest Table Restaurant',
    initials: 'AO',
  },
  {
    stars: 5,
    quote:
      "Professional, creative, and incredibly fast. They understood our brand better than agencies we'd paid 5x more.",
    name: 'Tunde Mensah',
    title: 'CEO, ShopCraft Retail',
    initials: 'TM',
  },
  {
    stars: 5,
    quote:
      'From first call to live site in under 3 weeks. The process was smooth, clear, and the result exceeded every expectation.',
    name: 'Ngozi Kamara',
    title: 'Director, MedCore Clinic',
    initials: 'NK',
  },
];

export default function Testimonials() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={`reveal`} ref={titleRef}>
        <div className="section-label">Client Stories</div>
        <h2 className="section-title">What our clients say.</h2>
      </div>

      <div className={`${styles.grid} reveal`} ref={gridRef}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars}>
              {'★'.repeat(t.stars)}
            </div>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
