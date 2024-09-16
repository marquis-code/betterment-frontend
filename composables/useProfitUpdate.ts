import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useProfitUpdate() {
  const processingProfitUpdate = ref(false)
  const updateProfitStatus = ref(null)
  const { token } = useUser()

  const handleProfitUpdate = async () => {
    processingProfitUpdate.value = true
    const accessToken = JSON.parse(localStorage.getItem('auth') || '')

    const mutation = `
      mutation {
        updateProfits
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
          query: mutation
        })
      })
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        updateProfitStatus.value = data.data.updateProfits
      }
    } finally {
      processingProfitUpdate.value = false
    }
  }

  return {
    processingProfitUpdate,
    updateProfitStatus,
    handleProfitUpdate
  }
}
