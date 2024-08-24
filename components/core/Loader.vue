<template>
    <main>
      <div
        v-if="show"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div class="loader" />
      </div>
    </main>
  </template>
  
  <script lang="ts" setup >
const show = ref(true)

const props = defineProps({
    show: {
        type : Boolean,
         default: false
    }
})
  </script>
  
  <style>
  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  