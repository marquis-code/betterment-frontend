<template>
  <main>
   <div v-if="route.query.stage === 'deposit-details'" class="max-w-4xl bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 lg:space-y-0 lg:flex">
     <!-- Deposit Form -->
     <div class="flex-1">
       <h1 class="text-white text-lg font-semibold mb-6">DEPOSIT </h1>
       <div class="flex mb-4">
         <button @click="depositType = 'default'"
           class="bg-blue-500 text-white py-2 px-4 text-sm rounded-sm mr-2 hover:bg-blue-600 transition duration-300">
           Manual Deposit
         </button>
       </div>
       <section class="space-y-7" v-if="depositType === 'default'">
         <div class="mb-4">
           <label class="text-white block mb-2">Select Amount</label>
           <input
             type="range"
             class="w-full"
             min="0"
             max="100000"
             step="1"
             v-model="amount"
           />
         </div>
         <div class="mb-4">
           <label class="text-white block mb-2">Enter Amount</label>
           <input
             type="text"
             class="w-full p-2  py-3 rounded-md bg-gray-700 text-white border-0 outline-none"
             :value="formattedAmount"
             readonly
           />
         </div>
         <div class="mb-6">
           <label class="text-white block mb-2">Select Payment Method</label>
           <div class="grid grid-cols-2 gap-4">
             <div
               v-for="method in paymentMethods"
               :key="method.label"
               class="bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer"
               @click="selectPaymentMethod(method.value, method.label, method.address)"
             >
               <div class="flex items-center">
                 <img :src="method.icon" alt="method.label" class="h-8 w-8 mr-2" />
                 <span class="text-gray-700 font-semibold text-sm">{{ method.label }}</span>
               </div>
               <input
                 type="radio"
                 name="paymentMethod"
                 :value="method.value"
                 v-model="selectedMethod"
               />
             </div>
           </div>
         </div>
         <button @click="showSummaryModal = true"
           class="bg-blue-500 text-white w-full py-3 rounded-sm text-sm hover:bg-blue-600 transition duration-300">
           Proceed to Payment
         </button>
       </section>
     </div>
 
     <!-- Deposit Summary -->
     <div class="lg:ml-8 bg-gray-700 rounded-lg p-6 flex flex-col justify-between lg:w-64">
       <div>
         <div class="flex justify-between items-center text-sm">
           <h2 class="text-white text-sm font-semibold mb-4">Total Deposit</h2>
           <p class="text-white text-sm mb-6">{{ formattedAmount }}</p>
         </div>
         <button @click="router.push('/admin/dashboard/transactions')"
           class="bg-green-500 text-white w-full py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition duration-300 mb-4">
           View Deposit History
         </button>
       </div>
       <div>
         <p class="text-white text-center mb-4">Don't have cryptocurrency?</p>
         <button
           class="bg-red-500 text-white w-full py-3 text-xs rounded-sm font-semibold hover:bg-red-600 transition duration-300">
           Buy Now
         </button>
       </div>
     </div>
   </div>
   <UploadProof  :computedAmount="computedAmount" :selectedMethod="selectedMethod" :selectedMethodLabel="selectedMethodLabel" :selectedWalletAddress="selectedWalletAddress" :amount="amount" v-if="route.query.stage === 'upload-proof'" />
   <CoreModal :isOpen="showSummaryModal" @close="showSummaryModal = false" >
     <AccountModal @paymentComplete="paymentComplete" @closeModal="showSummaryModal = false" :selectedMethod="selectedMethod" :selectedMethodLabel="selectedMethodLabel" :selectedWalletAddress="selectedWalletAddress" :amount="amount" />
   </CoreModal>
  </main>
 </template>
 
 <script lang="ts" setup>
 import { useRouter, useRoute } from 'vue-router';
 import { useAdminInfo } from '@/composables/useAdminInfo'
 import { useCryptoConversion } from '@/composables/core/useCryptoConversion';
 import { dynamicImage } from "@/utils/assets";
 const { loadingAdminInfo, adminData } = useAdminInfo()
 
 const { $toast } = useNuxtApp();
 const router = useRouter();
 const route = useRoute();
 
 const amount = ref(0); // Starting from zero
 const showSummaryModal = ref(false);
 const selectedMethod = ref<string | null>(null);
 const selectedMethodLabel = ref<string | null>(null);
 const selectedWalletAddress = ref<string | null>(null);

   // Reactive conversions when usdAmount changes
const { btcValue, usdtValue, ethValue } = useCryptoConversion(Number(amount.value));

// Re-compute conversions whenever usdAmount is updated
const computedBtcValue = computed(() => useCryptoConversion(Number(amount.value)).btcValue.value);
const computedUsdtValue = computed(() => useCryptoConversion(Number(amount.value)).usdtValue.value);
const computedEthValue = computed(() => useCryptoConversion(Number(amount.value)).ethValue.value);

const computedAmount = computed(() => {
    if(selectedMethod.value === 'BTC' ){
return computedBtcValue.value
    }

    if(selectedMethod.value === 'ETH' ){
   return computedEthValue.value    
    }

    if(selectedMethod.value === 'USDT' ){
    return computedUsdtValue.value 
    }
})
 
 // Set query parameter when component mounts
 onMounted(() => {
   // Check if the query parameter is already set to 'deposit-details'
   if (route.query.stage !== 'deposit-details') {
     router.replace({
       query: { ...route.query, stage: 'deposit-details' }
     });
   }
 });
 
 const paymentMethods = [
   {
     label: 'Bitcoin (BTC)',
     value: 'BTC',
     address: adminData?.value?.admin?.btc ?? 'N/A',
     icon: dynamicImage('btc.png'), // Replace with actual path
   },
   {
     label: 'Ethereum (ETH)',
     value: 'ETH',
     address: adminData?.value?.admin?.eth ?? 'N/A',
     icon: dynamicImage('eth.png'), // Replace with actual path
   },
   {
     label: 'Tether US (USDT)',
     value: 'USDT',
     address: '46875643578463578465894365',
     icon: dynamicImage('usdt.png'), // Replace with actual path
   },
 ];

 const selectPaymentMethod = (value: string, label: string, address: string) => {
   selectedMethod.value = value;
   selectedMethodLabel.value = label;
   selectedWalletAddress.value = address;
   $toast(`Your Selection is ${label}`, {
     theme: "auto",
     type: "success",
     dangerouslyHTMLString: true
   });
 };
 
 // Computed property to format the amount with a dollar sign and commas
 const formattedAmount = computed(() => {
   return `$${amount.value.toLocaleString()}`; // Adds commas and dollar sign
 });
 
 const depositType = ref('default');

 const paymentComplete = ()  => {
  router.replace({
     query: { ...route.query, stage: 'upload-proof' }
   });
 }
 
 definePageMeta({
  layout: "admin-dashboard"
 });
 </script>
 
 <style scoped>
 /* Add custom styles here if necessary */
 </style>
 