import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/composables/user'

const form = ref({
  email: '',
  password: ''
})

export function useLogin() {
  const { $toast } = useNuxtApp()
  const { createUser } = useUser()
  const processing = ref(false)
  const router = useRouter()

  const handleLogin = async () => {
    processing.value = true
    const loginMutation = `
      mutation {
        userLogin(email: "${form.value.email}", password: "${form.value.password}") {
          jwt
          user {
            id
            name
            email
            Status
            PlanType
            accountBalance
            tradingBalance
            eth
            btc
            timeAdded
          }
        }
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
            query: loginMutation,
            variables: {
              email: form.value.email,
              password: form.value.password
            }
          })
        }
      )
      const data = await response.json()

      if (data?.errors) {
        $toast(data.errors[0].message, {
          theme: "auto",
          type: "error",
          dangerouslyHTMLString: true
        })
      } else {
        console.log(data.data.userLogin)
        createUser(data.data.userLogin)
        $toast('Login success', {
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true
        })
        router.push('/dashboard')
      }
    } catch(error){
      $toast(data.errors[0].message, {
        theme: "auto",
        type: "error",
        dangerouslyHTMLString: true
      })
    } finally {
      processing.value = false
    }
  }

  return {
    processing,
    handleLogin,
    form
  }
}
