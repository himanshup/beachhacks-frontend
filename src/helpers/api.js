import axios from "axios";
// axios.defaults.headers.common["Authorization"] = `bearer ${localStorage.token}`;

export const register = user => {
  const api = "api/auth/register/";

  return axios
    .post(api, user)
    .then(user => user.data)
    .catch(error => error);
};

export const login = user => {
  const api = "api/auth/login/";

  return axios
    .post(api, user)
    .then(token => token.data.token)
    .catch(error => error);
};

export const logout = () => {
  const api = "api/auth/logout";

  return axios
    .post(api)
    .then(message => {
      localStorage.removeItem("token");
    })
    .catch(error => error);
};

export const searchBeaches = location => {
  const api = "api/beaches/";

  return axios
    .post(api, location)
    .then(beaches => beaches.data)
    .catch(error => error);
};

export const createPost = post => {
  const api = "api/posts/";

  return axios
    .post(api, post, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
    .then(postInfo => postInfo.data)
    .catch(error => error);
};

export const getPosts = id => {
  const api = `api/posts/${id}`;

  return axios
    .get(api)
    .then(posts => posts.data)
    .catch(error => error);
};
