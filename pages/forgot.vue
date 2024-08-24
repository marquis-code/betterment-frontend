<template>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[580px]">
        <img class="h-10 w-auto pl-9" src="@/assets/img/logo.png" alt="Your Company">
        <div class="bg-white px-6 py-12 sm:px-12 space-y-5">
           <div class="space-y-3">
            <h3 class="text-gray-800 text-xl font-semibold">Forgot your password?</h3>
            <p class="text-sm text-gray-700">If you forgot your password, please enter the email address associated with your account to reset your password.</p>
           </div>
          <form @submit.prevent="handleLogin" class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-[#0D0C22]">Email</label>
              <CoreEmailInput @completed="handleEmail" />
          </div>

            <div>
              <button :disabled="!isFormEmpty || loading" type="submit" class="flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm">
                {{ loading ? 'processing...' : 'Send reset email' }}
              </button>
            </div>
          </form>
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
    