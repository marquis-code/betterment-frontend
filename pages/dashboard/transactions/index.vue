<template>
    <main>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">Transactions</h1>
            <p class="mt-2 text-sm text-gray-700">A list of all your account transactions, their name, balance, status, and amount.</p>
          </div>
        </div>
        <div class="">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <button @click="activeTab = 'all'" :class="{'border-indigo-500 text-indigo-600': activeTab === 'all'}" class="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>
                <span>All</span>
              </button>
              <button @click="activeTab = 'deposits'" :class="{'border-indigo-500 text-indigo-600': activeTab === 'deposits'}" class="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>
                <span>Deposits</span>
              </button>
              <button @click="activeTab = 'withdrawals'" :class="{'border-indigo-500 text-indigo-600': activeTab === 'withdrawals'}" class="group inline-flex items-center border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                <svg class="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" clip-rule="evenodd" />
                </svg>
                <span>Withdrawals</span>
              </button>
            </nav>
          </div>
        </div>
        <div class="mt-8 flow-root">
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
                        <!-- <div class="h-11 w-11 flex-shrink-0">
                          <img class="h-11 w-11 rounded-full" :src="item?.proof" alt="">
                        </div> -->
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
                      <span v-if="item.transactionStatus === 'Pending'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pending</span>
                      <span v-if="item.transactionStatus === 'Completed'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{item?.amount ?? 'Nil'}}</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                      {{item?.timeAdded ?? 'Nil'}}
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
                      <span v-if="item.transactionStatus === 'Pending'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pending</span>
                      <span v-if="item.transactionStatus === 'Completed'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{item?.amount ?? 'Nil'}}</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                      {{item?.timeAdded ?? 'Nil'}}
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
                          <div class="font-medium text-gray-900">{{item?.wallet || 'Nil'}}</div>
                        </div>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div class="text-gray-900">NGN {{item?.user?.accountBalance ?? 'Nil'}} (Account Balance)</div>
                      <div class="mt-1 text-gray-500">NGN {{item?.user?.tradingBalance ?? 'Nil'}} (Card Balance)</div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span v-if="item.transactionStatus === 'Pending'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pending</span>
                      <span v-if="item.transactionStatus === 'Completed'" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{item?.amount ?? 'Nil'}}</td>
                    <td class="relative whitespace-nowrap py-5 pl-3 text-right text-sm font-medium">
                      {{item?.timeAdded ?? 'Nil'}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="!transactionsList?.length && !loading" class="flex justify-center items-center border py-32 rounded-md">
             Transactions Not Available
          </div>
          </div>
  
          <div v-if="loading" class="h-32 w-full bg-slate-100 rounded animate-pulse"></div>
        </div>
      </div>   
    </main>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useUserTransactions } from '@/composables/useGetUserTransactions'
  
  definePageMeta({
    layout: "dashboard",
    // middleware: "authenticated",
  });
  
  const activeTab = ref('all')
  
  // Invoke the composable
  const { transactionsList, loading, depositTransactions, withdrawalTransactions } = useUserTransactions()
  </script>
  