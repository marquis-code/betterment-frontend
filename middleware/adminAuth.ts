// middleware/adminAuth.ts
import { useUser } from '@/composables/user'
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
    const { user } = useUser()
  if (!user.value.isAuthenticated || !user.value.isAdmin) {
    return navigateTo('/admin/login');
  }
});
