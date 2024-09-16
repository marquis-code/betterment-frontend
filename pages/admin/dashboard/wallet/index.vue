<template>
  <div class="min-h-screen p-1 lg:p-8 space-y-8 text-white">
    <!-- Wallet Section -->
    <div class="bg-gray-800 rounded-xl shadow-lg p-6">
      <h1 class="text-xl font-semibold mb-6">WALLET</h1>
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center space-x-4">
          <img src="@/assets/icons/coloured-avatar.svg" alt="Profile" class="h-16 w-16 rounded-full">
          <div>
            <h2 class="text-lg font-bold">abah marquis</h2>
            <p class="text-gray-400">abahmarquis@gmail.com</p>
            <p class="text-gray-400">Support Id: AaKEJWE2</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <label>Mask</label>
          <input type="checkbox" class="toggle-checkbox" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-gray-700 rounded-lg p-4">
          <h3 class="text-gray-400">USD Wallet</h3>
          <p class="text-2xl font-bold">$0.00 USD</p>
        </div>
        <div class="bg-gray-700 rounded-lg p-4">
          <h3 class="text-gray-400">Bitcoin Wallet</h3>
          <p class="text-2xl font-bold">BTC 0.00</p>
        </div>
        <div class="bg-gray-700 rounded-lg p-4">
          <h3 class="text-gray-400">Ethereum Wallet</h3>
          <p class="text-2xl font-bold">ETH 0.00</p>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-gray-400">Account Balance</h3>
          <p class="text-3xl font-bold">$0.00</p>
        </div>
        <div>
          <h3 class="text-gray-400">Total Profit</h3>
          <p class="text-3xl font-bold">$0.00</p>
        </div>
      </div>

      <div class="flex space-x-4 mt-6">
        <button class="bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Proceed
        </button>
        <button class="bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Get started
        </button>
        <button class="bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Proceed
        </button>
      </div>
    </div>

    <!-- Overview Chart Section -->
    <div class="bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-semibold mb-4">Overview</h3>
      <client-only>
        <apexchart
          type="line"
          width="100%"
          height="300"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </client-only>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ApexCharts from 'vue3-apexcharts'
const router = useRouter()
definePageMeta({
  layout: "admin-dashboard"
// middleware: "authenticated",
});
const chartOptions = ref({
  chart: {
    id: 'vuechart-example',
    toolbar: { show: false },
    type: 'line',
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    labels: {
      style: {
        colors: '#FFFFFF',
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (val: number) => `${val}k`,
      style: {
        colors: '#FFFFFF',
      },
    },
  },
  tooltip: {
    theme: 'dark',
    fillSeriesColor: false,
  },
  colors: ['#F59E0B', '#6366F1', '#10B981'],
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    labels: {
      colors: '#FFFFFF',
    },
  },
  grid: {
    borderColor: '#44475a',
  },
})

const series = ref([
  {
    name: 'BTC',
    data: [80, 85, 75, 90, 85, 80, 70, 75, 80, 85, 90, 95],
  },
  {
    name: 'ETH',
    data: [70, 75, 80, 70, 75, 80, 85, 90, 85, 80, 75, 70],
  },
  {
    name: 'LTC',
    data: [60, 65, 70, 60, 65, 70, 75, 80, 85, 80, 75, 70],
  },
])
</script>

<style scoped>
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
