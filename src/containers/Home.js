import React from "react";
import { Container, Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Jumbotron className="text-center">
      <h1 className="display-3">Tidey</h1>
      <p className="lead">Fun beach clean-up initiative!</p>

      <p className="lead">
        <Link className="btn btn-primary mr-3" to="/search">
          Find Beaches
        </Link>
        <Link className="btn btn-primary mr-3" to="/register">
          Sign Up
        </Link>
      </p>
    </Jumbotron>
  );
};

export default Home;
