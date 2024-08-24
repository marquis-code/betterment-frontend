// store/user.ts
import { Module } from 'vuex';

interface UserState {
  user: null | { id: string; name: string };
  token: string;
  isAuthenticated: boolean;
}

export const userModule: Module<UserState, any> = {
  namespaced: true,
  state: {
    user: null,
    token: '',
    isAuthenticated: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = '';
      state.isAuthenticated = false;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
};
