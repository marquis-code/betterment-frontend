import { axiosInstance } from './axios.config'

export const userApiFactory = {
  $_get_users(data: any) {
    return axiosInstance.post('/auth/signup', data);
  }
};
