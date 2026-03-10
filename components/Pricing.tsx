"use client";

import { useReveal } from "@/hooks/useReveal";
import styles from "./Pricing.module.css";

const plans = [
  {
    tier: "Starter",
    name: "Launch",
    price: "$800 - $1,500",
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
    price: "$2,499",
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
    price: "Custom",
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

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="section-label dark">Transparent Pricing</div>
      <h2 className="section-title dark">
        Simple, honest packages.
        <br />
        No surprises.
      </h2>
      <p className="section-sub dark">
        Choose the plan that fits your business. Every package includes a custom
        design — never a template.
      </p>

      <div className={`${styles.grid} reveal`} ref={gridRef}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
          >
            {plan.featured && <div className={styles.badge}>Most Popular</div>}
            <div className={styles.tier}>{plan.tier}</div>
            <div className={styles.name}>{plan.name}</div>
            <div className={styles.price}>
              {plan.price !== "Custom" ? (
                <>
                  <sup>$</sup>
                  {plan.price.replace("$", "")}
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
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
