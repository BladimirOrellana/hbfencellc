"use client";
import React, { useState, useEffect } from "react";
import { auth } from "./../utils/firebase"; // Adjust the path if needed
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import { useUser } from "./../context/userContext";

const SignUp = () => {
  const { user, loading } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user in MongoDB via existing `/api/user`
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid, // Firebase UID
          email: user.email,
          firstName,
          lastName,
        }),
      });

      console.log("User signed up and saved in MongoDB");
      router.push("/profile"); // Redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center", minHeight: "100vh" }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          Sign Up
        </button>
        <Button
          component={Link}
          href="/login"
          style={{ padding: "8px 16px", marginTop: "1rem" }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
