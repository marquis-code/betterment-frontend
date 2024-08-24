<template>
<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[580px]">
    <img class="h-10 w-auto pl-9" src="@/assets/img/logo.png" alt="Your Company">
    <div class="bg-white px-6 py-12 sm:px-12">
      <form @submit.prevent="handleLogin" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-[#0D0C22]">Email</label>
          <CoreEmailInput @completed="handleEmail" />
      </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-[#0D0C22]">Password</label>
          <div class="mt-0.5 relative">
              <input name="password" id="password" :type="showPassword ? 'text' : 'password'"  v-model="loginPayload.password"
                  class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                  placeholder="Enter your password">
              <img :src="eye" @click="togglePasswordVisibility" alt="" class="absolute right-4 top-4 h-6 w-6 cursor-pointer" />
          </div>
      </div>

        <div>
          <button :disabled="!isFormEmpty || loading" type="submit" class="flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm">
            {{ loading ? 'processing...' : 'Login' }}
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500 flex justify-between items-center">
        <NuxtLink to="/s" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Forgot password?</NuxtLink>
        <NuxtLink to="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</NuxtLink>
      </p>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { useLogin } from "@/composables/auth/login";
import eyeOpen from "@/assets/icons/eye-open.svg";
import eyeClose from "@/assets/icons/eye-close.svg";
const { handleLogin, loginPayload, loading, isFormEmpty } = useLogin();
const showPassword = ref(false);

const eye = computed(() => {
  return !showPassword.value ? eyeClose : eyeOpen;
});

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleEmail = (email: string) => {
  loginPayload.value.email = email
}

definePageMeta({
    layout: 'auth'
})
</script>
