// store/product.ts
import { Module } from 'vuex';

interface Product {
  id: string;
  name: string;
  description: string;
}

interface ProductState {
  products: Product[];
}

export const productModule: Module<ProductState, any> = {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter((p) => p.id !== productId);
    },
  },
  actions: {
    setProducts({ commit }, products) {
      commit('SET_PRODUCTS', products);
    },
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
    updateProduct({ commit }, updatedProduct) {
      commit('UPDATE_PRODUCT', updatedProduct);
    },
    deleteProduct({ commit }, productId) {
      commit('DELETE_PRODUCT', productId);
    },
  },
};
