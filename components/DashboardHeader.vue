<template>
    <div class="bg-white shadow">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div class="min-w-0 flex-1">
              <!-- Profile -->
              <div class="flex items-center">
                <img class="hidden h-14 w-14 rounded-full sm:block"
                  src="@/assets/icons/coloured-avatar.svg"
                  alt="">
                <div>
                  <div class="flex items-center">
                    <img class="h-14 w-14 rounded-full border-4 sm:hidden"
                    src="@/assets/icons/coloured-avatar.svg"
                      alt="">
                    <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">{{ greeting }}, {{user.username || 'Nil'}}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/login'
import { useGreeting } from '@/composables/core/useGreeting';
const { getGreeting } = useGreeting();
const greeting = getGreeting();
const { user } = useLogin()
</script>
