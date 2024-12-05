"use client";

import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import styles from "./Auth.module.css";
import Link from "next/link";

function Auth() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [variant, setVariant] = useState<"Login" | "Register">("Login");

  const toggleVariant = () => {
    setVariant(variant === "Login" ? "Register" : "Login");
  };

  return (
    <>
      <Link href="/" className={styles.BackBtn}>Back To Home</Link>

      <div className={styles.Auth}>
        <div className={styles.Row}>
          <h6>{variant} Now</h6>

          {variant === "Register" && (
            <InputBox
              id="name"
              label="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <InputBox
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputBox
            id="password"
            label="Your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.Btn}>{variant}</button>

          <p className={styles.CustomMessage}>
            {variant === "Login"
              ? " Dont have an account?"
              : "Already have an account?"}
            <span onClick={toggleVariant}>
              {variant === "Login" ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Auth;
