import React, { ComponentType, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth_user } from "../../redux/Login/LoginActions";
import Layout from "../Layout/Layout";

interface PropsTypes {
  component: ComponentType<any>;
  path: string;
  data?: any;
  log_user?: any;
  exact?: boolean;
}

const PrivateRouter: React.FC<PropsTypes> = ({
  component: RoutComponent,
  log_user,
  data,
  path,
}) => {
  useEffect(log_user, [log_user]);

  console.log(data);

  const routerComponent = (props: any) => {
    return data.userData != null ? (
      <Layout key="data">{React.createElement(RoutComponent, props)}</Layout>
    ) : (
      <Redirect to="/" />
    );
  };

  return <Route {...path} render={routerComponent} />;
};

const mapStateProps = (state: any) => {
  return {
    data: state.login,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    log_user: () => dispatch(auth_user()),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(PrivateRouter);
