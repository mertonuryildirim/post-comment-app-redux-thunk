import { Container } from "semantic-ui-react";
import Posts from "./components/Posts";

const App = () => {
  return (
    <Container className="text raised very padded segment">
      <Posts />
    </Container>
  );
};

export default App;
