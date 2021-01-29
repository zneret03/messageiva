import React from "react";
import { Message, Key } from "../icons";
import "./login.scss";

const Login: React.FC = () => {
  return (
    <div className="card">
      <h1>Sign In</h1>

      <div className="input">
        <div>
          <span>
            <Message />
          </span>
          <input type="text" placeholder="Enter your Email" />
        </div>
        <div>
          <span>
            <Key />
          </span>
          <input type="text" placeholder="Enter your Password" />
        </div>
      </div>

      <span>Forgot Password?</span>
      <button className="btn-login">Login</button>
      <p>
        You dont have an account?{" "}
        <button className="btn-signup">Sign Up</button>
      </p>
      {/* <div className="line">
        <span>Or</span>
      </div>
      <ul className="social">
        {social.map((icon: any, index: number) => (
          <li key={index}>
            <button>{icon}</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Login;
