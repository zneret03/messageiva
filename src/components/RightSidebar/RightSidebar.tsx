import React, { useState } from "react";
import { LeftMenu } from "../../utils/config";
import { useSelector } from "react-redux";
import "./rightSidebar.scss";

interface initialStateTypes {
  channelDetails: boolean;
  topPoster: boolean;
  createdBy: boolean;
}

const initialState: initialStateTypes = {
  channelDetails: false,
  topPoster: false,
  createdBy: false,
};

const RightSidebar: React.FC = () => {
  const toggleRightSidebar = useSelector((state: any) => state.rightSidebar);

  const [{ channelDetails, topPoster, createdBy }, setState] = useState(
    initialState
  );

  const config = {
    channelDetails,
    topPoster,
    createdBy,
  };

  const isToggle = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();

    switch (index) {
      case 0:
        setState((prevState) => ({
          ...prevState,
          channelDetails: !channelDetails ? true : false,
        }));
        break;
      case 1:
        setState((prevState) => ({
          ...prevState,
          topPoster: !topPoster ? true : false,
        }));
        break;
      case 2:
        setState((prevState) => ({
          ...prevState,
          createdBy: !createdBy ? true : false,
        }));
        break;
      default:
        alert("Something is wrong");
    }
  };

  const sidebarMenu = LeftMenu(config);

  return (
    <>
      {toggleRightSidebar.rightSidebar && (
        <div className="right-sidebar">
          <section>
            <div className="image-container">
              <img
                className="profile"
                src="/image/javascript-logo.png"
                alt=""
              />
            </div>
            <h1>#Javascript</h1>
            <ul>
              {sidebarMenu.map((menu: any, index: number) => (
                <li key={index} onClick={(event) => isToggle(event, index)}>
                  <div className="left-sidebar-menu">
                    <i>{menu.icon}</i>
                    <span>{menu.title}</span>
                  </div>
                  {menu.arrow}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  );
};

export default RightSidebar;
