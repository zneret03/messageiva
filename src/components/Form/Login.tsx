import React from "react";
import { Message, Key } from "../icons";
import "./form.scss";

interface PropTypes {
  isToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Login: React.FC<PropTypes> = ({ isToggle }) => {
  return (
    <>
      <h1>Sign In</h1>
      <div className="input">
        <div>
          <span>
            <Message />
          </span>
          <input type="email" placeholder="Enter your Email" />
        </div>
        <div>
          <span>
            <Key />
          </span>
          <input type="password" placeholder="Enter your Password" />
        </div>
      </div>
      <span>Forgot Password?</span>
      <button className="btn-login">Login</button>
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
