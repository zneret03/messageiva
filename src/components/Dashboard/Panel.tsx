import React from "react";
//import { app } from "../../config/firebase";
import { RightSidebar } from "../";
import "./panel.scss";

const Panel: React.FC = () => {
  //() => app.auth().signOut()
  return (
    <div className="panel">
      <RightSidebar />
    </div>
  );
};

export default Panel;
