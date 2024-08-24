import { axiosInstance } from './axios.config'
export const productApiFactory = {
  fetchProducts() {
    return axiosInstance.get(`/product`);
  },
  createProduct(payload: any) {
    return axiosInstance.post(`/product/create`, payload);
  },
  fetchProductById(id: string | number) {
    return axiosInstance.get(`/product/${id}`);
  },
  updateProduct(payload: any, id: string | number) {
    return axiosInstance.patch(`/product/${id}`, payload);
  },
  deleteProduct(id: string | number) {
    return axiosInstance.delete(`/product/${id}`);
  },
  fetchAllProducts() {
    return axiosInstance.get(`/product/all-products`);
  },
};
