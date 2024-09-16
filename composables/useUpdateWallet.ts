import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useUpdateWallet() {
  const processing = ref(false)
  const { token } = useUser()

  const updateWallet = async (userId: any,  walletInput: { btc?: string, eth?: string }) => {
    processing.value = true
    const updateUserMutation = `
      mutation updateUser($userId: String!, $input: UpdateUser!) {
        updateUser(userId: $userId, input: $input) {
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
            query: updateUserMutation,
            variables: {
              userId,
              input: walletInput
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        console.log('Wallet address was successfully updated')
      }
    } finally {
      processing.value = false
    }
  }

  return {
    processing,
    updateWallet
  }
}
