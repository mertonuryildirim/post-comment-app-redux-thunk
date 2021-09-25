const INITIAL_STATE = {
  posts: [],
  postsError: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "GET_POSTS_ERROR":
      return { ...state, postsError: action.payload };
    default:
      return state;
  }
};
