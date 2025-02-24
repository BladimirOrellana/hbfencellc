"use client";
import React, { useState, useEffect } from "react";
import { auth } from "./../utils/firebase"; // Adjust the path as needed
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import { useUser } from "./../context/userContext";

const Login = () => {
  const { user, loading } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  // 🔥 Redirect to /profile if already logged in
  useEffect(() => {
    if (!loading && user) {
      router.push("/profile");
    }
  }, [user, loading, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile"); // Redirect to profile on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "8px",
            margin: "8px",
            width: "250px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "8px",
            margin: "8px",
            width: "250px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <button
          type="submit"
          style={{ padding: "8px 16px", marginTop: "1rem" }}
        >
          Login
        </button>
        <Button
          component={Link}
          href="/signup"
          style={{ padding: "8px 16px", marginTop: "1rem" }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
