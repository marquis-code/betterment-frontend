<template>
    <div class="bg-gray-900 min-h-screen p-3 lg:p-8 space-y-8 text-white">
      <!-- Header Section -->
      <div class="lg:flex space-y-4 lg:space-y-0 justify-between items-center mb-6">
        <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
          ← Back
        </button>
        <div class="space-x-4 flex">
          <button class="bg-green-500 text-sm text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            Withdraw to bank
          </button>
          <button class="bg-green-500 text-sm text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            Connect wallet for instant withdrawal
          </button>
        </div>
      </div>
  
      <!-- Update Withdrawal Information Section -->
      <div class="bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 class="text-lg font-semibold mb-4">Update Withdrawal information</h3>
        <p class="text-gray-400 mb-6">We won’t be held accountable for any losses incurred as a result of wrong input of wallet address.</p>
        
        <!-- Table Wrapper with Overflow Hidden -->
        <div class="overflow-x-auto scrollbar-hide">
          <table class="min-w-full text-left text-gray-300">
            <thead>
              <tr>
                <th class="py-2 px-4">Coin Type</th>
                <th class="py-2 px-4">Wallet Address</th>
                <th class="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-700">
                <td class="py-2 px-4 flex items-center">
                  <img :src="dynamicImage('btc.png')" alt="Bitcoin Icon" class="h-6 w-6 mr-2">
                  Bitcoin (BTC)
                </td>
                <td class="py-2 px-4">xxxxxxxxxxxxxxxxxxxxxxxx</td>
                <td class="py-2 px-4">
                  <a href="#" class="text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="bg-gray-800">
                <td class="py-2 px-4 flex items-center">
                  <img :src="dynamicImage('eth.png')" alt="Ethereum Icon" class="h-6 w-6 mr-2">
                  Ethereum (ETH)
                </td>
                <td class="py-2 px-4">xxxxxxxxxxxxxxxxxxxxxxxx</td>
                <td class="py-2 px-4">
                  <a href="#" class="text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr class="bg-gray-700">
                <td class="py-2 px-4 flex items-center">
                  <img :src="dynamicImage('usdt.png')" alt="USDT Icon" class="h-6 w-6 mr-2">
                  Tether (USDT)
                </td>
                <td class="py-2 px-4">xxxxxxxxxxxxxxxxxxxxxxxx</td>
                <td class="py-2 px-4">
                  <a href="#" class="text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { dynamicIcons, dynamicImage } from "@/utils/assets";
  definePageMeta({
    layout: "dashboard",
    // middleware: "authenticated",
  });
  // No script needed for this basic UI layout.
  </script>
  
  <style scoped>
  /* Hide scrollbar */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  </style>
  