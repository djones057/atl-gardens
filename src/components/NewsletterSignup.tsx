"use client";

import { useState } from "react";
import styles from "./NewsletterSignup.module.css";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

interface Props {
  compact?: boolean;
}

export default function NewsletterSignup({ compact }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={`glass-panel ${styles.container} ${compact ? styles.compact : ""}`}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Mail size={24} className={styles.icon} />
        </div>
        <div>
          <h3 className={styles.title}>Join Our Community</h3>
          {!compact && (
            <p className={styles.description}>
              Get seasonal planting guides, local event invites, and exclusive gear discounts delivered to your inbox.
            </p>
          )}
        </div>
      </div>

      {status === "success" ? (
        <div className={styles.successMessage}>
          <CheckCircle2 size={20} className={styles.successIcon} />
          <span>You&rsquo;re in! Check your inbox for a confirmation.</span>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button} disabled={status === "loading"}>
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
          {status === "error" && (
            <p className={styles.errorMessage}>
              <AlertCircle size={16} />
              Something went wrong. Try again or email us at hello@atlgardens.com.
            </p>
          )}
        </>
      )}
    </div>
  );
}
