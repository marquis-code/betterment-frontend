<template>
  <main>
        <!-- <div class="bg-gray-900 min-h-screen p-8"> -->
          <div class="max-w-6xl  bg-gray-800 rounded-xl shadow-lg p-6">
            <h1 class="text-white text-lg font-semibold mb-6">WITHDRAWAL</h1>
            <div class="flex justify-between items-center mb-4">
              <div></div>
              <!-- <button class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                &#x270E; Update withdrawal wallet address
              </button> -->
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div @click="router.push(`/dashboard/withdrawal/${option.title.toLowerCase()}`)" v-for="option in withdrawalOptions" :key="option.title" class="bg-white cursor-pointer rounded-lg shadow-md p-6">
                <div class="flex flex-col items-center mb-4">
                  <div :class="`p-2 bg-${option.color}-100 rounded-full`">
                    <img :src="option.icon" alt="option.title" class="h-16 w-16">
                  </div>
                  <h2 class="ml-3 text-lg font-bold">{{ option.title }}</h2>
                </div>
                <p class="text-gray-700 text-sm mb-2">
                  <strong>Min. withdrawable:</strong> {{ option.minWithdrawable }}
                </p>
                <p class="text-gray-700 text-sm mb-2">
                  <strong>Max. withdrawable:</strong> {{ option.maxWithdrawable }}
                </p>
                <p class="text-gray-700 text-sm mb-2">
                  <strong>Charges Amount:</strong> {{ option.chargesAmount }}
                </p>
                <p class="text-gray-700 text-sm mb-4">
                  <strong>Duration:</strong> {{ option.duration }}
                </p>
                <button :class="`bg-${option.color}-500 text-white w-full text-sm py-3 rounded-lg hover:bg-${option.color}-600 transition duration-300`">
                  + Request withdrawal
                </button>
              </div>
            </div>
          </div>
        <!-- </div> -->
        <div class="container mx-auto p-6 border-[0.5px] border-gray-100 rounded-xl  mt-6">
          <h1 class="text-xl font-semibold mb-6">Your Crypto Wallets</h1>
      
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="wallet in computedWallet" :key="wallet.address" class="mb-4 p-4 space-y-3 bg-white shadow-sm border-[0.5px] text-sm rounded-lg">
            <h2 class="text-lg">{{ wallet.name }}</h2>
            <p><strong>Address:</strong> {{ wallet.address }}</p>
            <p>{{ wallet.description }}</p>
            <button @click="openUpdateModal(wallet)" class="mt-2 text-sm px-4 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Update Wallet
            </button>
          </div>
        </div>
      
          <!-- Update Modal -->
          <UpdateCryptoWalletModal
            :isOpen="isModalOpen"
            :walletDetails="selectedWallet"
            @close="isModalOpen = false"
            @update="handleUpdateWallet"
          />
        </div>
  </main>
    </template>
    
    <script lang="ts" setup>
    import { useUpdateWallet } from '@/composables/useUpdateWallet'
    import { useUserInfo } from "@/composables/useUserInfo";
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { dynamicIcons, dynamicImage } from "@/utils/assets";
    
    const { updateWallet, processing } = useUpdateWallet()
    const { userData, loading: loadingUserData } = useUserInfo();
    const router = useRouter()
    
    interface WithdrawalOption {
      title: string;
      minWithdrawable: string;
      maxWithdrawable: string;
      chargesAmount: string;
      duration: string;
      color: string;
      icon: string;
    }
    
    const withdrawalOptions: WithdrawalOption[] = [
      {
        title: 'Bank Withdrawal',
        minWithdrawable: '$50,000.00',
        maxWithdrawable: '$1,000,000.00',
        chargesAmount: '0.13%',
        duration: '12 Hours',
        color: 'green',
        icon: dynamicIcons('bank-withdrawal'),
      },
      {
        title: 'Bitcoin',
        minWithdrawable: '$100.00',
        maxWithdrawable: '$10,000,000.00',
        chargesAmount: '0.12%',
        duration: 'Instant Payment',
        color: 'green',
        icon: dynamicImage('btc.png'),
      },
      {
        title: 'Ethereum',
        minWithdrawable: '$100.00',
        maxWithdrawable: '$10,000,000.00',
        chargesAmount: '0.12%',
        duration: 'Instant Payment',
        color: 'blue',
        icon: dynamicImage('eth.png'),
      },
      {
        title: 'USDT',
        minWithdrawable: '$100.00',
        maxWithdrawable: '$10,000,000.00',
        chargesAmount: '0.12%',
        duration: 'Instant Payment',
        color: 'green',
        icon: dynamicImage('usdt.png'),
      },
    ];
    
    definePageMeta({
  layout: "admin-dashboard"
});
    
    interface Wallet {
      name: string
      address: string
      description: string
    }
  
    const computedWallet = computed(() => {
    if (!userData.value) return [];
  
    return [
      { name: 'Bitcoin Wallet', code: 'btc', address: userData.value.btc || 'Nil', description: 'Main BTC Wallet' },
      { name: 'Ethereum Wallet', code: 'eth', address: userData.value.eth || 'Nil', description: 'Main ETH Wallet' },
      // { name: 'Bank Wallet', code: 'bank', address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', description: 'Main BANK Wallet' },
      // { name: 'USDT Wallet', code: 'usdt', address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', description: 'Main USDT Wallet' },
    ];
  });
  
    const isModalOpen = ref(false)
    const selectedWallet = ref<Wallet | null>(null)
    
    const openUpdateModal = (wallet: Wallet) => {
      selectedWallet.value = { ...wallet }
      isModalOpen.value = true
    }
    
    const handleUpdateWallet = (updatedWallet: Wallet) => {
      isModalOpen.value = false
    }
    </script>
    