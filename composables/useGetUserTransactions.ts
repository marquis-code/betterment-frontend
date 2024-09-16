import { ref } from 'vue'
import { useUser } from '@/composables/user'

const transactionsList = ref([]) as any

export function useUserTransactions() {
    const { token } = useUser()
  const loading = ref(false)

  const fetchUserTransactions = async () => {
    loading.value = true
    const query = `
    query {
      getUsersTransactions {
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
        transactionsList.value = data?.data?.getUsersTransactions
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchUserTransactions()
  })


     // Computed property to calculate total deposits
     const totalDeposits = computed(() => {
      return transactionsList.value
        .filter((transaction) => transaction.transactionType === 'Deposit' && transaction.transactionStatus === 'Approved')
        .reduce((total, transaction) => total + transaction.amount, 0);
    });
  
    // Computed property to calculate total withdrawals
    const totalWithdrawals = computed(() => {
      return transactionsList.value
        .filter((transaction) => transaction.transactionType === 'Withdrawal' && transaction.transactionStatus === 'Approved')
        .reduce((total, transaction) => total + transaction.amount, 0);
    });
  
    // Computed property to calculate total account balance
    const totalAccountBalance = computed(() => {
      return totalDeposits.value - totalWithdrawals.value;
    });
  
    // Computed property to get deposit transactions
    const depositTransactions = computed(() => {
      return transactionsList.value.filter(
        (transaction) => transaction.transactionType === 'Deposit'
      );
    });
  
    // Computed property to get withdrawal transactions
    const withdrawalTransactions = computed(() => {
      return transactionsList.value.filter(
        (transaction) => transaction.transactionType === 'Withdrawal'
      );
    });

  return {
    loading,
    transactionsList,
    fetchUserTransactions,
    totalAccountBalance,
    depositTransactions,
    withdrawalTransactions,
    totalDeposits,
    totalWithdrawals
  }
}
