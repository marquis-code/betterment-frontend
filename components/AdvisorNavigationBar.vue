<template>
    <main class="sticky top-0">
        <header class="bg-gradient-navy">
            <div class="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
              <a class="block text-teal-600" href="#">
                <span class="sr-only">Home</span>
                <img class="h-20 w-auto" src="@/assets/img/betterment-advisor.png" alt="">
                </a>
              <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                  <ul class="flex items-center gap-6 text-sm">
                    <li>
                      <a class="text-white transition hover:text-white/75" href="#">What we offer</a>
                    </li>
          
                    <li>
                      <a class="text-white transition hover:text-white/75" href="#"> How we serve </a>
                    </li>
          
                    <li>
                      <a class="text-white transition hover:text-white/75" href="#"> Resources </a>
                    </li>
                  </ul>
                </nav>
          
                <div class="flex items-center gap-4">
                  <div class="sm:flex sm:gap-4">
                    <a
                      class="block rounded-md text-white  px-5 py-2.5 text-sm font-medium transition"
                      href="#"
                    >
                      Login
                    </a>
          
                    <a
                      class="hidden rounded-md text-white px-5 py-2.5 text-sm font-medium bg-blue-600 transition sm:block"
                      href="#"
                    >
                      Book a demo
                    </a>
                  </div>
          
                  <button
                    class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                  >
                    <span class="sr-only">Toggle menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
    </main>
    </template>
    
    <script setup lang="ts">
    import { useLogin } from '@/composables/useLogin'
    const { user, isLoggedIn, logOut, } = useLogin()
    const isMobileNav = ref(false)
    const router = useRouter()
    </script>
    
    <style>
    .bg-gradient-navy {
        background: linear-gradient(180deg, #000b50, #1b2a89 50%);
    }
    </style>
    