import React, { Component } from "react";
import { searchBeaches } from "../helpers/api";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const location = this.state;

    searchBeaches(location)
      .then(beaches => {
        console.log(beaches);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container className="mt-5 w-25">
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="location"
              onChange={this.handleLocationChange}
              value={this.state.location}
            />
          </FormGroup>

          <Button color="primary" onClick={this.handleSubmit}>
            Search
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SearchContainer;
