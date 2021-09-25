const INITIAL_STATE = {
  posts: [],
  postsError: "",
  post: {
    id: "",
    title: "",
    content: "",
    created_at: "",
    comments: [],
  },
  postError: "",
  sendCommentError: "",
  deletePostError: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, postsError: "", posts: action.payload };
    case "GET_POSTS_ERROR":
      return { ...state, postsError: action.payload };
    case "GET_POST":
      return { ...state, postError: "", post: action.payload };
    case "GET_POST_ERROR":
      return { ...state, postError: action.payload };
    case "SEND_COMMENT":
      return {
        ...state,
        sendCommentError: "",
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload],
        },
      };
    case "SEND_COMMENT_ERROR":
      return { ...state, sendCommentError: action.payload };
    case "DELETE_POST":
      return {
        ...state,
        deletePostError: "",
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "DELETE_POST_ERROR":
      return { ...state, deletePostError: action.payload };
    default:
      return state;
  }
};
