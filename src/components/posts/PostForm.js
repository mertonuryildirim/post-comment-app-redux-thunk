import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Form, TextArea, Input, Button } from "semantic-ui-react";
import { createPost, updatePost } from "../../store/actions";

const INITIAL_POST_FORM = {
  title: "",
  content: "",
};

const PostForm = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [postForm, setPostForm] = useState(INITIAL_POST_FORM);

  const handlePostFormChange = (event) => {
    setPostForm({ ...postForm, [event.target.name]: event.target.value });
  };

  const handlePostFormSubmit = (event) => {
    event.preventDefault();
    if (props.post) {
      dispatch(updatePost(id, postForm, history));
    } else {
      dispatch(createPost(postForm, history));
    }
  };

  useEffect(() => {
    if (props.post)
      setPostForm({ title: props.post.title, content: props.post.content });
  }, [props]);

  return (
    <Form>
      <Form.Field>
        <label>Post Header</label>
        <Input
          name="title"
          value={postForm.title}
          placeholder="Your name..."
          onChange={handlePostFormChange}
          size="mini"
        />
      </Form.Field>

      <Form.Field>
        <label>Post Content</label>
        <TextArea
          name="content"
          value={postForm.content}
          placeholder="Your comment..."
          onChange={handlePostFormChange}
        />
      </Form.Field>

      <Button primary onClick={(e) => handlePostFormSubmit(e)}>
        Submit
      </Button>
      <Button onClick={() => setPostForm(INITIAL_POST_FORM)}>Reject</Button>
    </Form>
  );
};

export default PostForm;
