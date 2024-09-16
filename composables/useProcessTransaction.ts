import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useProcessTransaction() {
  const processing = ref(false)
  const { token } = useUser()

  const processTransaction = async (transactionId: string, status: string) => {
    processing.value = true

    const statusType = status === 'approve' ? 'Approved' : status === 'reject' ? 'Declined' : 'Pending'

    const processTransactionQuery = `
      mutation ProcessTransaction($transactionID: String!, $status: TransactionStatus!) {
        processTransaction(transactionID: $transactionID, status: $status)
      }
    `

    try {
      const response = await fetch(
        'https://clone-better.onrender.com/graphql/query', // Add your API endpoint here
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token.value}`
          },
          body: JSON.stringify({
            query: processTransactionQuery,
            variables: {
              transactionID: transactionId,
              status: statusType
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        console.log(`You have successfully ${status === 'approve' ? 'Approved' : 'Rejected'} this transaction.`)
      }
    } finally {
      processing.value = false
    }
  }

  return {
    processing,
    processTransaction
  }
}
