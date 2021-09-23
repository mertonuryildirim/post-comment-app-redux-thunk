import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router";
import { Form, TextArea, Input, Button, Header } from "semantic-ui-react";

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
    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts`, postForm)
      .then((res) => {
        setPostForm(INITIAL_POST_FORM);
        props.history.push("/");
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
      <Header as="h2">Add Post</Header>

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
    </>
  );
};

export default withRouter(PostForm);
