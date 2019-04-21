import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Search from "./Search";
import Create from "./Create";
import Home from "./Home";
import Post from "./Post";
import NavbarContainer from "./NavbarContainer";
import history from "../history";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/search" component={Search} />
          <Route path="/beaches/:id" component={Create} />
          <Route path="/create/:beachId" component={Post} />
        </Switch>
      </Router>
    );
  }
}

export default App;
