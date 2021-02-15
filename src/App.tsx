import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PrivateRoute = lazy(() => import("./components/Private/PrivateRouter"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Provider store={store}>
        <Router>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    </Suspense>
  );
};

export default App;
