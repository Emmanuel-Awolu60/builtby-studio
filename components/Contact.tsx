"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Contact.module.css";
import { Mail, Phone, Globe, Clock, CheckCircle } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "builtbystudio@gmail.com" },
  { icon: Phone, label: "Call Us", value: "+234 901 435 4484" },
  {
    icon: Globe,
    label: "Working With Clients",
    value: "Worldwide — Remote-First Agency",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours, Monday – Friday",
  },
];

const serviceOptions = [
  "Website Design & Development",
  "E-Commerce Store",
  "Landing Page & Branding",
  "Full Digital Presence",
  "Not Sure — Let's Talk",
];

export default function Contact() {
  const infoRef = useReveal();
  const formRef = useReveal();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* THIS IS THE ONLY FUNCTION THAT CHANGED */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Email failed:", data.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">
        Ready to build something
        <br />
        remarkable?
      </h2>

      <div className={styles.wrap}>
        <div className={`${styles.info} reveal`} ref={infoRef}>
          <p>
            Tell us about your project and we&apos;ll get back to you within 24
            hours with ideas, timeline, and next steps. No commitment required.
          </p>

          {contactDetails.map((d) => {
            const Icon = d.icon;

            return (
              <div key={d.label} className={styles.detail}>
                <Icon
                  className={styles.detailIcon}
                  size={24}
                  strokeWidth={1.5}
                />

                <div>
                  <strong>{d.label}</strong>
                  <span>{d.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`${styles.formWrap} reveal`} ref={formRef}>
          {submitted ? (
            <div className={styles.success}>
              <CheckCircle
                className={styles.successIcon}
                size={48}
                strokeWidth={1.5}
              />

              <h3>Message Sent!</h3>

              <p>
                Thanks for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="firstName">First Name</label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.group}>
                  <label htmlFor="lastName">Last Name</label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label htmlFor="email">Business Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@yourcompany.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="company">Company / Business Name</label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company Ltd."
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="service">Service Interested In</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a service...
                  </option>

                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.group}>
                <label htmlFor="message">Tell Us About Your Project</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="What are you trying to build? What's the goal? Any details help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  padding: "1rem",
                }}
              >
                Send Message — Let&apos;s Build Something →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
