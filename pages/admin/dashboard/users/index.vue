<template>
<main>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div v-if="usersList && !loading" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">User</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Balances</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Wallets</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr class="cursor-pointer" v-for="(item, idx) in usersList" :key="idx">
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center pl-4">
                      <div class="h-11 w-11 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{item.name ?? 'Nil'}}</div>
                        <div class="mt-1 text-gray-500">{{item.email ?? 'Nil'}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">{{formatToDollar(item.accountBalance) ?? 'Nil'}} (account balance)</div>
                    <div class="text-gray-900">{{formatToDollar(item.tradingBalance) ?? 'Nil'}} (trading balance)</div>
                    <div class="mt-1 text-gray-500">{{formatToDollar(item.profit) ?? 'Nil'}} (profit)</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">
                      <span v-if="item.eth">{{item.eth ?? 'Nil'}} (ETH wallet)</span>
                      <span v-else>Nil</span>
                    </div>
                    <div class="text-gray-900">
                      <span v-if="item.btc">{{item.btc ?? 'Nil'}} (BTC wallet)</span>
                      <span v-else>Nil</span>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ formatDate(item.timeAdded) ?? 'Nil'}}</td>
                  <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                 <div class="mr-10">
                  <button type="button" @click="handleEditUer(item)" class="border text-white py-2 px-6 rounded-md text-sm bg-green-600">
                      Edit
                   </button>
                 </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div v-if="loading" class="h-32 w-full bg-slate-100 rounded animate-pulse"></div>
      <div v-if="!usersList?.length && !loading" class="flex justify-center items-center border py-32 rounded-md">
        Users Not Available
     </div>
    </div>
  </div>     

   <CoreModal :isOpen="showEditModal" @close="closeModal">
    <section class="bg-white rounded-lg m-6 lg:w-3/12 max-w-5xl w-full">
      <div class="px-5 py-5">
        <h4 class="font-medium text-gray-800">Update User Information</h4>
      </div>
      <form @submit.prevent="proceedToEditUser">
        <div class="px-6 space-y-4">
          <div>
            <label for="name" class="block text-xs font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-1">
              <input type="text" v-model="payload.name" name="name" id="name"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>
    
          <div>
            <label for="email" class="block text-xs font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-1">
              <input type="email" v-model="payload.email" name="email" id="email"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>
<!--     
          <div>
            <label for="btc-wallet" class="block text-xs font-medium leading-6 text-gray-900">BTC Wallet Address</label>
            <div class="mt-1">
              <input type="text" v-model="payload.btc" name="btc-wallet" id="btc-wallet"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>
    
          <div>
            <label for="eth-wallet" class="block text-xs font-medium leading-6 text-gray-900">ETH Wallet Address</label>
            <div class="mt-1">
              <input type="text" v-model="payload.eth" name="eth-wallet" id="eth-wallet"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>
     -->
    
          <div>
            <label for="profit" class="block text-xs font-medium leading-6 text-gray-900">Profit</label>
            <div class="mt-1">
              <input type="text" v-model="payload.profit" name="profit" id="profit"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>

          <div>
            <label for="trading-balance" class="block text-xs font-medium leading-6 text-gray-900">Trading Balance</label>
            <div class="mt-1">
              <input type="text" v-model="payload.tradingBalance" name="trading-balance" id="trading-balance"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>
    
          <div>
            <label for="account-balance" class="block text-xs font-medium leading-6 text-gray-900">Account Balance</label>
            <div class="mt-1">
              <input type="text" v-model="payload.accountBalance" name="account-balance" id="account-balance"
                class="block w-full rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
            </div>
          </div>
        </div>
        <div class="flex  justify-between items-center px-4 py-4">
          <button type="button" @click="showEditModal = false"
            class="rounded-md w-full bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" :disabled="processing" 
            class="ml-4 w-full disabled:cursor-not-allowed disabled:opacity-25 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{ processing ? "editing..." : "Save" }}
          </button>
        </div>
      </form>
    </section>
   </CoreModal>
</main>
</template>

<script setup lang="ts">
import { useCurrency } from '@/composables/core/useCurrency';
import { formatDate } from '@/composables/core/useDateFormatter';
import { useUsers } from '@/composables/fetchUsers'
import { useUpdateAdminUser } from '@/composables/updateUserFromAdmin'
const { updateAdminUser, processing, payload, setPayload } = useUpdateAdminUser()
const {  usersList, loading} = useUsers()
import Swal from "sweetalert2";
const { formatToDollar } = useCurrency();
definePageMeta({
  layout: "admin-dashboard"
});

const showEditModal = ref(false)
const selectedUser = ref({})

const handleEditUer = (user: any) => {
  showEditModal.value = true;
  selectedUser.value = user;
  payload.value = user;
};

const closeModal = () => {
  showEditModal.value = false
}

const proceedToEditUser = () => {
  console.log(selectedUser.value.id, 'Herepooooooooo', payload)
  const payloadObj = {
    name: payload?.value?.name,
    email: payload?.value?.email,
    profit: payload?.value?.profit,
    tradingBalance: payload?.value?.tradingBalance,
    accountBalance: payload?.value?.accountBalance
  }

  setPayload(payloadObj)
  updateAdminUser(selectedUser.value.id).then((data) => {
    showEditModal.value = false
  })
}

</script>