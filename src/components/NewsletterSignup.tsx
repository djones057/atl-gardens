"use client";

import { useState } from "react";
import styles from "./NewsletterSignup.module.css";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Future integration: send to backend
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className={`glass-panel ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Mail size={24} className={styles.icon} />
        </div>
        <div>
          <h3 className={styles.title}>Join Our Community</h3>
          <p className={styles.description}>
            Get seasonal planting guides, local event invites, and exclusive gear discounts delivered to your inbox.
          </p>
        </div>
      </div>

      {subscribed ? (
        <div className={styles.successMessage}>
          <CheckCircle2 size={20} className={styles.successIcon} />
          <span>Thanks for subscribing! Keep an eye on your inbox.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
