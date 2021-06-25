import React from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/detail/:id" exact>
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
