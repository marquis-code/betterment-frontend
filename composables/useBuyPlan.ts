import { ref } from 'vue'
import { useUser } from '@/composables/user'

export function useBuyPlan() {
  const processing = ref(false)

  const buyPlan = async (form: { amount: string, plan: string }) => {
    processing.value = true
    const { token } = useUser()

    const buyPlanMutation = `
      mutation {
        buyPlan(amount: ${form.amount}, planType: "${form.plan}")
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
            query: buyPlanMutation,
            variables: {
              amount: form.amount,
              planType: form.plan
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        console.log('You have successfully purchased a plan')
        form.amount = ''
        form.plan = ''
      }
    } finally {
      processing.value = false
    }
  }

  return {
    processing,
    buyPlan
  }
}
