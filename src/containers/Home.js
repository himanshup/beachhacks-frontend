import React from "react";
import { Container, Jumbotron, Button } from "reactstrap";

const Home = () => {
  return (
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Button color="primary" className="mr-3">Search Beaches</Button>
        <Button color="primary">Sign Up</Button>
      </p>
    </Jumbotron>
  );
};

export default Home;
