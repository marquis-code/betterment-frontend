<template>
    <div class="rounded-lg">
        <h2 class="font-medium mb-2">{{ title }}</h2>
        <p class="text-gray-500 mb-4 text-sm">
            {{ description }}
        </p>
  
        <!-- File Upload Box or File Preview -->
        <div v-if="filePreview" class="flex flex-col items-center justify-center text-center">
            <!-- Show preview if the file is uploaded -->
            <img :src="filePreview" alt="File preview" class="w-full h-40 object-cover rounded-lg shadow-md" />
            <button type="button" class="mt-2 text-blue-500 underline" @click="triggerFileUpload">Change Image</button>
        </div>
        <div v-else class="border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center rounded-lg text-center cursor-pointer" @click="triggerFileUpload">
            <!-- Placeholder for when no file is uploaded -->
            <input type="file" @change="handleFileUpload" class="hidden" ref="fileInput" accept="image/*" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-gray-400 mb-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v4a2 2 0 002 2h3v4a2 2 0 002 2h4a2 2 0 002-2v-4h3a2 2 0 002-2V7m-9 10V4m0 0L7 7m5-3l5 3" />
            </svg>
            <p class="text-gray-400">Upload Image</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const fileInput = ref<HTMLInputElement | null>(null);
const filePreview = ref<string | null>(null);
const base64FileData = ref<string | null>(null);

const triggerFileUpload = () => {
    fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            filePreview.value = e.target?.result as string;
            base64FileData.value = e.target?.result as string; 
            emit('file', base64FileData);
        };

        reader.readAsDataURL(file);
    }
};

const emit = defineEmits<{
   (event: 'file', file: string): void
}>()

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
/* Optional styling to ensure the component looks good within a modal */
div {
    max-width: 100%;
    overflow: hidden;
}
</style>
