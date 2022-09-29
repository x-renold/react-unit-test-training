import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  all: axios.all,
  spread: axios.spread
};
