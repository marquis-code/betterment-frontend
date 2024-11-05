<template>
  <div class="max-w-3xl p-2">
    <h1 class="text-sm bg-white font-medium mb-6 border-[0.5px] rounded-lg p-3 border-gray-200">Admin Profile</h1>

    <div class="bg-white border-[0.5px] rounded-lg p-5 border-gray-200">
      <div class="flex justify-between items-center">
          <h2 class="text- font-semibold mb-4">Admin Details</h2>
          <button @click="openProfitModal" type="button" class="px-4 py-2 text-sm bg-black text-white rounded-md ">
              Update wallet Profits
          </button>
          <button :disabled="processingProfitUpdate" @click="handleProfitUpdate" type="button" class="px-4 disabled:cursor-not-allowed disabled:opacity-25 py-2 text-sm bg-black text-white rounded-md ">
             {{ processingProfitUpdate ? 'processing...' : 'Update Profits'}}
        </button>
      </div>

      <form @submit.prevent="handleUpdateProfile">
          <div class="mb-4">
              <label class="block text-gray-700 text-sm">Name</label>
              <input v-model="admin.name" type="text" class="w-full px-4 py-4 text-sm border-[-5px] bg-gray-100 border-gray-25 rounded-md outline-none">
          </div>

          <div class="mb-4">
              <label class="block text-gray-700  text-sm" text-sm>Email</label>
              <input v-model="admin.email" type="email" class="w-full px-4 py-4 text-sm border-[-5px] bg-gray-100 border-gray-25 rounded-md outline-none">
          </div>

          <div class="mt-10">
              <button :disabled="processing" :processing="processing" type="submit" class="px-4 w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-25 bg-blue-500 text-white rounded-md hover:bg-blue-600">
               {{ processing ? 'processing...' : 'Submit' }} 
              </button>
          </div>
      </form>

      <UpdateProfitsModal
        :isOpen="isModalOpen"
        :wallets="wallets"
        @close="isModalOpen = false"
        @update="handleUpdateProfits"
        :processing="processing"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProfitUpdate } from '@/composables/useProfitUpdate'
  import { useUserInfo } from "@/composables/useUserInfo";
import { useUpdateAdmin } from '@/composables/useUpdateAdmin'
import UpdateProfitsModal from '~/components/UpdateProfitsModal.vue'
const { userData, loading: loadingUserData } = useUserInfo();
const { updateAdmin, processing } = useUpdateAdmin()
const { handleProfitUpdate, processingProfitUpdate } = useProfitUpdate()
interface Wallet {
name: string;
address: string;
}

const admin = ref({
 name: '',
email: '',
password: 'Miles1999@'
});



watch(userData, () => {
// Prefill admin details with userData when it changes
if (userData.value) {
  admin.value.name = userData.value.name || '';
  admin.value.email = userData.value.email || '';
  // wallets.value = userData.value.wallets || [];
}
}, { immediate: true });


const wallets = computed(() => {
  if(!userData.value) return []

  return [
  { name: 'Bitcoin Wallet', address: userData.value.btc },
  { name: 'Ethereum Wallet', address: userData.value.eth },
]
})

const isModalOpen = ref(false)

const openProfitModal = () => {
  isModalOpen.value = true
}

const handleUpdateProfits = (data: any) => {
  const payload = {
      name: data.walletAddress,
      address: data.profit
  }
  updateAdmin(userData.value.id, payload)
  isModalOpen.value = false
}

const handleUpdateProfile = () => {
  // Handle the profit update logic, e.g., make API calls to update profits
  const payload = {
      name: admin.value.name,
      email: admin.value.email
  }
  updateAdmin(payload)
}

definePageMeta({
layout: "admin-dashboard"
});
</script>
@/composables/useUpdateAdmin