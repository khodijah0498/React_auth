import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction } from "../store/actionAsync";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const loginCredentials = {
      email,
      password,
    };

    dispatch(loginAction(loginCredentials));
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <span className="signupOption">
        Don't have an Account?{" "}
        <Link className="underline" to="/signup">
          sign up instead
        </Link>
      </span>
    </div>
  );
};
export default Login;
