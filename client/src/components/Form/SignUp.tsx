import React, { useState } from "react";
import { Message, Key, User } from "../icons";
import { app } from "../../config/firebase";
import "./form.scss";

interface PropTyps {
  back: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface initialPropsTypes {
  fullName: string;
  email: string;
  password: string;
}

const initialState: initialPropsTypes = {
  fullName: "",
  email: "",
  password: "",
};

const SignUp: React.FC<PropTyps> = ({ back }) => {
  const [{ fullName, email, password }, setState] = useState(initialState);
  const [isError, setError] = useState({
    message: "",
    backgroundColor: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    //**Regular expression for uppercase, lowercase, special characters ang 8 characters length */
    const regEx = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (password.match(regEx) != null) {
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred: any) => {
          setError({
            message: "Successfully Created",
            backgroundColor: "rgba(0, 253, 209, 0.5)",
          });
          setState({ ...initialState });
        })
        .catch((error: any) => {
          setError(error.message);
        });
    } else {
      setError({
        message:
          "password must have 8 characters, number, uppercase and special charachters",
        backgroundColor: "rgba(255, 19, 111, 0.5)",
      });
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div className="input">
        <div>
          <span>
            <User />
          </span>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(event) => onChange(event)}
            required
            placeholder="Full name"
          />
        </div>
        <div>
          <span>
            <Message />
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => onChange(event)}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <span>
            <Key />
          </span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => onChange(event)}
            required
            placeholder="Enter your Password"
          />
        </div>
      </div>
      {isError && (
        <p
          className="error"
          style={{
            background: isError.backgroundColor,
            padding: isError.backgroundColor && "10px 10px",
          }}
        >
          {isError.message}
        </p>
      )}
      <button className="btn-login" onClick={(event) => onSubmit(event)}>
        Login
      </button>
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
