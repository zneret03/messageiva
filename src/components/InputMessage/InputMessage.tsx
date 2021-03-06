import React from "react";
import { Image, Send } from "../icons";
import "./inputMessage.scss";

const InputMessage: React.FC = () => {
  return (
    <div className="input-message-container">
      <i>
        <Image />
      </i>
      <input type="text" />
      <i>
        <Send />
      </i>
    </div>
  );
};

export default InputMessage;
