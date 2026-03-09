import Link from "next/link";
import styles from "./Footer.module.css";

const serviceLinks = [
  "Website Design",
  "E-Commerce Stores",
  "Landing Pages",
  "Full Digital Presence",
  "Brand Identity",
];

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#process", label: "Our Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "in", title: "LinkedIn" },
  { href: "#", label: "ig", title: "Instagram" },
  { href: "#", label: "𝕏", title: "Twitter / X" },
  { href: "#", label: "be", title: "Behance" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            BUILT<span>BY</span> STUDIO
          </Link>
          <p>
            We build high-performance websites and digital experiences for
            businesses of every size. Your growth is our mission.
          </p>
        </div>

        <div>
          <div className={styles.colTitle}>Services</div>
          <ul className={styles.links}>
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>
            {companyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Connect</div>
          <ul className={styles.links}>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter / X</a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
            <li>
              <a href="mailto:hello@builtbystudio.com">
                builtbystudio@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} BuiltBy Studio. All rights reserved.
        </span>
        <div className={styles.socials}>
          {socialLinks.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className={styles.socialBtn}
              title={s.title}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
