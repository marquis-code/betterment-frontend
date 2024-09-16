import { ref } from 'vue'

export function useForgotPassword() {
  const processing = ref(false)
  const tokenSent = ref(false)
  const router = useRouter()

  const handleForgetPassword = async (email: string) => {
    processing.value = true
    const resetPasswordMutation = `
      mutation SendResetPasswordCode($email: String!) {
        sendResetPasswordCode(email: $email)
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
              email
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        tokenSent.value = true
        router.push('/forgot-password-success')
        localStorage.setItem('user-email', email)
      }
    } finally {
      processing.value = false
    }
  }

  return {
    processing,
    tokenSent,
    handleForgetPassword
  }
}
