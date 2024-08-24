import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { userModule } from '@/store/user';
import { productModule } from '@/store/product';

export const store = createStore({
  modules: {
    user: userModule,
    product: productModule,
  },
  plugins: [createPersistedState()],
});

export default store;

