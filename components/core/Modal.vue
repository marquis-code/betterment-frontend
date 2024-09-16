<template>
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-10"
      @click.self="closeModal"
    >
      <slot />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { dynamicIcons } from '@/utils/assets';
  import { ref } from 'vue';
  import { defineProps, defineEmits } from 'vue';
  
  // Props for controlling the modal's visibility
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });
  
  // Emit event to close the modal
  const emit = defineEmits(['close']);
  
  // Close modal function
  const closeModal = () => {
    emit('close');
  };
  </script>
  