import axios from "axios";

const url = "https://react-yazi-yorum.herokuapp.com/posts";

export const api = () => {
  axios.create({
    baseURL: url,
  });
};
