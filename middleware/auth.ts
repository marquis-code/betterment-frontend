// middleware/auth.ts
import { useUser } from '@/composables/user'
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
   const { user, token } = useUser()
  if (!token) {
    return navigateTo('/login');
  }
});
