<template>
    <section class="grid place-content-center h-screen">
        <div class="flex justify-center items-center space-y-6 flex-col gap-y-3">
          <img src="@/assets/icons/airplane.svg" class="h-10 w-10" alt="">
          <p class="">
            Reset password token has been sent to your email.
          </p>
          <NuxtLink to="/reset" class="bg-black text-white px-6 py-3 rounded-md tetx-sm">Proceed to reset</NuxtLink>
        </div>
      </section>
</template>

<script setup lang="ts">
definePageMeta({
        layout: 'auth'
    })
    
</script>

<style></style>
