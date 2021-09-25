import { api } from "../../../api";

export const getPosts = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({ type: "GET_POSTS", payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_POSTS_ERROR", payload: "Error fetching posts" });
    });
};
