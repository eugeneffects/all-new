import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Company from "./components/pages/Company";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/products" component={Products} />
          <Route path="/company" component={Company} />
          <Redirect path="*" to="home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
