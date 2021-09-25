import React from "react";
import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";
import PostForm from "./PostForm";

const UpdatePost = () => {
  const post = useSelector((state) => state.post);

  return (
    <div>
      <Header as="h2">Update Post</Header>

      <PostForm post={post} />
    </div>
  );
};

export default UpdatePost;
