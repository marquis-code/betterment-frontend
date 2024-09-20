<template>
    <main class="lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0">
      <section class="bg-white lg:w-5/12 rounded-md border">
        <p class="border-b text-sm font-semibold py-4 pl-6">
          Enter amount and select your withdrawal wallet
        </p>
        <form class="p-6 space-y-6" @submit.prevent="submitWithdrawalData">
          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Amount</label>
            <input v-model="form.amount" placeholder="Enter amount in USD" type="number"
              class="py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
          </div>
          <div class="space-y-4">
            <label class="text-xs text-gray-700 font-medium">Crypto deposit type</label>
            <select v-model="formObj.withdrawalType"
              class="py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
              <option value="" disabled>
                ---- Select deposit type -----
              </option>
              <option value="bitcoin">
                Bitcoin
              </option>
              <option value="ethereum">
                Ethereum
              </option>
              <option value="bank">
                Bank Account
              </option>
            </select>
            <div class="space-y-1">
              <label class="text-xs text-gray-700 font-medium">Wallet address</label>
              <input v-model="computedWalletAddress"
                class="py-3 bg-gray-50 border disabled border-gray-600 text-sm rounded-md w-full outline-none pl-6">
            </div>
          </div>
          <div class="w-full pt-6">
            <button type="submit" :disabled="processing"
              class="w-full text-white disabled:cursor-not-allowed disabled:opacity-25  bg-black py-3 px-3 rounded-md">
              {{ processing ? 'processing..' : 'Submit' }}
            </button>
          </div>
        </form>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import { useUserInfo } from '@/composables/useUserInfo'
  import { useTransaction } from '@/composables/useTransaction'
  const { loadingUserInfo, userData } = useUserInfo()
  const { handleTransaction, form, setFormData, processing } = useTransaction()
  // Define reactive variables and refs
  const depositType = ref<string>('')
  const imagePreview = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const fileInput = ref<HTMLInputElement | null>(null);
  const fileInputModal = ref<HTMLInputElement | null>(null);
  const filePreview = ref<string | null>(null);
  const base64FileData = ref<string | null>(null); // Store base64 file data
  const showModal = ref(false); // Modal visibility state
  const router = useRouter()
  
  const triggerFileUpload = () => {
    fileInput.value?.click();
  };
  
  const submitWithdrawalData = () => {
    const payload = { amount: form.value.amount, wallet: computedWalletAddress.value, type: 'Withdrawal' }
    setFormData(payload)
    handleTransaction().then(() => {
      router.push('/dashboard/transactions')
    })
  }

  const formObj = reactive({
    withdrawalType: ''
  })
  
  // Computed property for the wallet address based on the withdrawal type
  const computedWalletAddress = computed(() => {
    if (formObj.withdrawalType === 'bitcoin') {
      return computed_wallet_info.value[0].code
    } else if (formObj.withdrawalType === 'ethereum') {
      return computed_wallet_info.value[1].code
    } else if (formObj.withdrawalType === 'bank') {
      return computed_wallet_info.value[2].code
    } else {
      return ''
    }
  })
  
  // Computed wallet information based on admin data
  const computed_wallet_info = computed(() => {
    if (userData?.value && Object.keys(userData.value).length) {
      return [
        {
          name: 'Bitcoin',
          code: userData.value?.btc ?? 'N/A'
        },
        {
          name: 'Ethereum erc-20',
          code: userData.value?.eth ?? 'N/A'
        },
        {
          name: 'Bank Account',
          code: '00907654378889'
        }
      ]
    } else {
      return [
        {
          name: 'Bitcoin',
          code: ''
        },
        {
          name: 'Ethereum erc-20',
          code: ''
        },
        {
          name: 'Bank Account',
          code: ''
        }
      ]
    }
  })
  
  definePageMeta({
    layout: "dashboard",
  });
  </script>
  
  <style scoped></style>
  