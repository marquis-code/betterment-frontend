import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/composables/user'

const form = ref({ amount: '', wallet: '', proof: '', type: '' })

export function useTransaction() {
  const processing = ref(false)
  const { token } = useUser()

  const handleTransaction = async () => {
    processing.value = true
    try {
      const transactionMutation = `
        mutation newTransaction($input: NewTransaction!) {
          newTransaction(input: $input)
        }
      `

      const response = await fetch(
        'https://clone-better.onrender.com/graphql/query', // Add your API endpoint here
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token.value}`
          },
          body: JSON.stringify({
            query: transactionMutation,
            variables: {
              input:  computedPayload.value
            }
          })
        }
      )
      const data = await response.json()
      if (data?.errors) {
        console.error(data.errors[0].message)
      } else {
        form.value.amount = ''
        form.value.wallet = ''
        console.log('You have successfully initiated a withdrawal')
      }
    } finally {
      processing.value = false
    }
  }
  
  const setFormData = (data) => {
      form.value.amount = data.amount
      form.value.proof = data.proof
      form.value.wallet = data.wallet
      form.value.type = data.type
  }

  const computedPayload = computed(() => {
    if(form.value.type === 'Withdrawal'){
      return { amount: form.value.amount, wallet: form.value.wallet, transactionType: form.value.type}
    }

    if(form.value.type === 'Deposit'){
      return { amount: form.value.amount, wallet: form.value.wallet, transactionType: form.value.type, proof: form.value.proof}
    }
  })

  return {
    processing,
    handleTransaction,
    form,
    setFormData
  }
}
