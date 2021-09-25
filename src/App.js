import { Container } from "semantic-ui-react";
import Posts from "./components/posts/Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./components/posts/PostDetail";
import CreatePost from "./components/posts/CreatePost";
import UpdatePost from "./components/posts/UpdatePost";

const App = () => {
  return (
    <Router>
      <Container className="text raised very padded segment">
        <Route path="/" exact component={Posts} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/update-post/:id" component={UpdatePost} />
      </Container>
    </Router>
  );
};

export default App;
