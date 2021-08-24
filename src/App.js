import React from "react";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router";
import AreaContainer from "./components/AreaContainer/AreaContainer";
import Hypotenuse from "./components/Hypotenuse/Hypotenuse";
import "./App.css";
import IsTriangle from "./components/IsTriangle/IsTriangle";
import Quiz from "./components/Quiz/Quiz";

export default function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/hypotenuse" component={Hypotenuse} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/find-area" component={AreaContainer} />
          <Route path="/is-triangle" component={IsTriangle} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </>
  );
}
