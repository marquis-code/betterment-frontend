<template>
    <div class="relative">
      <input
        type="email"
        v-model="email"
        @input="onInput"
        placeholder="Enter your email"
        :class="emailInputClass"
        class="block w-full rounded-md border p-3 py-3.5 text-gray-900 placeholder:text-gray-400 placeholder:font-light outline-none"
      />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg v-if="!isValid && email" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
        <svg v-if="isValid && email" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>
      <p v-if="email && !isValid" class="mt-0.5 text-sm text-red-600">Invalid email address</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useEmailValidation } from '@/composables/core/useEmailValidation';
  const emit = defineEmits(['completed'])
  const {
    email,
    isValid,
    validateEmail,
    emailInputClass,
  } = useEmailValidation();
  
  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    email.value = target.value;
    validateEmail();
    emit('completed', email.value)

  };
  </script>