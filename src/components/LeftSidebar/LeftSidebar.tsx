import React, { useState } from "react";
import { RightMenu } from "../../utils/config";
import "./leftSidebar.scss";

interface initialStateTypes {
  starred: boolean;
  channel: boolean;
  directMessage: boolean;
}

const initialState: initialStateTypes = {
  starred: false,
  channel: false,
  directMessage: false,
};

const LeftSidebar: React.FC = () => {
  const [{ starred, channel, directMessage }, setToggle] = useState(
    initialState
  );

  const config = {
    starred,
    channel,
    directMessage,
  };

  const onToggle = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();

    switch (index) {
      case 0:
        setToggle((prevState) => ({
          ...prevState,
          starred: !starred ? true : false,
        }));
        break;
      case 1:
        setToggle((prevState) => ({
          ...prevState,
          channel: !channel ? true : false,
        }));
        break;
      case 2:
        setToggle((prevState) => ({
          ...prevState,
          directMessage: !directMessage ? true : false,
        }));
        break;
      default:
        alert("Something is wrong");
    }
  };

  const sidebarMenu = RightMenu(config);

  return (
    <div className="left-sidebar">
      <section>
        <div className="image-container">
          <img className="profile" src="/image/sample-profile.jpg" alt="" />
        </div>
        <h2>Ian Drilon</h2>
        <span>iandrilon2@yahoo.com</span>
        <ul>
          {sidebarMenu.map((menu: any, index: number) => (
            <li key={index} onClick={(event) => onToggle(event, index)}>
              <div className="left-sidebar-menu">
                <i>{menu.icon}</i>
                <span>{menu.title}</span>
              </div>
              {menu.arrow}
            </li>
          ))}
        </ul>
        <div className="left-sidebar-card">
          <p>Join pro for free message</p>
          <img
            className="mobile-marketing"
            src="./image/mobile-marketing.svg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default LeftSidebar;
