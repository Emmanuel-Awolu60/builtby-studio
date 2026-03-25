"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Pricing.module.css";

const plans = [
  {
    tier: "Starter",
    name: "Launch",
    priceUSD: "800",
    priceNGN: "850,000",
    priceNote: "/project",
    desc: "Perfect for small and local businesses getting online for the first time.",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form & Google Maps",
      "Basic SEO setup",
      "2 rounds of revisions",
      "2-week delivery",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    tier: "Growth",
    name: "Business",
    priceUSD: "1,500",
    priceNGN: "1,750,000",
    priceNote: "/project",
    desc: "For growing businesses that need a powerful, full-featured web presence.",
    features: [
      "Up to 12 custom pages",
      "Custom brand identity",
      "CMS / Blog integration",
      "Full SEO optimisation",
      "Analytics & reporting setup",
      "3 rounds of revisions",
      "3-week delivery",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    tier: "Enterprise",
    name: "Scale",
    priceUSD: "Custom",
    priceNGN: "Custom",
    priceNote: "",
    desc: "For corporations and large businesses with complex requirements and high traffic.",
    features: [
      "Unlimited pages & features",
      "Custom integrations & API",
      "E-commerce functionality",
      "Dedicated project manager",
      "Priority support & SLA",
      "Ongoing retainer available",
      "Custom timeline",
    ],
    featured: false,
    cta: "Book a Call",
  },
];

export default function Pricing() {
  const gridRef = useReveal();
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");

  return (
    <section id="pricing" className={styles.pricing}>
      {/* Background glow effects for premium feel */}
      <div className={styles.glowBg1}></div>
      <div className={styles.glowBg2}></div>

      <div className={styles.container}>
        <div className="section-label">Transparent Pricing</div>
        <h2 className="section-title">
          Simple, honest packages.
          <br />
          <span className={styles.gradientText}>No surprises.</span>
        </h2>
        <p className="section-sub">
          Choose the plan that fits your business. Every package includes a custom
          design — never a template.
        </p>

        <div className={styles.toggleContainer}>
          <div className={styles.toggleWrapper}>
            <button
              className={`${styles.toggleBtn} ${currency === "NGN" ? styles.active : ""}`}
              onClick={() => setCurrency("NGN")}
            >
              Naira (₦)
            </button>
            <button
              className={`${styles.toggleBtn} ${currency === "USD" ? styles.active : ""}`}
              onClick={() => setCurrency("USD")}
            >
              Dollar ($)
            </button>
          </div>
        </div>

        <div className={`${styles.grid} reveal`} ref={gridRef}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
            >
              <div className={styles.cardInner}>
                {plan.featured && <div className={styles.badge}>Most Popular</div>}
                <div className={styles.tier}>{plan.tier}</div>
                <div className={styles.name}>{plan.name}</div>
                <div className={styles.price}>
                  {plan.priceUSD !== "Custom" ? (
                    <>
                      <sup className={styles.currencySymbol}>{currency === "NGN" ? "₦" : "$"}</sup>
                      {currency === "NGN" ? plan.priceNGN : plan.priceUSD}
                      {plan.priceNote && <sub>{plan.priceNote}</sub>}
                    </>
                  ) : (
                    <>Custom</>
                  )}
                </div>
                <p className={styles.desc}>{plan.desc}</p>
                <div className={styles.divider} />
                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={styles.btn}>
                  <span className={styles.btnText}>{plan.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
