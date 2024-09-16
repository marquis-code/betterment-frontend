<template>
  <main>
    <div class="">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Transactions</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all your account transactions, their name, balance, status, and amount.</p>
        </div>
      </div>
      <div class="border-[0.7px] bg-gray-50 border-gray-500 rounded-md py-1 px-3">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <button @click="activeTab = 'all'" :class="{'border-indigo-500 text-indigo-600': activeTab === 'all'}" class="group inline-flex px-6 border-gray-500 border items-center border-b-2 border-transparent py-3 rounded-md text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              <span>All</span>
            </button>
            <button @click="activeTab = 'deposits'" :class="{'border-indigo-500 text-indigo-600': activeTab === 'deposits'}" class="group px-6 inline-flex border-gray-500 border items-center border-b-2 border-transparent py-3 rounded-md text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              <span>Deposits</span>
            </button>
            <button @click="activeTab = 'withdrawals'" :class="{'border-indigo-500 text-indigo-600': activeTab === 'withdrawals'}" class="group px-6 inline-flex border-gray-500 border items-center border-b-2 border-transparent py-3 rounded-md text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" clip-rule="evenodd" />
              </svg>
              <span>Withdrawals</span>
            </button>
          </nav>
        </div>
      </div>
      <div class="mt-2 flow-root px-8 border border-b-500">
        <div v-if="activeTab === 'withdrawals'" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div v-if="transactionsList?.length && !loading" class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Balances</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(item, idx) in withdrawalTransactions" :key="idx">
                          <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <img class="h-11 w-11 rounded-full" :src="item?.proof" alt="">
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{item?.wallet || 'Nil'}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">NGN {{item?.user?.accountBalance ?? 'Nil'}} (Account Balance)</div>
                    <div class="mt-1 text-gray-500">NGN {{item?.user?.tradingBalance ?? 'Nil'}} (Card Balance)</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span v-if="item.transactionStatus === 'Pending'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Pending</span>
                    <span v-if="item.transactionStatus === 'Declined'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Declined</span>
                    <span v-if="item.transactionStatus === 'Approved'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ formatToDollar(item?.amount) ?? 'Nil'}}</td>
                  <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                    {{ formatDate(item?.timeAdded) ?? 'Nil'}}
                  </td>
                  <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                    <div v-if="item.transactionStatus === 'Pending'" class="space-x-3">
                     <button class="border text-sm rounded-lg px-4 bg-green-500 text-white font-medium py-1.5" @click="handleAction(item, 'approve')">Accept</button>
                     <button class="border text-sm rounded-lg px-4 bg-red-500 text-white font-medium py-1.5" @click="handleAction(item, 'reject')">Rejected</button> 
                    </div>
                    <button v-else class="border disabled: cursor-not-allowed opacity-25 text-sm rounded-lg px-4 bg-red-500 text-white font-medium py-1.5">{{item.transactionStatus}}</button> 
                   </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="!transactionsList?.length && !loading" class="flex justify-center items-center border py-32 rounded-md">
            No Withdrawal Transactions Available
        </div>
        </div>
        <div v-if="activeTab === 'deposits'" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div v-if="depositTransactions?.length && !loading" class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Balances</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(item, idx) in depositTransactions" :key="idx">
                          <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <img class="h-11 w-11 rounded-full" :src="item?.proof" alt="">
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{item?.wallet || 'Nil'}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">NGN {{item?.user?.accountBalance ?? 'Nil'}} (Account Balance)</div>
                    <div class="mt-1 text-gray-500">NGN {{item?.user?.tradingBalance ?? 'Nil'}} (Card Balance)</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span v-if="item.transactionStatus === 'Pending'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Pending</span>
                    <span v-if="item.transactionStatus === 'Declined'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Declined</span>
                    <span v-if="item.transactionStatus === 'Approved'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{formatToDollar(item?.amount) ?? 'Nil'}}</td>
                  <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                    {{ formatDate(item?.timeAdded) ?? 'Nil'}}
                  </td>
                  <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                    <div v-if="item.transactionStatus === 'Pending'" class="space-x-3">
                     <button class="border text-sm rounded-lg px-4 bg-green-500 text-white font-medium py-1.5" @click="handleAction(item, 'approve')">Accept</button>
                     <button class="border text-sm rounded-lg px-4 bg-red-500 text-white font-medium py-1.5" @click="handleAction(item, 'reject')">Rejected</button> 
                    </div>
                    <button v-else class="border disabled: cursor-not-allowed opacity-25 text-sm rounded-lg px-4 bg-red-500 text-white font-medium py-1.5">{{item.transactionStatus}}</button> 
                   </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="!depositTransactions?.length && !loading" class="flex justify-center items-center border py-32 rounded-md">
              No Deposit Transactions Available
          </div>
        </div>
        <div v-if="activeTab === 'all'" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div  v-if="transactionsList?.length && !loading" class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Balances</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">Date</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <!-- Withdrawals Transactions -->
                <tr v-for="(item, idx) in transactionsList" :key="idx">
                          <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <img class="h-11 w-11 rounded-full" :src="item?.proof" alt="">
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{item?.user?.name || 'Nil'}}</div>
                        <div class="font-medium text-gray-900">{{item?.user?.email || 'Nil'}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">NGN {{item?.user?.accountBalance ?? 'Nil'}} (Account Balance)</div>
                    <div class="mt-1 text-gray-500">NGN {{item?.user?.tradingBalance ?? 'Nil'}} (Card Balance)</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span v-if="item.transactionStatus === 'Pending'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Pending</span>
                    <span v-if="item.transactionStatus === 'Declined'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Declined</span>
                    <span v-if="item.transactionStatus === 'Approved'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{formatToDollar(item?.amount) ?? 'Nil'}}</td>
                  <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                    {{ formatDate(item?.timeAdded) ?? 'Nil'}}
                  </td>
                  <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                   <div v-if="item.transactionStatus === 'Pending'" class="space-x-3">
                    <button class="border text-sm rounded-lg px-4 bg-green-500 text-white font-medium py-1.5" @click="handleAction(item, 'approve')">Accept</button>
                    <button class="border text-sm rounded-lg px-4 bg-red-500 text-white font-medium py-1.5" @click="handleAction(item, 'reject')">Rejected</button> 
                   </div>
                   <button v-else class="border disabled: cursor-not-allowed opacity-25 text-sm rounded-lg px-4 bg-red-500 text-white font-medium py-1.5">{{item.transactionStatus}}</button> 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="!transactionsList?.length && !loading" class="flex justify-center items-center border py-32 rounded-md">
           Transactions Not Available
        </div>
        </div>

        <div v-if="loading" class="h-32 mt-10 w-full bg-slate-100 rounded animate-pulse"></div>
      </div>
    </div>   
  </main>
</template>

<script lang="ts" setup>
import { useCurrency } from '@/composables/core/useCurrency';
import { formatDate } from '@/composables/core/useDateFormatter';
const { formatToDollar } = useCurrency();
import { useTransactionHistory } from '@/composables/useTransactionHistory'
import { useProcessTransaction } from '@/composables/useProcessTransaction'
const { 
  loading,
    transactionsList,
    depositTransactions,
    withdrawalTransactions,
} = useTransactionHistory()
import Swal from "sweetalert2";
const { processTransaction, processing } = useProcessTransaction()
const route = useRoute()
const router = useRouter()
definePageMeta({
  layout: "admin-dashboard"
});

const activeTab = ref('all')
const transactionType = ref('deposit');
onMounted(() => {
 // Check if the query parameter is already set to 'deposit-details'
 if (route.query.type !== 'deposit') {
   router.replace({
     query: { ...route.query, type: transactionType.value }
   });
 }
});



const handleAction =(data: any, type: any) => {    
     Swal.fire({
      icon: "question",
      title: `${type === 'approve' ? 'Approve' : 'Reject'} Deposit`,
      text: "Are you sure you want to remove this story",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes, Proceed!',
      cancelButtonText: "Nah, Just kidding",
      preConfirm: async () => {
        return await processTransaction(data.id, type).catch((error: any) => {
          const msg = error.response && error.response.data ? error.response.data.message : "An error occurred, please try again.";
          Swal().showValidationMessage(msg);
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Action successful!",
          showCloseButton: true,
        });
      }
    })
    }

</script>

<style scoped>
/* Additional styles can be added here */
</style>
