import React from "react";
import { Header } from "semantic-ui-react";
import PostForm from "./PostForm";

const CreatePost = () => {
  return (
    <div>
      <Header as="h2">Add Post</Header>

      <PostForm />
    </div>
  );
};

export default CreatePost;
