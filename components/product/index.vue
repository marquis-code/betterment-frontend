<template>
  <main>
    <div v-if="defaultView === 'list'" class="space-y-6">
     <ProductHeader @addProduct="showSlideOver = true" />

      <div class="border border-gray-100 bg-white rounded-lg shadow">
        <ProductSearchInput v-model="searchQuery" />
        <div v-if="!loading && filteredProducts.length" class="flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-3">
            <ProductTable @edit="handleEditProduct" :filteredProducts="filteredProducts" />
          </div>
        </div>
        <div
          v-else-if="loading"
          class="h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"
        ></div>
        <ProductEmptyState v-else />
      </div>
    </div>
    <CoreSlideOver
      :show="showSlideOver"
      @close="closeSlideOver"
      :showFooter="false"
    >
      <template v-slot:title>
        <h2
          class="text-base font-semibold leading-6 text-gray-900"
          id="slide-over-title"
        >
          {{ selectedProduct ? "Edit Product" : "Create Product" }}
        </h2>
      </template>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Enter Product Name</label
          >
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              id="name"
              v-model="form.name"
              :class="inputClass('name')"
              class="block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="Product Name"
            />
            <p v-if="errors.name" class="mt-2 text-sm text-red-600">
              {{ errors.name }}
            </p>
          </div>
        </div>
        <div>
          <label
            for="description"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Enter Product Description</label
          >
          <div class="relative mt-2 rounded-md shadow-sm">
            <textarea
              id="description"
              v-model="form.description"
              :class="inputClass('description')"
              rows="4"
              class="block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="Product Description"
            ></textarea>
            <p v-if="errors.description" class="mt-2 text-sm text-red-600">
              {{ errors.description }}
            </p>
          </div>
        </div>
        <div>
          <label
            for="price"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Enter Product Price</label
          >
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              id="price"
              v-model="form.price"
              :class="inputClass('price')"
              class="block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="Product Price"
            />
            <p v-if="errors.price" class="mt-2 text-sm text-red-600">
              {{ errors.price }}
            </p>
          </div>
        </div>
        <div>
          <label
            for="image"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Upload Product Image</label
          >
          <div
            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
          >
            <div class="text-center">
              <!-- Display uploaded image if form.image or form.imageUrl is available -->
              <img
                v-if="form.image || form.imageUrl"
                :src="form.image ? form.image : form.imageUrl"
                alt="Image preview"
                class="mt-4 mx-auto h-24 w-24 rounded-md object-cover"
              />
              <!-- Display placeholder if neither form.image nor form.imageUrl is available -->
              <svg
                v-else
                class="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                    @change="onFileChange"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <button
            :disabled="creatingProducts || updating"
            type="submit"
            class="rounded-md disabled:cursor-not-allowed disabled:opacity-25 w-full bg-indigo-600 px-3.5 py-2.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span
              v-if="creatingProducts || updating"
              class="flex items-center justify-center"
            >
              <svg
                class="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l2.829-2.829a4 4 0 000-5.656L6 4.707l-1.414 1.414 2.829 2.829a2 2 0 010 2.828L4.586 17.707 6 19.121z"
                ></path>
              </svg>
              Processing...
            </span>
            <span v-else>
              {{ selectedProduct ? "Update" : "Submit" }}
            </span>
          </button>
        </div>
      </form>
    </CoreSlideOver>
  </main>
</template>

<script setup lang="ts">
import { useFetchProductsList } from "@/composables/products/fetch";
import { useCreateProduct } from "@/composables/products/create";
import { useUpdateProduct } from "@/composables/products/update";

const { filteredProducts, searchQuery, loading, fetchProducts } = useFetchProductsList();
const {
  createProduct,
  resetForm,
  form,
  loading: creatingProducts,
  errors,
  selectedProduct,
} = useCreateProduct();
const { updateProduct, setEditProduct, loading: updating } = useUpdateProduct();

const defaultView = ref("list");
const showSlideOver = ref(false);
const closeSlideOver = () => {
  showSlideOver.value = false;
  resetForm();
  selectedProduct.value = null;
};

const submitForm = async () => {
  if (selectedProduct.value) {
    setEditProduct(form.value);
    await updateProduct().then(() => {
      showSlideOver.value = false;
      fetchProducts();
    });
  } else {
    await createProduct().then(() => {
      showSlideOver.value = false;
      fetchProducts();
    });
  }
};

const inputClass = (field: string) => {
  return errors[field] ? "border-red-500" : "border-gray-300";
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const reader = new FileReader();
    form.value.file = target.files[0];
    form.value.image = URL.createObjectURL(target.files[0]);
    reader.onload = (e: any) => {
      form.value.imageUrl = e.target.result as string;
    };
    reader.readAsDataURL(target.files[0]);
  }
};

const handleEditProduct = (product: any) => {
  showSlideOver.value = true;
  selectedProduct.value = { ...product };
  form.value = { ...product };
};
</script>