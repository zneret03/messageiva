import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Suspense>
  );
};

export default App;
