import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const PostComments = (props) => {
  return (
    <>
      <CommentList comments={props.comments} />

      <CommentForm handleCommentSubmit={props.handleCommentSubmit} />
    </>
  );
};

export default PostComments;
