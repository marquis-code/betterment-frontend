<!-- <template>
<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-10 w-auto" src="@/assets/icons/ecommerce-logo.svg" alt="Your Company">
    <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form @submit.prevent="handleRegister" class="space-y-6" action="#" method="POST">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-[#0D0C22]">Username</label>
          <div class="mt-2">
            <input v-model="registerPayload.username" placeholder="Enter Username" id="username" name="username" type="text"
              class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none ">
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-[#0D0C22]">Email</label>
          <CoreEmailInput @completed="handleEmail" />
      </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-[#0D0C22]">Password</label>
          <div class="mt-0.5 relative">
              <input name="password" id="password" :type="showPassword ? 'text' : 'password'"  v-model="registerPayload.password"
                  class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                  placeholder="Enter your password">
              <img :src="eye" @click="togglePasswordVisibility" alt="" class="absolute right-4 top-4 h-6 w-6 cursor-pointer" />
          </div>
      </div>

        <div>
          <button :disabled="!isFormEmpty || loading" type="submit" class="flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm">
            {{ loading ? 'processing...' : 'Sign Up' }}
          </button>
        </div>
      </form>
    </div>

    <p class="mt-10 text-center text-sm text-gray-500">
      Already have an account?
      <NuxtLink to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</NuxtLink>
    </p>
  </div>
</div>

</template>

<script setup lang="ts">
import { useRegister } from "@/composables/auth/register";
import eyeOpen from "@/assets/icons/eye-open.svg";
import eyeClose from "@/assets/icons/eye-close.svg";
const { registerPayload, handleRegister, loading, isFormEmpty } = useRegister();

const showPassword = ref(false);

const eye = computed(() => {
  return !showPassword.value ? eyeClose : eyeOpen;
});

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleEmail = (email: string) => {
    registerPayload.value.email = email
}
</script> -->

<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div class="flex flex-col p-6 bg-white">
            <h1 class="text-2xl font-semibold mb-4">How do you want to get started?</h1>
            <p class="mb-4 text-gray-700">It’s easy—opening your account takes as little as 3 minutes.</p>

            <!-- Accounts Section -->
            <div class="space-y-2 mb-6">
                <div v-for="item in accountOptions" :key="item.title"
                    class="p-4 cursor-pointer border-b border-gray-100" @click="handleNavigation(item)">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="icon-placeholder mr-4 rounded-sm">{{ item.icon }}</span>
                            <div>
                                <p class="font-medium text-sm">{{ item.title }}</p>
                                <p class="text-sm text-gray-600">{{ item.description }}</p>
                            </div>
                        </div>
                        <span class="icon-placeholder">></span>
                    </div>
                </div>
            </div>

            <!-- Services Section -->
            <div class="space-y-2 mb-6">
                <h2 class="text-lg font-semibold mb-2">Services</h2>
                <div v-for="service in services" :key="service.title"
                    class="p-4 cursor-pointer border-b border-gray-100" @click="handleNavigation(service)">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="icon-placeholder mr-4">{{ service.icon }}</span>
                            <p class="font-medium">{{ service.title }}</p>
                        </div>
                        <span class="icon-placeholder">></span>
                    </div>
                </div>
            </div>

            <!-- Employee Sponsored Benefits -->
            <div class="space-y-2">
                <h2 class="text-lg font-semibold mb-2">Employee sponsored benefits</h2>
                <div v-for="benefit in benefits" :key="benefit.title"
                    class="p-4 cursor-pointer border-b border-gray-100" @click="handleNavigation(benefit)">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="icon-placeholder mr-4">{{ benefit.icon }}</span>
                            <p class="font-medium">{{ benefit.title }}</p>
                        </div>
                        <span class="icon-placeholder">></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const accountOptions = ref([
    { icon: '💰', title: 'High-yield cash', description: 'Grow your savings with 5.00% APY* (variable)' },
    { icon: '🏦', title: 'Bond investing', description: 'Invest in a 100% bond portfolio' },
    { icon: '📈', title: 'Investing', description: 'Invest with expert-built stock and bond portfolios' },
    { icon: '🌞', title: 'IRA', description: 'Invest for retirement with a traditional, Roth, or SEP IRA' },
    { icon: '🔐', title: 'Crypto investing', description: 'Invest with managed crypto portfolios' },
    { icon: '🏧', title: 'Checking', description: 'Pay bills and earn cash back' }
])

const services = ref([
    { icon: '🔧', title: 'Talk to an advisor', description: 'Connect with our financial experts for hands-on guidance' },
    { icon: '📋', title: 'Get a recommendation', description: 'Take our quiz and we’ll help guide you' }
])

const benefits = ref([
    { icon: '🔒', title: 'Claim your Betterment 401(k)', description: 'Does your employer offer a 401(k) or other benefits through Betterment? Start here' }
])

definePageMeta({
    layout: 'auth-with-logo-only'
})

const handleNavigation = (item: any) => {
    const titleKey = item.title.split(' ').join('_')
    router.push(`/signup/${titleKey}`)
}
</script>

<style scoped>
.icon-placeholder {
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    /* Adjust the size as needed */
}
</style>