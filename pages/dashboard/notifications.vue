<template>
    <!-- <div class="bg-gray-900 min-h-screen p-8"> -->
      <div class="max-w-4xl  bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 class="text-white text-xl font-semibold mb-6">Notifications</h1>
        
        <div class="space-y-4">
          <div class="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 class="text-white text-lg font-semibold">Profile Information Updated</h3>
              <p class="text-gray-400">Your profile information has just been updated.</p>
              <p class="text-gray-500 text-sm mt-2">Date: 7 hours ago</p>
            </div>
            <button class="text-red-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V5a1 1 0 112 0v4h2a1 1 0 110 2h-4a1 1 0 01-1-1zM9 14h2v2H9v-2z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
  
          <div class="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 class="text-white text-lg font-semibold">Welcome to Tans Field Limited</h3>
              <p class="text-gray-400">Thank you for signing up with Tans Field Limited.</p>
              <p class="text-gray-500 text-sm mt-2">Date: 1 day ago</p>
            </div>
            <button class="text-red-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V5a1 1 0 112 0v4h2a1 1 0 110 2h-4a1 1 0 01-1-1zM9 14h2v2H9v-2z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
  layout: "dashboard",
  // middleware: "authenticated",
});
  // Add any data or methods here if needed
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  