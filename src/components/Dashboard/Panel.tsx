import React from "react";
//import { app } from "../../config/firebase";
import {
  LeftSidebar,
  RightSidebar,
  Navbar,
  InputMessage,
  MessageBox,
} from "../";
import "./panel.scss";

const Panel: React.FC = () => {
  //() => app.auth().signOut()
  return (
    <div className="panel">
      <LeftSidebar />
      <div className="navbar">
        <Navbar />
        <MessageBox />
        <InputMessage />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Panel;
