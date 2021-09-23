import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import PostComments from "./PostComments";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (event, commentForm) => {
    event.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        commentForm
      )
      .then((res) => {
        setComments([...comments, res.data]);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
        ),
      ])
      .then((responses) => {
        setPostDetail(responses[0].data);
        setComments(responses[1].data);
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

      <PostComments
        comments={comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default PostDetail;
