import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Form, TextArea, Input, Button } from "semantic-ui-react";
import { api } from "../../api";

const INITIAL_POST_FORM = {
  title: "",
  content: "",
};

const PostForm = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [postForm, setPostForm] = useState(INITIAL_POST_FORM);

  const handlePostFormChange = (event) => {
    setPostForm({ ...postForm, [event.target.name]: event.target.value });
  };

  const handlePostFormSubmit = (event) => {
    event.preventDefault();
    if (props.post.title) {
      api()
        .put(`/posts/${id}`, postForm)
        .then((res) => {
          history.push(`/posts/${id}`);
        })
        .catch((err) => {
          return err;
        });
    } else {
      api()
        .post(`/posts`, postForm)
        .then((res) => {
          setPostForm(INITIAL_POST_FORM);
          history.push("/");
        })
        .catch((err) => {
          return err;
        });
    }
  };

  useEffect(() => {
    console.log(props);
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
