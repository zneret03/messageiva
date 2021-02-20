import React from "react";
//import { app } from "../../config/firebase";
import { LeftSidebar, RightSidebar } from "../";
import "./panel.scss";

const Panel: React.FC = () => {
  //() => app.auth().signOut()
  return (
    <div className="panel">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Panel;
