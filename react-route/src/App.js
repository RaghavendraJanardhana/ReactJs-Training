import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="active-link"
                to={{ pathname: "/" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-link"
                to={{ pathname: "/Products", hash: "recent" }}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
