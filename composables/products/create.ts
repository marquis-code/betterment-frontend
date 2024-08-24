import Swal from "sweetalert2";
import { productApiFactory } from "@/apiFactory/product";
import { useStore } from 'vuex';

export const useCreateProduct = () => {
  const store = useStore();
  const selectedProduct = ref(null);
  const showDropdown = ref(false);
  const loading = ref(false) as any;
  
  const form = ref({
    name: "",
    description: "",
    price: "",
    image: null,
    imageUrl: "",
    file: ''
  }) as Record<string, any>

  const errors = ref({
    name: "",
    description: "",
    price: "",
  }) as Record<string, any>

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
      file: ''
    };
    errors.value = {
      name: "",
      description: "",
      price: ""
    };
  };

  const createProduct = async () => {
    if (!validateForm()) return;
    try {
      loading.value = true;
      const formData = new FormData();
      formData.append("name", form.value.name);
      formData.append("description", form.value.description);
      formData.append("price", form.value.price);
      if (form.value.image) {
        formData.append("file", form.value.file);
      }

      const response = await productApiFactory.createProduct(formData);
      if(typeof response !== 'undefined'){
        resetForm();
        store.commit('product/ADD_PRODUCT', response.data.data);
        useNuxtApp().$toast.success("Product was created successfully.", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        return response;
      }
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

  const editProduct = (product: any) => {
    selectedProduct.value = product;
    form.value = { ...product, imageUrl: product.image || '' };
    showDropdown.value = true;
  };

  return { createProduct, resetForm, form, loading, errors, showDropdown, editProduct, selectedProduct };
};
