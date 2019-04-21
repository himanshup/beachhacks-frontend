import React, { Component } from "react";
import { register } from "../helpers/api";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  handleChangeFor = propertyName => event => {
    const { user } = this.state;
    const newUser = {
      ...user,
      [propertyName]: event.target.value
    };
    this.setState({ user: newUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.state;

    register(user)
      .then(userInfo => {
        console.log(userInfo);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container className="mt-5">
        <Form>
          <FormGroup>
            <Label for="exusername">Username</Label>
            <Input
              type="text"
              onChange={this.handleChangeFor("username")}
              value={this.state.user.username}
              id="exusername"
              placeholder="johnsmith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="foremail">Username</Label>
            <Input
              type="text"
              onChange={this.handleChangeFor("email")}
              value={this.state.user.email}
              id="foremail"
              placeholder="john@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              onChange={this.handleChangeFor("password")}
              value={this.state.user.password}
              placeholder="Password"
            />
          </FormGroup>

          <Button color="primary" onClick={this.handleSubmit}>
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default RegisterContainer;
