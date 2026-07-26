"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }
      sessionStorage.setItem("fj_admin_pw", password);
      router.push("/admin/dashboard");
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-maroon px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl bg-cream p-8 shadow-xl"
      >
        <h1 className="font-display text-3xl text-maroon">Admin Login</h1>
        <p className="mt-1 text-sm text-ink/60">Food Junction content manager</p>

        <label className="mt-6 block text-sm font-semibold text-ink" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-xl border border-maroon/20 bg-white px-4 py-2.5 outline-none focus:border-clay"
          autoFocus
        />

        {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-marigold py-2.5 font-semibold text-maroon-dark hover:bg-marigold-light disabled:opacity-60"
        >
          {loading ? "Checking..." : "Log in"}
        </button>
      </form>
    </main>
  );
}
