import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useAdminStats() {
  const loading = ref(false)
  const adminStats = ref(null)
  const { token } = useUser()

  const fetchAdminStats = async () => {
    loading.value = true
    const query = `
      query {
        getAdminStats {
          totalProfit
          totalWithdrawal
          totalUsers
          totalDeposits
          accountBalance
          tradingBalance
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
        adminStats.value = data.data.getAdminStats
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchAdminStats()
  })

  return {
    loading,
    adminStats,
    fetchAdminStats
  }
}
