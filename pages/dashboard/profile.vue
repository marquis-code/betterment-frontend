<template>
  <main
    class="lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0"
  >
    <section class="bg-white lg:w-5/12 rounded-md border">
      <p class="border-b pl-6 py-4 text-sm font-semibold">
        Keep Your Profile Up-To-Date
      </p>
      <form class="p-10 space-y-6" @submit.prevent="handleUserUpdate">
        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Name</label>
          <input
            v-model="updatedUserData.name"
            type="text"
            class="py-2 border rounded-md w-full outline-none pl-6"
          />
          <span class="text-xs text-gray-500"
            >We'll never share your details with anyone else</span
          >
        </div>

        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium"
            >Email address:</label
          >
          <input
            v-model="updatedUserData.email"
            type="email"
            class="py-2 border rounded-md w-full outline-none pl-6"
          />
          <span class="text-xs text-gray-500"
            >We'll never share your details with anyone else</span
          >
        </div>

        <div class="space-y-1">
          <label class="text-xs text-gray-700 font-medium">Password:</label>
          <input
            v-model="updatedUserData.password"
            type="password"
            class="py-2 border rounded-md w-full outline-none pl-6"
          />
          <span class="text-xs text-gray-500"
            >We'll never share your details with anyone else</span
          >
        </div>
        <div class="w-full">
          <button
            type="submit"
            :disabled="processing"
            :class="[processing ? 'opacity-25 cursor-not-allowed' : null]"
            class="bg-green-500 w-full disabled:cursor-not-allowed disabled:opacity-25 text-white rounded-lg px-6 py-3 text-sm"
          >
            {{ processing ? "processing..." : "Update" }}
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts" setup>
  import { ref, computed, watch } from 'vue'
  import { useUpdateUser } from '@/composables/useUpdateUser'
  import { useUserInfo } from '@/composables/useUserInfo'

  const { processing, updateUser } = useUpdateUser()
  const { loading, userData } = useUserInfo()

  const updatedUserData = ref({
    name: '',
    email: '',
    password: '',
  });

  // Watch for changes in userData and update updatedUserData accordingly
  watch(userData, (newValue) => {
    if (newValue) {
      updatedUserData.value = {
        name: newValue.name,
        email: newValue.email,
        password: '', // You might want to keep this empty for security reasons
      };
    }
  }, { immediate: true });

  // Computed properties for validation
  // const isFormValid = computed(() => {
  //   return (
  //     updatedUserData.value.name &&
  //     validEmail.value &&
  //     updatedUserData.value.password.length >= 8
  //   );
  // });

  const handleUserUpdate = () => {
    if(userData.value){
    updateUser(userData.value.id, updatedUserData.value)
    }
  }

  const validEmail = computed(() => {
    const re = /\S+@\S+\.\S+/;
    return re.test(updatedUserData.value.email);
  });

  definePageMeta({
    layout: "dashboard",
    // middleware: "authenticated",
  });
</script>
