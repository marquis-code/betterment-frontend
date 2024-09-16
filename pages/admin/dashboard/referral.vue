<template>
    <!-- <div class="bg-gray-900 min-h-screen p-8"> -->
      <div class="max-w-5xl bg-gray-800 rounded-xl shadow-lg p-6">
        <!-- Header -->
        <h1 class="text-white text-xl font-semibold mb-6">REFERRAL</h1>
        
        <!-- Referral Info -->
        <div class="lg:flex space-y-10 lg:space-y-0 justify-between items-start mb-8">
          <div>
            <h2 class="text-white text-lg font-semibold mb-2">Hey abah,</h2>
            <p class="text-gray-400 mb-4">
              Make extra income by referring your family and friends. We pay you
              commissions for every signup that comes via your referral link.
            </p>
            <div class="flex items-center bg-gray-700 rounded-lg p-2">
              <input
                type="text"
                readonly
                class="bg-transparent text-white w-full focus:outline-none"
                value="https://www.account.tansfieldltd.com/sign-up?referer=a"
              />
              <button class="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                <i class="fas fa-copy"></i> <!-- Placeholder for copy icon -->
              </button>
            </div>
            <!-- Social Media Buttons -->
            <div class="flex space-x-4 mt-4">
              <button class="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
                <i class="fab fa-facebook-f mr-2"></i> Share
              </button>
              <button class="bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-300">
                <i class="fab fa-twitter mr-2"></i> Tweet
              </button>
              <button class="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-600 transition duration-300">
                <i class="fab fa-whatsapp mr-2"></i> Share
              </button>
              <button class="bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-gray-500 transition duration-300">
                <i class="fas fa-share-alt mr-2"></i> Share
              </button>
            </div>
          </div>
          
          <!-- Referral Stats -->
          <div class="lg:w-64">
            <div class="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 class="text-gray-400 text-sm">Total Referral</h3>
              <p class="text-white text-2xl font-semibold">0</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg">
              <h3 class="text-gray-400 text-sm">Active Referral</h3>
              <p class="text-white text-2xl font-semibold">0</p>
            </div>
          </div>
        </div>
        
        <!-- Referral History -->
        <div class="bg-gray-700 rounded-lg p-4">
          <h3 class="text-white text-lg font-semibold mb-4">Referral History</h3>
          <table class="w-full text-left text-gray-300">
            <thead>
              <tr>
                <th class="py-2">Name</th>
                <th class="py-2">Reward</th>
                <th class="py-2">Date</th>
                <th class="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2" colspan="4">
                  <p class="text-center text-gray-500">No Referrals</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    <!-- </div> -->
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: "admin-dashboard",
  // middleware: "authenticated",
});
  // Placeholder for any state management or data fetching logic
  </script>
  
  <style scoped>
  /* Add custom styles here if necessary */
  </style>
  