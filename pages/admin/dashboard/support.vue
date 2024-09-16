<template>
    <!-- <div class="bg-gray-900 min-h-screen flex items-center justify-center p-8"> -->
      <div class="bg-gray-800 rounded-xl shadow-lg  p-3 lg:p-12 max-w-lg w-full">
        <h2 class="text-white text-xl font-semibold mb-6">Support Ticket</h2>
        
        <div class="mb-4">
          <label class="text-gray-400 mb-2 block">Subject</label>
          <input 
            type="text" 
            placeholder="Enter subject"
            class="w-full p-3 rounded-lg bg-gray-700 text-white border-0"
          />
        </div>
  
        <div class="mb-4">
          <label class="text-gray-400 mb-2 block">Select Category</label>
          <select 
            class="w-full p-3 rounded-lg bg-gray-700 text-white border-0"
          >
            <option>Select Category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <!-- Add more categories as needed -->
          </select>
        </div>
  
        <div class="mb-6">
          <label class="text-gray-400 mb-2 block">Message</label>
          <textarea 
            placeholder="Enter your message"
            class="w-full p-3 rounded-lg bg-gray-700 text-white border-0 h-32"
          ></textarea>
        </div>
  
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </div>
    <!-- </div> -->
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: "admin-dashboard",
  // middleware: "authenticated",
});
  // Add any data or methods here if needed
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  