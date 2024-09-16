import { ref } from 'vue'
import { useUser } from '@/composables/user'
export function useUsers() {
  const { $toast } = useNuxtApp();
  const loading = ref(false)
  const usersList = ref([])
  const { token } = useUser()

  const fetchUsers = async () => {
    loading.value = true
    const query = `
      query {
        getUsers {
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
        console.error(data.errors[0].message)
      } else {
        usersList.value = data.data.getUsers
      }
    } catch(error){
       console.log(error, 'caught error')
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchUsers()
  })

  return {
    loading,
    usersList,
    fetchUsers
  }
}
