import { authApiFactory } from "@/apiFactory/auth";
import { useStorage } from "@vueuse/core";
import { useStore } from 'vuex';
import Swal from "sweetalert2";
const runtimeData = {
  user: ref({} as any),
  token: ref(""),
};
const localStorageData = {
  user: useStorage("user", {} as any),
  token: useStorage("token", ""),
};
const router = useRouter();
watch(
  runtimeData.user,
  (val) => {
    Object.keys(val).forEach((key) => {
      localStorageData.user.value[key] = val[key];
    });
  },
  { deep: true }
);

(() => {
  runtimeData.user.value = localStorageData.user.value;
  runtimeData.token.value = localStorageData.token.value;
})();

const loginPayload = ref({
  email: "",
  password: "",
});
export const useLogin = () => {
  const store = useStore();
  const loading = ref(false);
  const handleLogin = async () => {
    loading.value = true;
    try {
      const payload = {
        email: loginPayload.value.email,
        password: loginPayload.value.password,
      };
      const response = await authApiFactory.login(payload);
      runtimeData.user.value = response.data?.data?.user;
      localStorageData.token.value = response.data?.data?.token;
      runtimeData.token.value = response.data?.data?.token;
      useNuxtApp().$toast.success("Welcome back.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push("/dashboard");
      store.commit('user/SET_USER', response.data.data.user);
      store.commit('user/SET_TOKEN', response.data.data.token);
      return response.data;
    } catch (error: any) {
      if (typeof error.response !== "undefined") {
        useNuxtApp().$toast.error("Something went wrong!", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
      return error;
    } finally {
      loading.value = false;
    }
  };

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Nah, Just Kidding!",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        runtimeData.user.value = null;
        router.push("/signup");
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  const id = computed({
    get: () => runtimeData?.user?.value?.id ?? "",
    set: () => {},
  });

  const isLoggedIn = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {};
    },
    set: () => {},
  });

  const user = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {}
        ? runtimeData?.user?.value
        : "";
    },
    set: () => {},
  });
  const isFormEmpty = computed(() => {
    return !!(loginPayload.value.email && loginPayload.value.password);
  });

  const setLoginData = (data: any) => {
    loginPayload.value.email = data.email;
    loginPayload.value.password = data.password;
  };

  return {
    handleLogin,
    setLoginData,
    localStorageData,
    loginPayload,
    loading,
    isFormEmpty,
    logOut,
    isLoggedIn,
    id,
    user,
  };
};
