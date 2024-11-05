import { ref } from 'vue'
import { useUser } from '@/composables/user'


export function useUpdateUser() {
  const { user, token } = useUser()
  const payload = ref({}) as any
  const processing = ref(false)

  const updateUser = async (userId: any, payload: any) => {
    processing.value = true

    // const { id, Status, timeAdded, PlanType, ...remainingData } = payload.value;

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
              userId: userId,
              input: payload
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors?.length) {
        useNuxtApp().$toast.success('Something went wrong', {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } 

      if(data.data) {
        useNuxtApp().$toast.success('User status was updated successfully', {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    } finally {
      processing.value = false
    }
  }

  const setPayload = (data) => {
     payload.value.name = data.name
     payload.value.email = data.email
     payload.value.profit = data.profit
     payload.value.tradingBalance = data.tradingBalance
     payload.value.accountBalance = data.accountBalance
  }

  return {
    processing,
    updateUser,
    payload,
    setPayload
  }
}
