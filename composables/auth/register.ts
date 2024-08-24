import { authApiFactory } from "@/apiFactory/auth";
import { useStore } from 'vuex';

export const useRegister = () => {
  const store = useStore();
  const loading = ref(false);
  const registerPayload = ref({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    loading.value = true;
    try {
      const payload = {
        username: registerPayload.value.username,
        email: registerPayload.value.email,
        password: registerPayload.value.password,
      };

      const response = await authApiFactory.register(payload);
      useNuxtApp().$toast.success("Account was successfully created.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      store.commit('user/SET_USER', response.data.data.user);
      store.commit('user/SET_TOKEN', response.data.data.token);
      useRouter().push("/login");
    } catch (error: any) {
      if (typeof error.response !== "undefined") {
        useNuxtApp().$toast.error("Something went wrong!", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
      // return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(
      registerPayload.value.username &&
      registerPayload.value.email &&
      registerPayload.value.password
    );
  });

  return { registerPayload, handleRegister, loading, isFormEmpty };
};
