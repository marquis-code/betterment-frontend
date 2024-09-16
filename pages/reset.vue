<template>
  <div class=" h-screen">
    <section
      class=" flex justify-center items-center pt-20 container mx-auto"
    >
      <div class="w-full max-w-md p-8 space-y-6 rounded-xl bg-white">
        <img class="h-10 w-auto pl-9" src="@/assets/img/logo.png" alt="Your Company">
        <h1 class="text-3xl font-bold">Almost Done!</h1>
        <p class="text-gray-500 text-sm leading-loose">
          Please enter your reset password token and your new password.
        </p>
        <form class="space-y-10" @submit.prevent="handlePasswordReset">
          <div class="space-y-1 text-sm w-full">
            <label for="token" class="block text-gray-900 font-medium"
              >Token</label
            >
            <input
              id="token"
              v-model="form.resetCode"
              type="tel"
              name="token"
              placeholder="email"
              class="border w-full outline-none px-4 py-3 rounded-md border-gray-900 text-gray-900"
            />
          </div>
          <div class="space-y-1 text-sm w-full">
            <label for="password" class="block text-gray-900 font-medium"
              >New Password</label
            >
            <input
              id="password"
              v-model="form.password"
              type="password"
              name="password"
              placeholder="password"
              class="border w-full outline-none px-4 py-3 rounded-md border-gray-900 text-gray-900"
            />
          </div>
          <div class="w-full">
            <button
              :disabled="!isFormEmpty"
              :class="[
                !isFormEmpty || processing
                  ? 'opacity-25 cursor-not-allowed'
                  : '',
              ]"
              class="w-full shrink-0 text-xs disabled:cursor-not-allowed disabled:opacity-25 rounded-md border border-green-500 bg-green-600 px-12 py-3 font-medium text-white transition"
            >
              {{ processing ? "processing..." : "Submit" }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useResetPassword } from '@/composables/useResetPassword'
const {   processing,
    resetPassword } = useResetPassword()
const user = ref('');
const form = ref({
  resetCode: "",
  email: "",
  password: "",
});

const isFormEmpty = computed(() => {
  return !!(form.value.password && form.value.resetCode);
});

const handlePasswordReset = () => {
    resetPassword(form.value)
}

onMounted(() => {
  user.value = JSON.parse(window.localStorage.getItem("user-email"));
});


definePageMeta({
        layout: 'auth'
    })

</script>

<style></style>
