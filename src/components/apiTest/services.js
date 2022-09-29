import { serviceHandler } from "../../utils/serviceHandler";

export const getUsers = () => {
  return serviceHandler({
    url: '/users',
    methodType: 'get'
  });
};
