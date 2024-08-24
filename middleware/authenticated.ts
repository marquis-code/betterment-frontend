import { useLogin } from '@/composables/auth/login'
import { navigateTo } from '#app';
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Auth middleware triggered');
    const { isLoggedIn }  = useLogin()
    console.log(isLoggedIn, 'here')
  
    if (!isLoggedIn.value && to.path !== '/login') {
      return navigateTo('/login');
    }
  });