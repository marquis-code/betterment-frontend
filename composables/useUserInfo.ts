import { ref } from 'vue'
import { useUser } from '@/composables/user'
const { token } = useUser()

export function useUserInfo() {
  const loading = ref(false)
  const userData = ref(null)

  const getUserInfo = async () => {
    loading.value = true
    const query = `
      query {
        getUser {
          id
          name
          email
          Status
          PlanType
          accountBalance
          tradingBalance
          profit
          role
          eth
          btc
          timeAdded
        }
      }
    `

    try {
      const response = await fetch('https://clone-better.onrender.com/graphql/query', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token.value}`
        },
        body: JSON.stringify({
          query
        })
      })
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        userData.value = data.data.getUser
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    getUserInfo()
  })

  return {
    loading,
    userData,
    getUserInfo
  }
}
