import Link from "next/link";
import styles from "./Footer.module.css";
import { Linkedin, Instagram, Twitter } from "lucide-react";

// TikTok icon component (Lucide doesn't have TikTok, so we create a custom SVG)
const TikTokIcon = ({
  size = 18,
  strokeWidth = 1.5,
}: {
  size?: number;
  strokeWidth?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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
  {
    href: "https://www.linkedin.com/company/builtby-studio/",
    icon: Linkedin,
    title: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/builtby.studio?igsh=b2NkandrY25sc2x6",
    icon: Instagram,
    title: "Instagram",
  },
  { href: "https://x.com/builtbystudio", icon: Twitter, title: "Twitter / X" },
  {
    href: "https://www.tiktok.com/@builtby.studio?_r=1&_t=ZN-94ZJ1xfyrsU",
    icon: TikTokIcon,
    title: "TikTok",
  },
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
              <a
                href="https://www.linkedin.com/company/builtby-studio/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/builtby.studio?igsh=b2NkandrY25sc2x6"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/builtbystudio" target="_blank">
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@builtby.studio?_r=1&_t=ZN-94ZJ1xfyrsU"
                target="_blank"
              >
                TikTok
              </a>
            </li>
            <li>
              <a href="mailto:builtbystudio@gmail.com" target="_blank">
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
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href={s.href}
                className={styles.socialBtn}
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
