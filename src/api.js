import axios from "axios";

const url = "https://react-yazi-yorum.herokuapp.com";

export const api = () => {
  return axios.create({
    baseURL: url,
  });
};
