import React from "react";
import { Message, Key } from "../icons";
import "./login.scss";

const index: React.FC = () => {
  return (
    <div className="login-container">
      <div className="circle"></div>
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
        <button>Login</button>
      </div>
    </div>
  );
};

export default index;
