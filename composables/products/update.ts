import Swal from "sweetalert2";
import { productApiFactory } from "@/apiFactory/product";
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { useStore } from 'vuex';
import { useFetchProductsList } from '@/composables/products/fetch'

export const useUpdateProduct = () => {
  const store = useStore();
  const selectedProduct = ref(null);
  const selectedProductId = ref('') as any;
  const showDropdown = ref(false);
  const loading = ref(false);
  const { fetchProducts } = useFetchProductsList()

  const form = ref({
    name: "",
    description: "",
    price: "",
    image: null,
    imageUrl: "",
  });

  const errors = ref({
    name: "",
    description: "",
    price: ""
  });

  const validateForm = () => {
    errors.value.name = form.value.name ? "" : "Product name is required";
    errors.value.description = form.value.description
      ? ""
      : "Product description is required";
    errors.value.price =
      form.value.price && !isNaN(Number(form.value.price))
        ? ""
        : "Valid product price is required";

    return (
      !errors.value.name &&
      !errors.value.description &&
      !errors.value.price
    );
  };

  const resetForm = () => {
    form.value = {
      name: "",
      description: "",
      price: "",
      image: null,
      imageUrl: "",
    };
    errors.value = {
      name: "",
      description: "",
      price: ""
    };
  };

  const updateProduct = async () => {
    if (!validateForm()) return;
    try {
      loading.value = true;
      const response = await productApiFactory.updateProduct(form.value, selectedProductId.value);
      resetForm();
      useNuxtApp().$toast.success("Product was successfully updated.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      store.commit('product/UPDATE_PRODUCT', response.data.data);
      await fetchProducts();
      return response;
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

  const setEditProduct = (product: any) => {
    selectedProduct.value = product;
    selectedProductId.value = product._id;
    form.value = { ...product, imageUrl: product.image || '' };
    showDropdown.value = true;
  };
  
  return {
    updateProduct,
    resetForm,
    form,
    loading,
    errors,
    showDropdown,
    setEditProduct,
  };
};
