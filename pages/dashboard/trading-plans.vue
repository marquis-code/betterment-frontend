<template>
    <div class="min-h-screen p-8 space-y-8">
      <!-- Ticker Bar -->
      <div class="bg-gray-800 text-white text-xs py-5 px-4 rounded-lg shadow-lg flex overflow-x-auto">
        <p class="mr-8">BTC: $39,500 +2.35%</p>
        <p class="mr-8">ETH: $2,500 +1.10%</p>
        <p class="mr-8">XRP: $1.25 +0.50%</p>
        <!-- Add more tickers as necessary -->
      </div>
  
      <!-- Greeting Section -->
      <div class="bg-blue-100 rounded-lg p-4 flex justify-between items-center shadow-lg">
        <p class="text-blue-900 text-lg font-semibold">
          Goo <span class="font-bold">{{user?.name ?? 'Nil'}}</span> 😊 we are super excited to have you here with us, our ultimate concern is to see a smile on your face.
        </p>
        <button class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </div>
  
      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Account Balance Section -->
        <div class="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-white text-lg font-semibold mb-4">Account balance</h2>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400">Total earnings</p>
              <p class="text-white text-3xl font-bold mb-4">$0.00</p>
              <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                Visit Wallet →
              </button>
            </div>
            <div class="text-center">
              <label class="text-white mr-2">Mask</label>
              <input type="checkbox" class="toggle-checkbox" />
              <div class="mt-4">
                <p class="text-white text-lg font-semibold">0%</p>
                <p class="text-gray-400">Rating</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Other Stats Sections -->
        <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 class="text-white text-lg font-semibold mb-2">Bonus</h3>
          <p class="text-white text-2xl font-bold">$0.00</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 class="text-white text-lg font-semibold mb-2">Total Deposit</h3>
          <p class="text-white text-2xl font-bold">$0.00</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 class="text-white text-lg font-semibold mb-2">Total Withdrawal</h3>
          <p class="text-white text-2xl font-bold">$0.00</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 class="text-white text-lg font-semibold mb-2">Equity</h3>
          <p class="text-white text-2xl font-bold">$0.00</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 class="text-white text-lg font-semibold mb-2">Target Amount</h3>
          <p class="text-white text-2xl font-bold">$0.00</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 class="text-white text-lg font-semibold mb-2">Total Referral</h3>
          <p class="text-white text-2xl font-bold">0</p>
        </div>
      </div>
  
      <!-- Personal Trading Chart Section -->
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-white text-lg font-semibold mb-4">Personal Trading Chart</h3>
        <!-- TradingView widget or chart library -->
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_68d44"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
  
      <!-- Forex Market Data Section -->
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-white text-lg font-semibold mb-4">Forex Market Fundamental Data</h3>
        <!-- Forex market data table -->
        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-gray-300">
            <thead>
              <tr>
                <th class="py-2 px-4">Currency</th>
                <th class="py-2 px-4">EUR</th>
                <th class="py-2 px-4">USD</th>
                <th class="py-2 px-4">JPY</th>
                <th class="py-2 px-4">GBP</th>
                <th class="py-2 px-4">CHF</th>
                <th class="py-2 px-4">AUD</th>
                <th class="py-2 px-4">CAD</th>
                <th class="py-2 px-4">NZD</th>
                <th class="py-2 px-4">CNY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4">EUR</td>
                <td class="py-2 px-4">1.11240</td>
                <td class="py-2 px-4">0.8987</td>
                <td class="py-2 px-4">160.666</td>
                <td class="py-2 px-4">0.84316</td>
                <td class="py-2 px-4">0.936720</td>
                <td class="py-2 px-4">1.63961</td>
                <td class="py-2 px-4">1.49893</td>
                <td class="py-2 px-4">1.780290</td>
                <td class="py-2 px-4">7.9213</td>
              </tr>
              <!-- Additional rows as needed -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useUser } from '@/composables/user'
  const { user } = useUser()
    definePageMeta({
  layout: "dashboard",
  // middleware: "authenticated",
});
  // Add any necessary data or methods here
  </script>
  
  <style scoped>
  /* Add custom styles here */
  .toggle-checkbox {
    appearance: none;
    width: 42px;
    height: 22px;
    background-color: #4f46e5;
    border-radius: 11px;
    position: relative;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .toggle-checkbox::after {
    content: '';
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.2s ease-in-out;
  }
  
  .toggle-checkbox:checked {
    background-color: #10b981;
  }
  
  .toggle-checkbox:checked::after {
    transform: translateX(20px);
  }
  </style>
  