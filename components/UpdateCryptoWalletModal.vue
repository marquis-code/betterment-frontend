<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-medium">Update Crypto Wallet</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <form @submit.prevent="handleUpdateWallet">
        <div class="mt-4">
          <label class="block text-gray-700">Wallet Name</label>
          <input v-model="walletDetails.name" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" disabled>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Wallet Address</label>
          <input v-model="walletDetails.address" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Description</label>
          <textarea v-model="walletDetails.description" rows="3" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" disabled></textarea>
        </div>

        <div class="mt-6 flex justify-end">
          <button @click="closeModal" type="button" class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
          <button :disabled="processing" type="submit" class="ml-2 px-4 disabled:cursor-not-allowed disabled:opacity-25 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">{{processing ? 'processing..' : 'Update' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useUpdateWallet } from '@/composables/useUpdateWallet'
import { useUserInfo } from "@/composables/useUserInfo";
const { updateWallet, processing } = useUpdateWallet()
const { userData, loading: loadingUserData } = useUserInfo();

interface Wallet {
  name: string
  address: string
  description: string
}

const props = defineProps<{
  isOpen: boolean
  walletDetails: Wallet
}>()

const emit = defineEmits(['close', 'update'])

// Use ref to create a local copy of the wallet details
const wallet = ref<Wallet>({ ...props.walletDetails })

const closeModal = () => {
  emit('close')
}

const handleUpdateWallet = () => {
  // Determine the key based on the value of `props.walletDetails.code`
  const dynamicKey = props.walletDetails.code; // Assuming this could be 'btc', 'eth', etc.

  const walletInput = {
    [dynamicKey]: props.walletDetails.address
  }

  console.log(walletInput, 'wallet input here', userData.value);

  if (Object.keys(userData?.value)?.length) {
    updateWallet(userData.value.id, walletInput).then(() => {
        closeModal()
    })
  }
  
  // emit('update', wallet.value)
}

</script>

<style scoped>
/* Tailwind handles most styling. Customize as needed */
</style>
