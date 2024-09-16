import { ref } from 'vue'
import { useUser } from '@/composables/user'


export function useUpdateAdmin() {
  const { user, token } = useUser()
  const payload = ref({}) as any
  const processing = ref(false)

  const updateAdmin = async (userId: any, payload: any) => {
    processing.value = true

    const { id, Status, timeAdded, PlanType, ...remainingData } = payload.value;

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
              input: remainingData
            }
          })
        }
      )
      const data = await response.json()
      console.log(data, 'datta jere')
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

  return {
    processing,
    updateAdmin,
    payload
  }
}
