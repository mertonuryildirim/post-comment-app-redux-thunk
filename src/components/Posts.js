import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "semantic-ui-react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <List divided relaxed>
      {posts.map((post) => (
        <List.Item key={post.id}>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">{post.title}</List.Header>
            <List.Description as="a">{post.created_at} </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Posts;
