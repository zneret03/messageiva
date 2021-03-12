import React, { useState } from "react";
import { Message, Key } from "../icons";
import { app } from "../../config/firebase";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./form.scss";

interface PropTypes {
  history: any;
  isToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Login: React.FC<PropTypes & RouteComponentProps> = ({
  isToggle,
  history,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState({ status: false, message: "" });

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error: any) => {
        setError({ status: true, message: error.message });
      });
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
      {isError.status && (
        <p
          className="error"
          style={{
            background: "rgba(255, 19, 111, 0.5)",
            padding: isError.status && "10px 10px",
          }}
        >
          {isError.message}
        </p>
      )}
      <p>
        You dont have an account?{" "}
        <button className="btn-signup" onClick={(event) => isToggle(event)}>
          Sign Up
        </button>
      </p>
    </>
  );
};

export default withRouter(Login);
