import { ref } from 'vue'
import { useUser } from '@/composables/user'
export function useTransactionHistory() {
  const loading = ref(false)
  const { token } = useUser()
  const transactionsList = ref([]) as any
  const { $toast } = useNuxtApp();
  
  const fetchTransactionHistory = async () => {
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
        $toast(data.errors[0].message, {
          theme: "auto",
          type: "error",
          dangerouslyHTMLString: true
        });
      } else {
        transactionsList.value = data.data.getTransactions
      }
    } finally {
      loading.value = false
    }
  }

   // Computed property to calculate total deposits
   const totalDeposits = computed(() => {
    return transactionsList.value
      .filter((transaction) => transaction.transactionType === 'Deposit')
      .reduce((total, transaction) => total + transaction.amount, 0);
  });

  // Computed property to calculate total withdrawals
  const totalWithdrawals = computed(() => {
    return transactionsList.value
      .filter((transaction) => transaction.transactionType === 'Withdrawal')
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
   if(transactionsList.value.length){
    return transactionsList.value.filter(
      (transaction) => transaction.transactionType === 'Withdrawal'
    );
   }
  });


  onMounted(() => {
    fetchTransactionHistory()
  })

  return {
    loading,
    transactionsList,
    fetchTransactionHistory,
    totalAccountBalance,
    depositTransactions,
    withdrawalTransactions,
    totalDeposits,
    totalWithdrawals
  }
}
