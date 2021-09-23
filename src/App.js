import { Container } from "semantic-ui-react";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <Router>
      <Container className="text raised very padded segment">
        <Route path="/" exact component={Posts} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
      </Container>
    </Router>
  );
};

export default App;
