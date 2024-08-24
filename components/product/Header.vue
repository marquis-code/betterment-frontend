<template>
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto pt-10">
          <h1 class="text-xl font-semibold leading-6 text-gray-900">
            Products
          </h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of all your products including name, description, image and
            price.
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            @click="emit('addProduct')"
            class="block rounded-md bg-black text-white px-3 py-2 text-center text-sm font-semibold"
          >
            Add products
          </button>
        </div>
      </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'addProduct'): void
}>()
</script>

