import React from "react";
import { connect } from "react-redux";
import { isToggleRightSidebar } from "../../redux/Dashboard/DashboardActions";
import { Star, Information, Search } from "../icons";
import "./navbar.scss";

interface PropTypes {
  rightSidebar: any;
  isToggleRightSidebar: any;
}

const Navbar: React.FC<PropTypes> = ({
  rightSidebar,
  isToggleRightSidebar,
}) => {
  return (
    <div className="nav">
      <div className="nav-title">
        <Star />
        <h1>#Javascript</h1>
      </div>
      <div className="search">
        <div className="input-container">
          <span>
            <Search />
          </span>
          <input type="text" name="search" />
        </div>

        <span onClick={() => isToggleRightSidebar()}>
          <Information />
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    rightSidebar: state.rightSidebar,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    isToggleRightSidebar: () => dispatch(isToggleRightSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
