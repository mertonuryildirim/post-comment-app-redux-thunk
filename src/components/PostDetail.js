import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((res) => {
        setPostDetail(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, [id]);

  return (
    <>
      <Header as="h2">{postDetail.title}</Header>
      <p>{postDetail.content}</p>
      <p>{postDetail.created_at} </p>
    </>
  );
};

export default PostDetail;
