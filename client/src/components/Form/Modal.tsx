import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./form.scss";

const Modal: React.FC = () => {
  const [toggle, setToogle] = useState<boolean>(false);

  const isToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (!toggle) {
      setToogle(true);
    } else {
      setToogle(false);
    }
  };

  return (
    <div className="card">
      {toggle ? (
        <SignUp back={(event) => isToggle(event)} />
      ) : (
        <Login isToggle={(event) => isToggle(event)} />
      )}
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

export default Modal;
