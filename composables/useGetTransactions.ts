import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useTransactions() {
  const loading = ref(false)
  const transactionsList = ref([])

  const { token } = useUser()

  const fetchTransactions = async () => {
    loading.value = true

    const query = `
      query {
        getTransactions {
          id
          amount
          wallet
          transactionType
          transactionStatus
          user {
            id
            name
            email
            Status
            PlanType
            accountBalance
            tradingBalance
            profit
            eth
            btc
            timeAdded
          }
          proof
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
        transactionsList.value = data.data.getTransactions
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    console.log('herro')
    fetchTransactions()
  })

  return {
    loading,
    transactionsList,
    fetchTransactions
  }
}
