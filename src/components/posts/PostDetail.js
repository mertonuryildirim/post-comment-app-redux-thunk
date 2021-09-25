import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import { getPost, sendComment } from "../../store/actions";
import PostComments from "../comments/PostComments";
import DeletePost from "./DeletePost";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const handleCommentSubmit = (event, commentForm) => {
    event.preventDefault();
    dispatch(sendComment(id, commentForm));
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  return (
    <>
      <Header as="h2">{post.title}</Header>
      <p>{post.content}</p>
      <p>{post.created_at} </p>

      <Button.Group>
        <Link to={`/update-post/${id}`}>
          <Button primary>Edit</Button>
        </Link>
        <DeletePost postDetail={post} />
      </Button.Group>

      <PostComments
        comments={post.comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default PostDetail;
