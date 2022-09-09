import { current } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";
import { signupService } from "../services";

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (confirmPassword !== password) {
      console.log("password does not match");
      return;
    }
    try {
      const { data } = await signupService({ email, fullname, password });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="FullName" name="fullname" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
        />
        <button type="submit">Signup</button>
      </form>
      <span>
        Already have an account?{" "}
        <Link className="underline" to="/login">
          login
        </Link>
      </span>
    </div>
  );
};

export default Signup;
