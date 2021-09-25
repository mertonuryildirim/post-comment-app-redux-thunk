import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import { api } from "../../api";
import PostComments from "../comments/PostComments";
import DeletePost from "./DeletePost";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (event, commentForm) => {
    event.preventDefault();
    api()
      .post(`/posts/${id}/comments`, commentForm)
      .then((res) => {
        setComments([...comments, res.data]);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
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

      <Button.Group>
        <Link to={`/update-post/${id}`}>
          <Button primary>Edit</Button>
        </Link>
        <DeletePost postDetail={postDetail} push={props.history.push} />
      </Button.Group>

      <PostComments
        comments={comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default PostDetail;
