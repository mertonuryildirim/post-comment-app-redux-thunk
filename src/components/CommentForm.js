import React, { useState } from "react";
import { Header, Form, TextArea, Input, Button } from "semantic-ui-react";

const INITIAL_COMMENT = { display_name: "", body: "" };

const CommentForm = (props) => {
  const [commentForm, setCommentForm] = useState(INITIAL_COMMENT);

  const handleCommentFormChange = (event) => {
    setCommentForm({ ...commentForm, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header as="h3">Add Comment</Header>

      <Form
        onSubmit={(e) => {
          props.handleCommentSubmit(e, commentForm);
          setCommentForm(INITIAL_COMMENT);
        }}
      >
        <Form.Field>
          <label>Your Name</label>
          <Input
            name="display_name"
            value={commentForm.display_name}
            placeholder="Your name..."
            onChange={handleCommentFormChange}
            size="mini"
          />
        </Form.Field>

        <Form.Field>
          <label>Comment</label>
          <TextArea
            name="body"
            value={commentForm.body}
            placeholder="Your comment..."
            onChange={handleCommentFormChange}
          />
        </Form.Field>
        
        <Button type="submit" primary>
          Send Comment
        </Button>
      </Form>
    </>
  );
};

export default CommentForm;
