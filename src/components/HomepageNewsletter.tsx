"use client";

import { useState } from "react";
import styles from "./HomepageNewsletter.module.css";

export default function HomepageNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
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
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@garden.co"
        required
        aria-label="Email address"
        disabled={status === "loading"}
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "success" ? "Subscribed ✓" : status === "loading" ? "…" : "Subscribe"}
      </button>
    </form>
  );
}
