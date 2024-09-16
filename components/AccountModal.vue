<template>
    <div class="flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-gray-800 rounded-lg shadow-lg w-[500px] p-6 relative">
        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-3 right-3 text-gray-400 hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Title -->
        <h2 class="text-white text-lg font-semibold mb-4">Deposit</h2>
  
        <!-- Message -->
        <p class="text-gray-400 mb-4">
          You are to make a deposit of 
          <span class="text-white font-bold">{{ formattedAmount }}</span> USD into provided {{ selectedMethodLabel }} address.
        </p>
  
        <!-- BTC Address Field -->
        <div class="bg-gray-700 text-white rounded-lg px-4 py-2 flex justify-between items-center">
          <span class="truncate">{{ selectedWalletAddress }}</span>
          <button @click="copyToClipboard" class="bg-gray-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-gray-500">
            Copy
          </button>
        </div>

        <div v-if="isAddressCopied" class="max-w-lg mx-auto bg-green-100 rounded-lg shadow-lg p-6 mt-5">
            <!-- Greeting and Instruction -->
            <p class="text-sm font-medium text-green-800 mb-4">
              Hey <span class="font-medium">{{user.name ?? 'Nil'}}</span> 👋 Kindly upload your proof of payment when you've made payment
            </p>
        
            <!-- Payment Information -->
            <div class="flex justify-between items-center">
              <!-- Pay in USD -->
              <div class="flex-1 mr-4">
                <p class="text-green-800 font-medium text-sm mb-2">Pay in USD</p>
                <div class="flex items-center bg-gray-700 text-white rounded-lg px-4 py-2">
                  <span class="flex-1">{{ amount }}</span>
                  <button @click="copyAmountToClipboard(Number(amount))" class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h4m-2-2v6m2 2H6v5a2 2 0 002 2h8a2 2 0 002-2v-5m-2 2H8v-4m8 4v-2a2 2 0 00-2-2H6" />
                    </svg>
                  </button>
                </div>
              </div>
        
              <!-- Pay in Bitcoin -->
              <div class="flex-1">
                <p class="text-green-800 font-medium text-sm mb-2">Pay in {{selectedMethodLabel}}</p>
                <div class="flex items-center bg-gray-700 text-white rounded-lg px-4 py-2">
                  <span class="flex-1">{{ btcAmount }}</span>
                  <button @click="copyAmountToClipboard(btcAmount)" class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h4m-2-2v6m2 2H6v5a2 2 0 002 2h8a2 2 0 002-2v-5m-2 2H8v-4m8 4v-2a2 2 0 00-2-2H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        
            <!-- Button for uploading proof -->
            <div class="mt-6">
              <button @click="handlePaymentComplete" class="bg-transparent text-sm border border-orange-400 text-orange-400 font-semibold py-2 px-6 rounded-lg hover:bg-orange-50">
                I have paid?
              </button>
            </div>
          </div>
  
        <!-- Close Button -->
        <button @click="closeModal" class="mt-6 w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-400">
          Close
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useUser } from '@/composables/user'
  import { useCryptoConversion } from '@/composables/core/useCryptoConversion';
  import { ref } from 'vue';
  const { $toast } = useNuxtApp()
  const router = useRouter()
  const { user }  = useUser()

  const props = defineProps({
    selectedMethodLabel: {
        type: String
    },
    selectedWalletAddress: {
        type: String
    },
    selectedMethod: {
        type: String
    },
    amount: {
        type: String
    }
  })


  // Reactive conversions when usdAmount changes
const { btcValue, usdtValue, ethValue } = useCryptoConversion(Number(props.amount));

// Re-compute conversions whenever usdAmount is updated
const computedBtcValue = computed(() => useCryptoConversion(Number(props.amount)).btcValue.value);
const computedUsdtValue = computed(() => useCryptoConversion(Number(props.amount)).usdtValue.value);
const computedEthValue = computed(() => useCryptoConversion(Number(props.amount)).ethValue.value);

const computedAmount = computed(() => {
    if(props.selectedMethod === 'BTC' ){
return computedBtcValue.value
    }

    if(props.selectedMethod === 'ETH' ){
   return computedEthValue.value    
    }

    if(props.selectedMethod === 'USDT' ){
    return computedUsdtValue.value 
    }
})
  
  // Computed property to format the amount with commas
  const formattedAmount = computed(() => {
    return `$${props.amount.toLocaleString()}`;
  });

  const isAddressCopied = ref(false)

  const emit = defineEmits(['closeModal', 'paymentComplete'])
  
  // Close modal function
  const closeModal = () => {
    emit('closeModal')
  };

  const handlePaymentComplete = () => {
    emit('closeModal')
    emit('paymentComplete')
  }
  
  // Copy to clipboard function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.selectedWalletAddress).then(() => {
        $toast(`${props.selectedMethodLabel} Address copied to clipboard`, {
          theme: "auto",
          type: "success",
          dangerouslyHTMLString: true
        })
        isAddressCopied.value = true
    });
  };


// Amount values
const btcAmount = ref('0.73761272');

// Function to copy values to clipboard
const copyAmountToClipboard = (value: string) => {
  navigator.clipboard.writeText(value).then(() => {
    alert('Copied to clipboard!');
  });
};
  </script>
  
  <style scoped>
  /* Add any additional custom styles if needed */
  </style>
  