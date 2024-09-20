<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <main class="lg:w-4/12 max-w-3xl w-10/12">
            <section class="bg-white w-full rounded-md border">
              <p class="border-b text-sm font-semibold py-4 pl-6">
                Please upload your proof of identification
              </p>
              <form class="p-6 space-y-6" @submit.prevent="handleUploadKYC">
                  <FileUpload title="Passport" description="please upload your identity passport" @file="handleUploadedPassport" />
                  <FileUpload title="Front drivers licence" description="Please upload front of drivers licence" @file="handleUploadedDriversLicence1" />
                  <FileUpload title="Back drivers licence" description="Please upload back of drivers licence " @file="handleUploadDriversLicense2" />
                <div class="w-full pt-6 flex justify-between items-center gap-x-5">
                  <button type="submit" :disabled="processing"
                    class="w-full text-white disabled:cursor-not-allowed disabled:opacity-25  bg-black py-3.5 px-3 rounded-md">
                    {{ processing ? 'processing..' : 'Submit' }}
                  </button>
                  <button @click="closeModal" class="w-full text-white  bg-gray-600 py-3.5 px-3 rounded-md">Close</button>
                </div>
              </form>
            </section>
          </main>
    </div>
  </template>
  
  <script setup lang="ts">
    import { useUpdateUser } from '@/composables/useUpdateUser'
    const { processing, updateUser } = useUpdateUser()
    import { useUserInfo } from '@/composables/useUserInfo'
  // Define reactive variables and refs 
  const { loading, userData } = useUserInfo()
  const base64FileData = ref<string | null>(null); // Store base64 file data
  const showModal = ref(false); // Modal visibility state
  const router = useRouter()

  const emit = defineEmits(['close', 'update'])

const closeModal = () => {
  emit('close')
}

  const passport  = ref('')
  const driver1 = ref('')
  const driver2 = ref('')

  const handleUploadKYC = () => {
    const kycObj = {
        identification: driver1.value,
        passport: passport.value
    }
    if(userData.value){
    updateUser(userData.value.id, kycObj).then(() => {
        closeModal()
    })
    }
  }

const handleUploadedPassport = (data: any) => {
    console.log(data.value, 'here')
    passport.value = data.value
}
const handleUploadedDriversLicence1 = (data: any) => {
    driver1.value = data.value
  console.log(data.value, 'here')
}

const handleUploadDriversLicense2 = (data: any) => {
    driver2.value = data.value
  console.log(data.value, 'here')
}


  const props = defineProps<{
  isOpen: boolean

}>()
  </script>
  
  <style scoped></style>
  