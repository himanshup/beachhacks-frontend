import React, { Component } from "react";
import { createPost, getPosts } from "../helpers/api";
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
import { Link } from "react-router-dom";

class CreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log(this.props);

    getPosts(this.props.match.params.id)
      .then(posts => {
        console.log(posts);
        this.setState({ posts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container className="mt-5">
        <Link
          className="btn btn-primary"
          to={`/create/${this.props.match.params.id}`}
        >
          New Post
        </Link>
        <CardColumns className="mt-3">
          {this.state.posts &&
            this.state.posts.map(post => (
              <Card key={post.id}>
                <CardImg top width="100%" src={post.image} alt={post.caption} />
                <CardBody>
                  <CardTitle>{post.caption}</CardTitle>
                  <CardSubtitle>Posted by {post.author_username}</CardSubtitle>
                </CardBody>
              </Card>
            ))}
        </CardColumns>
      </Container>
    );
  }
}

export default CreateContainer;
