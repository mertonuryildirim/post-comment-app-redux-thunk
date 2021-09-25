import { useEffect } from "react";
import { Button, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <List divided relaxed>
      <div style={{ justifyContent: "end", display: "flex" }}>
        <Link className="button" to="/create-post">
          <Button primary>Add Post</Button>
        </Link>
      </div>
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
