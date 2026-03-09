import styles from './Hero.module.css';

const stats = [
  { num: '50', suffix: '+', label: 'Projects Delivered' },
  { num: '98', suffix: '%', label: 'Client Satisfaction' },
  { num: '72', suffix: 'h', label: 'Average First Delivery' },
  { num: '4', suffix: 'x', label: 'Avg. Traffic Growth' },
];

export default function Hero() {
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
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statNum}>
                {stat.num}<span>{stat.suffix}</span>
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
