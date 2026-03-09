import styles from "./Marquee.module.css";

const items = [
  "Website Design",
  "E-Commerce",
  "Brand Identity",
  "SEO Strategy",
  "Landing Pages",
  "Digital Presence",
  "Web Development",
  "UI / UX Design",
  "Graphic Design",
];

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
