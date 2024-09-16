<template>
    <main class="lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0">
      <section class="bg-white lg:w-5/12 rounded-md border">
        <p class="border-b text-sm font-semibold py-4 pl-6">
          Enter amount and upload proof of payment
        </p>
        <form class="p-6 space-y-6" @submit.prevent="submitWithdrawalData">
          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Amount</label>
            <input v-model="form.amount" placeholder="Enter amount in USD" type="number"
              class="py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
          </div>
          <div class="space-y-4">
            <label class="text-xs text-gray-700 font-medium">Withdrawal Type</label>
            <select v-model="formObj.withdrawalType"
              class="py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
              <option value="" disabled>
                ---- Select withdrawal type -----
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
              <input v-model="form.wallet"
                class="py-3 bg-gray-50 border border-gray-600 text-sm rounded-md w-full outline-none pl-6">
            </div>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 class="text-white font-medium mb-2">Withdraw</h2>
            <p class="text-gray-400 mb-4 text-sm">
              During this process, we will likely not accept any unclear screenshots or an upload that is not in line with your transaction.
            </p>
      
            <!-- File Upload Box or File Preview -->
            <div v-if="filePreview" class="flex flex-col items-center justify-center text-center">
              <!-- Show preview if the file is uploaded -->
              <p class="text-gray-300 mb-2">File Preview:</p>
              <img :src="filePreview" alt="File preview" class="w-full h-64 object-cover rounded-lg shadow-md" />
              <button class="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400" @click="showModal = true">Change Receipt</button>
            </div>
            <div v-else class="border-2 border-dashed border-gray-600 p-10 flex flex-col items-center justify-center rounded-lg text-center">
              <!-- Placeholder for when no file is uploaded -->
              <input type="file" @change="handleFileUpload" class="hidden" ref="fileInput" accept="image/*" />
              <label for="file-upload" class="cursor-pointer flex justify-center items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-12 h-12 text-white mb-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v4a2 2 0 002 2h3v4a2 2 0 002 2h4a2 2 0 002-2v-4h3a2 2 0 002-2V7m-9 10V4m0 0L7 7m5-3l5 3" />
                </svg>
                <p class="text-gray-300">Click the icon above to upload file</p>
              </label>
              <button class="mt-4 text-white bg-blue-500 hover:bg-blue-400 text-sm py-2 px-4 rounded-md" @click="triggerFileUpload">Upload File</button>
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
  import { useAdminInfo } from '@/composables/useAdminInfo'
  import { useTransaction } from '@/composables/useTransaction'
  const { loadingAdminInfo, adminData, } = useAdminInfo()
  const {  handleTransaction, form, setFormData, processing } = useTransaction()
  // Define reactive variables and refs
  const depositType = ref<string>('')
  const imagePreview = ref<string | null>(null)
  const loading = ref<boolean>(false)
    const fileInput = ref<HTMLInputElement | null>(null);
const fileInputModal = ref<HTMLInputElement | null>(null);
const filePreview = ref<string | null>(null);
const base64FileData = ref<string | null>(null); // Store base64 file data
const showModal = ref(false); // Modal visibility state
  

const triggerFileUpload = () => {
  fileInput.value?.click();
};

const submitWithdrawalData = () => {
  const payload = { amount: form.value.amount, wallet: form.value.wallet, proof: base64FileData.value }
  setFormData(payload)
  handleTransaction()
}
// Handle file upload and preview
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      filePreview.value = e.target?.result as string;
      base64FileData.value = e.target?.result as string; // Store the base64 image data
    };

    reader.readAsDataURL(file);
  }
};

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

//   const sendFile = () => {
//   if (base64FileData.value) {
//     const payload = {
//     wallet: props.selectedWalletAddress,
//     proof: base64FileData.value,
//     amount: props.amount
//   }
//   setFormData(payload)
//   handleTransaction()
//     // emit('file-uploaded', base64FileData.value); // Emit the base64 file data to the parent
//   } else {
//     alert('Please upload a file first.');
//   }
// };
  
  // Computed wallet information based on admin data
  const computed_wallet_info = computed(() => {
    return Object.keys(adminData.value).length
      ? [
          {
            name: 'Bitcoin',
            code: adminData.value?.admin?.btc ?? 'N/A'
          },
          {
            name: 'Ethereum erc-20',
            code: adminData.value?.admin?.eth ?? 'N/A'
          },
          {
            name: 'Bank Account',
            code: '00907654378889'
          }
        ]
      : [
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
  })
  
  // Computed property to check if the form is enabled
  // const isFormEnabled = computed(() => !!(form.amount && form.withdrawalType))
  
  // Function to handle withdrawal
  // const handleWithdrawal = async () => {
  //   processing.value = true
  //   const accessToken = JSON.parse(window.localStorage.getItem('auth') || '{}')
  //   try {
  //     const withdrawalMutation = `
  //       mutation newTransaction($input: NewTransaction!) {
  //         newTransaction(input: $input)
  //       }
  //     `
  //     const response = await fetch('https://clone-better.onrender.com', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //         authorization: 'Bearer ' + accessToken
  //       },
  //       body: JSON.stringify({
  //         query: withdrawalMutation,
  //         variables: {
  //           input: {
  //             amount: form.amount,
  //             transactionType: 'Withdrawal',
  //             proof: '',
  //             wallet: form.wallet
  //           }
  //         }
  //       })
  //     })
  //     const data = await response.json()
  //     if (data?.errors) {
  //       // useToastr().e(data.errors[0].message)
  //     } else {
  //       // useToastr().s('You have successfully initiated a withdrawal')
  //       // form.amount = ''
  //       // form.wallet = ''
  //       // form.transactionType = ''
  //     }
  //   } finally {
  //     processing.value = false
  //   }
  // }

  definePageMeta({
  layout: "admin-dashboard",
  // middleware: "authenticated",
});
  </script>
  
  <style scoped></style>
  