<template>
  <div class="min-h-screen p-1 lg:p-8 space-y-8">
    <CryptoTicker />

    <!-- Greeting Section -->
    <div
      class="bg-blue-100 space-y-4 lg:space-y-0 rounded-lg p-4 lg:flex justify-between items-center shadow-lg"
    >
      <p class="text-blue-900 text-sm lg:text-lg font-semibold">
        Good morning <span class="font-bold">abah</span> 😊 we are super excited
        to have you here with us, our ultimate concern is to see a smile on your
        face.
      </p>
      <button
        @click="router.push('/dashboard/deposits')"
        class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Get Started
      </button>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Account Balance Section -->
      <div
        class="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 class="text-white text-lg font-semibold mb-4">Account balance</h2>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-400">Total earnings</p>
            <p class="text-white text-3xl font-bold mb-4">
              {{ formatToDollar(userData?.accountBalance )?? "0.00" }}
            </p>
            <!-- <button
              @click="router.push('/dashboard/wallet')"
              class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Visit Wallet →
            </button> -->
          </div>
          <!-- <div class="text-center">
            <label class="text-white mr-2">Mask</label>
            <input type="checkbox" class="toggle-checkbox" />
            <div class="mt-4">
              <p class="text-white text-lg font-semibold">0%</p>
              <p class="text-gray-400">Rating</p>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Other Stats Sections -->
      <!-- <div class="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between">
       <div>
        <h3 class="text-white text-lg font-semibold mb-2">Bonus</h3>
        <p class="text-white text-2xl font-bold">$0.00</p>
       </div>
        <img src="@/assets/img/dash1.png" class="h-10 w-10 rounded-full" />
      </div> -->
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between">
        <div>
          <h3 class="text-white text-lg font-semibold mb-2">Trading Balance</h3>
          <p class="text-white text-2xl font-bold">
            {{ formatToDollar(userData?.tradingBalance )?? "0.00" }}
          </p>
        </div>
        <img src="@/assets/img/dash2.png" class="h-10 w-10 rounded-full" />
      </div>
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between">
        <div>
          <h3 class="text-white text-lg font-semibold mb-2">
            Profit
          </h3>
          <p class="text-white text-2xl font-bold">
            {{ formatToDollar(userData?.profit )?? "0.00" }}
          </p>
        </div>
        <img src="@/assets/img/dash3.png" class="h-10 w-10 rounded-full" />
      </div>
      <!-- <div class="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between">
       <div>
        <h3 class="text-white text-lg font-semibold mb-2">Equity</h3>
        <p class="text-white text-2xl font-bold">$0.00</p>
       </div>
        <img src="@/assets/img/dash4.png" class="h-10 w-10 rounded-full" />
      </div>
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between">
       <div>
        <h3 class="text-white text-lg font-semibold mb-2">Target Amount</h3>
        <p class="text-white text-2xl font-bold">$0.00</p>
       </div>
        <img src="@/assets/img/dash5.png" class="h-10 w-10 rounded-full" />
      </div>
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between">
       <div>
        <h3 class="text-white text-lg font-semibold mb-2">Total Referral</h3>
        <p class="text-white text-2xl font-bold">0</p>
       </div>
        <img src="@/assets/img/dash6.png" class="h-10 w-10 rounded-full" />
      </div> -->
    </div>

    <!-- Personal Trading Chart Section -->
    <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 class="text-white text-lg font-semibold mb-4">
        Personal Trading Chart
      </h3>
      <!-- TradingView widget or chart library -->
      <iframe
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_68d44"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <TradingViewTable />
  </div>
</template>

<script lang="ts" setup>
import { useCurrency } from '@/composables/core/useCurrency';
import { useUserTransactions } from "@/composables/useGetUserTransactions";
import { useUserInfo } from "@/composables/useUserInfo";
const { formatToDollar } = useCurrency();
const {
  transactionsList,
  loading,
  totalAccountBalance,
  depositTransactions,
  withdrawalTransactions,
  totalDeposits,
  totalWithdrawals,
} = useUserTransactions();
const { userData, loading: loadingUserData } = useUserInfo();
const router = useRouter();
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
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
  content: "";
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
@/composables/useGetUserTransactions
