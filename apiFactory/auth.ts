import { axiosInstance } from './axios.config'

export const authApiFactory = {
  register(data: any) {
    return axiosInstance.post('/auth/signup', data);
  },
  login(data: any) {
    return axiosInstance.post('/auth/login', data);
  }
};
