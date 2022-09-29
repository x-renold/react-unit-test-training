import axios from './axios';

export const serviceHandler = ({ url, payload, methodType = 'get', options }) => {
  return axios[methodType](`${url}`, payload, options)
    .then((response) => {
      if (response.status === 200) return { success: true, data: response.data };
      return { success: false };
    })
    .catch((error) => {
      return { success: false, error };
    });
};
