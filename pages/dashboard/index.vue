<template>
  <main>
    <Product class="px-4 sm:px-6 lg:px-8" />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "authenticated",
});
</script>
