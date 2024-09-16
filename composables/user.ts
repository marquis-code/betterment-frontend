import { ref, computed } from '@vue/reactivity'
import { useStorage } from '@vueuse/core'

const runtimeData = {
	user: ref({} as any),
	token: ref('')
}
const localStorageData = {
	user: useStorage('user', {} as any),
	token: useStorage('token', '')
}
watch(runtimeData.user, (val) => {
	Object.keys(val).forEach((key) => {
		localStorageData.user.value[key] = val[key]
	})
}, { deep: true });

(() => {
	runtimeData.user.value = localStorageData.user.value
	runtimeData.token.value = localStorageData.token.value
})()

export const useUser = () => {
	const isLoggedIn = computed({
		get: () => {
			if (!runtimeData.token?.value) return false
			return runtimeData?.user?.value != null || undefined || {}
		},
		set: () => { }
	})
	const logOut = () => {
		localStorage.clear()
		runtimeData.user.value = null
		location.href = '/auth/login'
	}
	const setToken = (token: string) => {
		runtimeData.token.value = token
		localStorageData.token.value = token
	}
	const createUser = (data: any) => {
		console.log(data, 'data from user composable')
		runtimeData.user.value = data?.user
		localStorageData.user.value = data?.user
		localStorageData.token.value = data?.jwt
		runtimeData.token.value = data?.jwt
	}
	const updateUser = (user: any) => {
		runtimeData.user.value = user
		localStorageData.user.value = user
	}

	return { isLoggedIn, createUser, ...runtimeData, logOut, updateUser, setToken }
}
