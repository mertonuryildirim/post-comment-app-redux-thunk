import React from "react";
import { Header, List } from "semantic-ui-react";

const CommentList = (props) => {
  return (
    <>
      <Header as="h3">Comments</Header>
      <List relaxed>
        {props.comments.map((comment) => (
          <List.Item key={comment.id}>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="span">{comment.display_name}</List.Header>
              <List.Description>{comment.body}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default CommentList;
