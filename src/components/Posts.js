import { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { api } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
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
            <Link className="header" to={`/posts/${post.id}`}>
              {post.title}
            </Link>
            <List.Description as="a">{post.created_at} </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Posts;
