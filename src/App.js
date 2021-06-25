import React from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail" exact>
          <Detail />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
