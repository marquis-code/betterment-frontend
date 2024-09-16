<template>
  <div class="max-w-4xl p-6 bg-gray-900 rounded-lg shadow-lg space-y-6">
    <!-- Upload Section Heading -->
    <h1 class="text-lg font-medium text-white">UPLOAD</h1>

    <!-- Instruction Box -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <p class="text-gray-300 mb-4">
        If you have made a transfer of <span class="text-white font-bold">{{ amount }}</span> to the provided wallet address, kindly upload your proof of payment here.
      </p>

      <!-- Bitcoin Wallet Address Section -->
      <div class="flex flex-col mb-4 space-y-3">
        <p class="text-gray-400 font-medium text-sm">{{ selectedMethodLabel }} Wallet Address:</p>
        <div class="flex-1 bg-gray-700 text-white rounded-md px-4 py-2 flex items-center justify-between">
          <span class="truncate">{{ selectedWalletAddress }}</span>
          <button @click="copyToClipboard(selectedWalletAddress)" class="bg-blue-500 text-sm text-white p-2 rounded-lg hover:bg-blue-400">
            Copy
          </button>
        </div>
      </div>

      <!-- Pay in USD and Bitcoin Section -->
      <div class="grid grid-cols-2 gap-4 mb-4">
        <!-- Pay in USD -->
        <div>
          <p class="text-gray-400 font-medium mb-2 text-sm">Pay in USD</p>
          <input type="text" v-model="usdAmount" class="w-full bg-gray-700 text-white rounded-lg px-4 py-4" readonly />
        </div>
        
        <!-- Pay in Bitcoin -->
        <div>
          <p class="text-gray-400 font-medium mb-2 text-sm">Pay in {{ selectedMethodLabel }}</p>
          <div class="flex items-center bg-gray-700 text-white rounded-lg px-4 py-2">
            <span class="flex-1">{{ computedAmount }}</span>
            <button @click="copyToClipboard(computedAmount)" class="bg-blue-500 text-sm text-white p-2 rounded-lg hover:bg-blue-400">
              Copy
            </button>
          </div>
        </div>
      </div>

      <!-- Change deposit amount Button -->
      <button @click="router.push('/dashboard/deposits?stage=deposit-details')" class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-400">Change deposit amount</button>
    </div>

    <!-- Deposit Section -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-white font-medium mb-2">Deposit</h2>
      <p class="text-gray-400 mb-4 text-sm">
        During this process, we will likely not accept any unclear screenshots or an upload that is not in line with your transaction.
      </p>

      <!-- File Upload Box or File Preview -->
      <div v-if="filePreview" class="flex flex-col items-center justify-center text-center">
        <!-- Show preview if the file is uploaded -->
        <p class="text-gray-300 mb-2">File Preview:</p>
        <img :src="filePreview" alt="File preview" class="w-full h-64 object-cover rounded-lg shadow-md" />
        <button class="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400" @click="showModal = true">Change Receipt</button>
      </div>
      <div v-else class="border-2 border-dashed border-gray-600 p-10 flex flex-col items-center justify-center rounded-lg text-center">
        <!-- Placeholder for when no file is uploaded -->
        <input type="file" @change="handleFileUpload" class="hidden" ref="fileInput" accept="image/*" />
        <label for="file-upload" class="cursor-pointer flex justify-center items-center flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-12 h-12 text-white mb-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v4a2 2 0 002 2h3v4a2 2 0 002 2h4a2 2 0 002-2v-4h3a2 2 0 002-2V7m-9 10V4m0 0L7 7m5-3l5 3" />
          </svg>
          <p class="text-gray-300">Click the icon above to upload file</p>
        </label>
        <button class="mt-4 text-white bg-blue-500 hover:bg-blue-400 text-sm py-2 px-4 rounded-md" @click="triggerFileUpload">Upload File</button>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center">
      <button class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400" @click="sendFile">Send</button>
    </div>

    <!-- Modal to edit/change receipt -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-white font-medium mb-4">Change Receipt</h2>
        <p class="text-gray-400 mb-4 text-sm">Select a new receipt image to upload:</p>
        
        <input type="file" @change="handleFileUpload" ref="fileInputModal" accept="image/*" class="mb-4" />
        
        <div class="flex justify-end space-x-2">
          <button @click="showModal = false" class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400">Cancel</button>
          <button @click="showModal = false" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineEmits } from 'vue';
import { useTransaction } from '@/composables/useTransaction';
import { useRouter } from 'vue-router';
const { handleTransaction, form, setFormData } = useTransaction()
// Props
const props = defineProps({
  selectedMethodLabel: {
    type: String,
    required: true
  },
  selectedWalletAddress: {
    type: String,
    required: true
  },
  selectedMethod: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  computedAmount: {
    type: String,
    required: true
  }
});

// Emit event
const emit = defineEmits(['file-uploaded']);

// State
const router = useRouter();
const usdAmount = ref(''); // USD amount as reactive data
const fileInput = ref<HTMLInputElement | null>(null);
const fileInputModal = ref<HTMLInputElement | null>(null);
const filePreview = ref<string | null>(null);
const base64FileData = ref<string | null>(null); // Store base64 file data
const showModal = ref(false); // Modal visibility state

// onMounted lifecycle hook to initialize USD amount
onMounted(() => {
  usdAmount.value = props.amount;
});

// Function to copy value to clipboard
const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value).then(() => {
    alert('Copied to clipboard!');
  });
};

// Function to trigger file input
const triggerFileUpload = () => {
  fileInput.value?.click();
};

// Handle file upload and preview
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      filePreview.value = e.target?.result as string;
      base64FileData.value = e.target?.result as string; // Store the base64 image data
    };

    reader.readAsDataURL(file);
  }
};

// Function to send the file data
const sendFile = () => {
  if (base64FileData.value) {
    const payload = {
    wallet: props.selectedWalletAddress,
    proof: base64FileData.value,
    amount: props.amount
  }
  setFormData(payload)
  handleTransaction()
    // emit('file-uploaded', base64FileData.value); // Emit the base64 file data to the parent
  } else {
    alert('Please upload a file first.');
  }
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
