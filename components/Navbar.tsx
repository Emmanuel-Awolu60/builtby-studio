'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          setActive(el.getAttribute('id') || '');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        BUILT<span>BY</span> STUDIO
      </Link>

      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`${styles.link} ${active === link.href.slice(1) ? styles.activeLink : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={`${styles.link} ${styles.cta}`}>
            Start a Project →
          </a>
        </li>
      </ul>
    </nav>
  );
}
