import axios from "axios";
import { api } from "../../api";

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

export const getPost = (id) => (dispatch) => {
  axios
    .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = { ...responses[0].data, comments: responses[1].data };
      dispatch({ type: "GET_POST", payload: payload });
    })
    .catch((err) => {
      dispatch({
        type: "GET_POST_ERROR",
        payload: "Error fetching post and its comments",
      });
    });
};

export const sendComment = (id, commentForm) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, commentForm)
    .then((response) => {
      dispatch({ type: "SEND_COMMENT", payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: "SEND_COMMENT_ERROR",
        payload: "Error sending comment",
      });
    });
};

export const deletePost =
  (id, handleCloseDeletePostModal, history) => (dispatch) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        dispatch({ type: "DELETE_POST", payload: id });
        handleCloseDeletePostModal();
        history.push("/");
      })
      .catch((err) => {
        dispatch({ type: "DELETE_POST_ERROR", payload: "Error deleting post" });
      });
  };
