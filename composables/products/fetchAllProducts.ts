import { productApiFactory } from "@/apiFactory/product";
import { useStore } from 'vuex';
export const useFetchAllProductsList = () => {
  const store = useStore();
  const products = ref([]) as any;
  const loading = ref(false) as any;
  const searchQuery = ref('') as any;

  const fetchAllProducts = async () => {
    loading.value = true;
    try {
      const response = await productApiFactory.fetchAllProducts();
      products.value = response.data.data || [];
      store.commit('product/SET_PRODUCTS', response.data.data || []);
    } catch (error: any) {
      if (typeof error.response !== "undefined") {
        useNuxtApp().$toast.error("Something went wrong!", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    } finally {
      loading.value = false;
    }
  };

  const filteredProducts = computed(() => {
    if (searchQuery.value) {
      return products.value.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
    return products.value;
  });

  onMounted(() => {
    fetchAllProducts();
  });

  return { fetchAllProducts, products, filteredProducts, searchQuery, loading };
};
