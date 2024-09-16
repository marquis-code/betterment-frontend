<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center">
          <h2 class="text- font-semibold">Update Wallet Profits</h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
  
        <form @submit.prevent="updateProfits">
          <div class="mt-4 space-y-1">
            <label class="block text-gray-700 text-sm">Select Wallet</label>
            <select v-model="selectedWallet" class="w-full px-4 py-3.5 text-sm bg-gray-100 outline-none border rounded-md">
              <option disabled value="">Choose a wallet</option>
              <option v-for="wallet in wallets" :key="wallet.address" :value="wallet.address">
                {{ wallet.name }} ({{ wallet.address }})
              </option>
            </select>
          </div>
  
          <div class="mt-4 space-y-1">
            <label class="block text-gray-700 text-sm">New Profit</label>
            <input v-model="profit" type="number" class="w-full px-4 py-3.5 text-sm bg-gray-100 outline-none border rounded-md">
          </div>
  
          <div class="flex justify-end mt-10">
            <button @click="closeModal" type="button" class="px-4 w-full py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
            <button type="submit" :disabled="processing" class="ml-2 disabled:cursor-not-allowed disabled:opacity-25 px-4 py-3 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">{{processing ? 'processing..' : 'Submit'}}</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps, defineEmits } from 'vue'
  
  interface Wallet {
    name: string
    address: string
  }
  
  const props = defineProps<{
    isOpen: boolean
    processing: boolean,
    wallets: Wallet[]
  }>()
  
  const emit = defineEmits(['close', 'update'])
  
  const selectedWallet = ref<string>("")
  const profit = ref<number | null>(null)
  
  const closeModal = () => {
    emit('close')
  }
  
  const updateProfits = () => {
    if (!selectedWallet.value || !profit.value) {
      alert('Please select a wallet and enter a profit amount.')
      return
    }
    console.log()
    emit('update', { walletAddress: selectedWallet.value, profit: profit.value })
    closeModal()
  }
  </script>
  
  <style scoped>
  /* Tailwind handles most styling. Customize as needed */
  </style>
  