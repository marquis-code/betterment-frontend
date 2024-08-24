export const useEmailValidation = () => {
  const email = ref('');
  const isValid = ref(true);
  const showDropdown = ref(false);

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid.value = emailPattern.test(email.value);
    showDropdown.value = !isValid.value;
  };

  const emailInputClass = computed(() => {
    if (!email.value) return 'border-gray-100';
    return isValid.value ? 'border-green-500' : 'border-red-500';
  });

  return {
    email,
    isValid,
    showDropdown,
    validateEmail,
    emailInputClass,
  };
};
