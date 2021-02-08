import React from "react";
import { Message, Key, User } from "../icons";
import "./form.scss";

interface PropTyps {
  back: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SignUp: React.FC<PropTyps> = ({ back }) => {
  return (
    <>
      <h1>Sign Up</h1>
      <div className="input">
        <div>
          <span>
            <User />
          </span>
          <input type="text" required placeholder="Full name" />
        </div>
        <div>
          <span>
            <Message />
          </span>
          <input type="email" required placeholder="Email" />
        </div>
        <div>
          <span>
            <Key />
          </span>
          <input type="password" required placeholder="Enter your Password" />
        </div>
      </div>
      <button className="btn-login">Login</button>
      <p className="back">
        Back to
        <button className="btn-signup" onClick={(event) => back(event)}>
          Login
        </button>
      </p>
    </>
  );
};

export default SignUp;
