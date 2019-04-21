import React, { Component } from "react";
import { createPost } from "../helpers/api";
import Register from "../components/Register";

class CreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        caption: "",
        image: "",
        beach_id: ""
      }
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
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChangeFor("caption")}
          value={this.state.post.caption}
        />
        <input
          type="text"
          onChange={this.handleChangeFor("image")}
          value={this.state.post.image}
        />
        <input
          type="text"
          onChange={this.handleChangeFor("beach_id")}
          value={this.state.post.beach_id}
        />

        <button onClick={this.handleSubmit}>Post</button>
      </div>
    );
  }
}

export default CreateContainer;
