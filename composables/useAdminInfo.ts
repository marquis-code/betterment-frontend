import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useAdminInfo() {
  const loadingAdminInfo = ref(false)
  const adminData = ref(null)
  const { token } = useUser()

  const getAdminInfo = async () => {
    loadingAdminInfo.value = true
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
          eth
          btc
          profit
          timeAdded
          admin {
            name
            email
            btc
            eth
          }
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
        adminData.value = data.data.getUser
      }
    } finally {
      loadingAdminInfo.value = false
    }
  }

  onMounted(() => {
    getAdminInfo()
  })

  return {
    loadingAdminInfo,
    adminData,
    getAdminInfo
  }
}
