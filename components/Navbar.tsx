'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest(`.${styles.nav}`) && !target.closest(`.${styles.mobileMenu}`)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

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
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          BUILT<span>BY</span> STUDIO
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggle} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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

    <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
      <ul className={styles.mobileLinks}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={styles.mobileLink}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
