import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { Header } from "semantic-ui-react";
import { api } from "../../api";
import PostForm from "./PostForm";

const UpdatePost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, [id]);

  return (
    <div>
      <Header as="h2">Update Post</Header>

      <PostForm post={post} />
    </div>
  );
};

export default UpdatePost;
