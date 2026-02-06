"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/account");
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>

      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
