import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useResetPassword() {
  const processing = ref(false)
  const router = useRouter()

  const resetPassword = async (form: { email: string, password: string, resetCode: string }) => {
    processing.value = true
    const resetPasswordMutation = `
      mutation resetPassword($email: String!, $newPassword: String!, $resetCode: String!) {
        resetPassword(email: $email, newPassword: $newPassword, resetCode: $resetCode)
      }
    `
    try {
      const response = await fetch(
        'https://clone-better.onrender.com/graphql/query', // Add your API endpoint here
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            query: resetPasswordMutation,
            variables: {
              email: form.email,
              newPassword: form.password,
              resetCode: form.resetCode
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        localStorage.removeItem('user-email')
        router.push('/login')
        window.location.href = "/login"
      }
    } finally {
      processing.value = false
    }
  }

  return {
    processing,
    resetPassword
  }
}
