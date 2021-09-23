import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Header,
  Image,
  List,
  Form,
  TextArea,
  Input,
  Button,
} from "semantic-ui-react";

const INITIAL_COMMENT = { display_name: "", body: "" };

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState(INITIAL_COMMENT);

  const handleCommentFormChange = (event) => {
    setCommentForm({ ...commentForm, [event.target.name]: event.target.value });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        commentForm
      )
      .then((res) => {
        setComments([...comments, res.data]);
        setCommentForm(INITIAL_COMMENT);
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
      <Header as="h3">Comments</Header>
      <List relaxed>
        {comments.map((comment) => (
          <List.Item key={comment.id}>
            <Image avatar src="/images/avatar/small/daniel.jpg" />
            <List.Content>
              <List.Header as="a">{comment.display_name}</List.Header>
              <List.Description>{comment.body}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
      <Header as="h3">Add Comment</Header>

      <Form onSubmit={handleCommentSubmit}>
        <Input
          name="display_name"
          value={commentForm.display_name}
          placeholder="Your name..."
          onChange={handleCommentFormChange}
          size="mini"
        />

        <TextArea
          name="body"
          value={commentForm.body}
          placeholder="Your comment..."
          onChange={handleCommentFormChange}
        />

        <Button type="submit" primary>
          Send Comment
        </Button>
      </Form>
    </>
  );
};

export default PostDetail;
