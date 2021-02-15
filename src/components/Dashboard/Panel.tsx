import React from "react";
import { app } from "../../config/firebase";
import "./panel.scss";

const Panel: React.FC = () => {
  return (
    <div className="panel" onClick={() => app.auth().signOut()}>
      Signout
    </div>
  );
};

export default Panel;
