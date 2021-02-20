import React from "react";
//import { app } from "../../config/firebase";
import { LeftSidebar, RightSidebar, Navbar } from "../";
import "./panel.scss";

const Panel: React.FC = () => {
  //() => app.auth().signOut()
  return (
    <div className="panel">
      <LeftSidebar />
      <Navbar />
      <RightSidebar />
    </div>
  );
};

export default Panel;
