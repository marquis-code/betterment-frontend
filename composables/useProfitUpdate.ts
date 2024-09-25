import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useProfitUpdate() {
  const { token } = useUser()
  const processingProfitUpdate = ref(false)
  const updateProfitStatus = ref(null)


  const handleProfitUpdate = async () => {
    processingProfitUpdate.value = true

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
