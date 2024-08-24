<template>
  <main>
    <div class="min-h-full">
      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true" v-if="openSidebar">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

        <div class="fixed inset-0 z-40 flex">
          <div class="relative flex w-full  flex-1 flex-col bg-black pb-4 pt-5">
            <div class="absolute right-0 top-0 -mr-12 pt-2">
              <button type="button" @click="openSidebar = false"
                class="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Close sidebar</span>
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex flex-shrink-0 items-center px-4">
              <img class="h-20 w-auto" src="@/assets/img/logo.png" alt="Easywire logo">
            </div>
            <nav class="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
              <div class="space-y-2.5 px-2">
                <NuxtLink v-for="(itm, idx) in navigationList" :key="idx" :to="itm.path"
                  @click.prevent="openSidebar = false"
                  class="bg-[#034091] text-white group flex items-center rounded-md px-2 py-2 text-base font-medium"
                  aria-current="page">
                  <img :src="itm.icon" alt="icon" class="h-7 w-7 pr-2" />
                  {{ itm.name }}
                </NuxtLink>
              </div>
              <div class="p-3">
                <a href="#" @click.prevent="logOut"
                  class="group flex bg-red-400 text-white items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium leading-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
                    stroke="#d0021b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                  </svg>
                  Logout
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>


      <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div class="flex flex-grow flex-col overflow-y-auto bg-black pb-4 pt-5">
          <div class="flex flex-shrink-0 items-center px-4">
            <img class="h-8 w-auto" src="@/assets/icons/ecommerce-logo.svg" alt="Easywire logo">
          </div>
          <nav class="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
            <div class="space-y-2.5 px-2">
              <NuxtLink v-for="(itm, idx) in navigationList" :key="idx" :to="itm.path"
                @click.prevent="openSidebar = false"
                class="text-white group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6"
                aria-current="page">
                <img :src="itm.icon" class="h-7 w-7 pr-2" alt="icon" />
                {{ itm.name }}
              </NuxtLink>
            </div>
          </nav>
          <div class="p-3">
            <a href="#" @click.prevent="logOut"
              class="group flex bg-red-400 text-white items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium leading-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
                stroke="#d0021b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
              </svg>
              Logout
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-1 flex-col lg:pl-64">
        <div class="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
          <button type="button" @click="openSidebar = true"
            class="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden">
            <span class="sr-only">Open sidebar</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
          </button>
          <!-- Search bar -->
          <div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
            <div class="flex flex-1">
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <div class="relative ml-3">
                <div>
                  <button type="button"
                    class="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5 lg:hidden"></span>
                    <img class="h-8 w-8 rounded-full"
                      src="@/assets/icons/coloured-avatar.svg"
                      alt="">
                    <span class="ml-3 hidden text-sm font-medium text-gray-700 lg:block"><span class="sr-only">Open user
                        menu for </span>{{user.username || 'Nil'}}</span>
                    <svg class="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block" viewBox="0 0 20 20"
                      fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main class="flex-1 pb-8  w-full">
          <DashboardHeader />

          <slot />
        </main>
      </div>
    </div>
    <CoreChatbotIcon />
  </main>
</template>

<script setup lang="ts">
import dashboard from '@/assets/icons/dashboard.svg'

import { useLogin } from '@/composables/auth/login'
const { logOut, user } = useLogin()
const openSidebar = ref(false)

const navigationList = ref([
  {
    icon: dashboard,
    path: '/dashboard',
    name: 'Dashboard',
  },
])
</script>

<style scoped>
.router-link-exact-active {
  background-color: #0ba9b9;
  color: white
}
</style>