import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useSignup() {
  const { $toast } = useNuxtApp()
  const loading = ref(false)
  const router = useRouter()

  const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  })

  const handleSignup = async () => {
    loading.value = true
    try {
      const signupMutation = `
        mutation newUser($input: NewUser!) {
          newUser(input: $input) {
                jwt
          }
        }
      `
      const response = await fetch(
        'https://clone-better.onrender.com/graphql/query', // Add your API endpoint here
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            query: signupMutation,
            variables: {
              input: {
                name: `${form.value.first_name} ${form.value.last_name}`,
                phoneNumber: form.value.phone,
                email: form.value.email,
                password: form.value.password
              }
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        $toast(data.errors[0].message, {
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true
        })
      } else {
        $toast('Signup success', {
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true
        })
        router.push('/login')
      }
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    handleSignup,
    form
  }
}
