import React, { Component } from "react";
import { searchBeaches } from "../helpers/api";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns
} from "reactstrap";
import Loader from "./Loader";
import "./Search.css";
import { Link } from "react-router-dom";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      loading: false,
      beaches: []
    };
  }

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const location = this.state;

    this.setState({ loading: true });

    searchBeaches(location)
      .then(beaches => {
        console.log(beaches);
        this.setState({ beaches });
      })
      .then(res => {
        this.setState({ loading: false });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <Container className="mt-5 w-25 text-center">
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
        <Container>
          <CardColumns className="mt-5">
            {this.state.beaches &&
              this.state.beaches.map(beach => (
                <Link
                  className="card"
                  key={beach.place_id}
                  to={`/beaches/${beach.place_id}`}
                >
                  <CardImg
                    top
                    width="100%"
                    src={
                      beach.photos[0]
                        ? beach.photos[0]
                        : "http://clipart-library.com/img/1032756.jpg"
                    }
                    alt={beach.name}
                  />
                  <CardBody>
                    <CardTitle>{beach.name}</CardTitle>
                    <CardSubtitle>{beach.address}</CardSubtitle>
                  </CardBody>
                </Link>
              ))}
          </CardColumns>
        </Container>
      </>
    );
  }
}

export default SearchContainer;
