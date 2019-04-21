import React, { Component } from "react";
import { createPost, getPosts } from "../helpers/api";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import history from "../history";
import { Redirect } from "react-router";

class CreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        caption: "",
        image: "",
        beach_id: props.match.params.beachId
      },
      posts: []
    };
  }

  handleChangeFor = propertyName => event => {
    const { post } = this.state;
    const newPost = {
      ...post,
      [propertyName]: event.target.value
    };
    this.setState({ post: newPost });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { post } = this.state;

    createPost(post)
      .then(postInfo => {
        console.log(postInfo);
        // history.push(`/beaches/${this.props.match.params.beachId}`);
        return <Redirect to={`/beaches/${this.props.match.params.beachId}`} />;
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container className="mt-5">
        <Form>
          <FormGroup>
            <Label for="exusername">Caption</Label>
            <Input
              type="text"
              onChange={this.handleChangeFor("caption")}
              value={this.state.post.caption}
              id="exusername"
            />
          </FormGroup>
          <FormGroup>
            <Label for="foremail">Image</Label>
            <Input
              type="text"
              onChange={this.handleChangeFor("image")}
              value={this.state.post.image}
              id="foremail"
              placeholder="image.jpg"
            />
          </FormGroup>

          <Button color="primary" onClick={this.handleSubmit}>
            Post
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CreateContainer;
