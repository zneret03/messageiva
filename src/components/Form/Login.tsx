import React, { useState } from "react";
import { Message, Key } from "../icons";
import "./form.scss";

interface PropTypes {
  isToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Login: React.FC<PropTypes> = ({ isToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    console.log({ email, password });
  };

  return (
    <>
      <h1>Sign In</h1>
      <div className="input">
        <div>
          <span>
            <Message />
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <span>
            <Key />
          </span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your Password"
          />
        </div>
      </div>
      <span>Forgot Password?</span>
      <button className="btn-login" onClick={(event) => onSubmit(event)}>
        Login
      </button>
      <p>
        You dont have an account?{" "}
        <button className="btn-signup" onClick={(event) => isToggle(event)}>
          Sign Up
        </button>
      </p>
    </>
  );
};

export default Login;
