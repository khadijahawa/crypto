import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/Loader">
              <Loader />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  </div>
);

export default App;
