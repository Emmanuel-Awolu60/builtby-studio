'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Services.module.css';

const services = [
  {
    num: '01',
    icon: '🖥️',
    name: 'Website Design & Development',
    desc: "Custom-built websites that reflect your brand, engage your audience, and perform at the highest level.",
    tags: ['Custom Design', 'Mobile-First', 'CMS', 'Fast Loading'],
  },
  {
    num: '02',
    icon: '🛒',
    name: 'E-Commerce Stores',
    desc: 'Full online store setups that make selling effortless — from product listings to secure checkout.',
    tags: ['Shopify', 'WooCommerce', 'Payments', 'Inventory'],
  },
  {
    num: '03',
    icon: '🎨',
    name: 'Landing Pages & Branding',
    desc: 'High-converting landing pages and strong brand identities that make unforgettable first impressions.',
    tags: ['Conversion-Optimised', 'Logo Design', 'Style Guide'],
  },
  {
    num: '04',
    icon: '🌐',
    name: 'Full Digital Presence',
    desc: 'Website, SEO, social media, and Google listings — a complete, cohesive online footprint.',
    tags: ['SEO', 'Analytics', 'Social Setup', 'Google'],
  },
];

export default function Services() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="services" className={styles.services}>
      <div className={`${styles.header} reveal`} ref={headerRef}>
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            End-to-end digital<br />solutions for every business.
          </h2>
        </div>
        <p className="section-sub">
          From a first website to a full digital transformation — we handle everything.
        </p>
      </div>

      <div className={`${styles.grid} reveal`} ref={gridRef}>
        {services.map((service) => (
          <div key={service.num} className={styles.card}>
            <div className={styles.cardNum}>{service.num}</div>
            <span className={styles.cardIcon}>{service.icon}</span>
            <div className={styles.cardName}>{service.name}</div>
            <p className={styles.cardDesc}>{service.desc}</p>
            <div className={styles.tags}>
              {service.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
