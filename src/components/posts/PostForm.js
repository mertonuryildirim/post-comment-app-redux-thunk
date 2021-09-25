import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Form, TextArea, Input, Button } from "semantic-ui-react";
import { api } from "../../api";

const INITIAL_POST_FORM = {
  title: "",
  content: "",
};

const PostForm = (props) => {
  const [postForm, setPostForm] = useState(INITIAL_POST_FORM);

  const handlePostFormChange = (event) => {
    setPostForm({ ...postForm, [event.target.name]: event.target.value });
  };

  const handlePostFormSubmit = (event) => {
    event.preventDefault();
    if (props.post.title) {
      api()
        .put(`/posts/${props.match.params.id}`, postForm)
        .then((res) => {
          props.history.push(`/posts/${props.match.params.id}`);
        })
        .catch((err) => {
          return err;
        });
    } else {
      api()
        .post(`/posts`, postForm)
        .then((res) => {
          setPostForm(INITIAL_POST_FORM);
          props.history.push("/");
        })
        .catch((err) => {
          return err;
        });
    }
  };

  useEffect(() => {
    if (props.post.title && props.post.content)
      setPostForm({ title: props.post.title, content: props.post.content });
  }, [props.post]);

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

export default withRouter(PostForm);
