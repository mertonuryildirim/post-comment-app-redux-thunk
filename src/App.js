import { Container } from "semantic-ui-react";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";

const App = () => {
  return (
    <Router>
      <Container className="text raised very padded segment">
        <Route path="/" exact component={Posts} />
        <Route path="/posts/:id" component={PostDetail} />
      </Container>
    </Router>
  );
};

export default App;
