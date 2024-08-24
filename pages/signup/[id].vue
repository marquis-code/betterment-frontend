<template>
  <main>
    <div class="p-10 mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
      <p class="text-gray-700 text-sm font-semibold pb-3">
        {{ currentStep }}/5
      </p>
      <div v-if="currentStep === 1" class="space-y-4">
        <div class="space-y-3">
          <h2 class="text-3xl font-medium max-w-">
            Great, let's start with your email address.
          </h2>
          <p class="text-gray-700">You'll use this as your login.</p>
        </div>
        <div>
          <label class="text-sm text-gray-600 py-0 my-0">Email Address</label>
          <input
            v-model="email"
            type="email"
            placeholder="Email address"
            class="input py-3.5 outline-none pl-3"
          />
        </div>
        <button
          @click="nextStep"
          :disabled="!!!email"
          class="w-full disabled:cursor-not-allowed disabled:opacity-25 py-3.5 rounded-lg bg-blue-600 text-white"
        >
          Continue
        </button>
      </div>

      <div v-if="currentStep === 2" class="space-y-4">
        <h2 class="text-3xl font-medium max-w-">
          Create a password for your login.
        </h2>
        <p class="text-gray-700">
          To make this extra secure, please use symbols, uncommon words, and at
          least 8 characters.
        </p>

        <div>
          <label class="text-sm text-gray-600 py-0 my-0">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input py-3.5 outline-none pl-3"
          />
        </div>
        <button
          :disabled="!!!password"
          @click="nextStep"
          class="w-full py-3.5 rounded-lg disabled:cursor-not-allowed disabled:opacity-25 bg-blue-600 text-white"
        >
          Continue
        </button>
      </div>

      <div v-if="currentStep === 3" class="space-y-4">
        <h2 class="text-3xl font-medium max-w-">
          Nice. Now, what's your name?
        </h2>
        <div>
          <label class="text-sm text-gray-600 py-0 my-0"
            >Legal first name</label
          >
          <input
            v-model="firstName"
            type="text"
            placeholder="Legal first name"
            class="input py-3.5 outline-none pl-3"
          />
        </div>

        <div>
          <label class="text-sm text-gray-600 py-0 my-0">Legal last name</label>
          <input
            v-model="lastName"
            type="text"
            placeholder="Legal last name"
            class="input py-3.5 outline-none pl-3"
          />
        </div>
        <div class="">
          <label class="font-medium text-gray-600 text-sm">
            <input type="checkbox" v-model="useDifferentName" /> I go by a
            different first name
          </label>
        </div>
        <div v-if="useDifferentName">
          <label class="text-sm text-gray-600 py-0 my-0"
            >Preferred first name</label
          >
          <input
            v-if="useDifferentName"
            v-model="preferredName"
            type="text"
            placeholder="Preferred first name"
            class="input py-3.5 outline-none pl-3"
          />
        </div>
        <button
          @click="nextStep"
          :disabled="!!!firstName && !!!lastName"
          class="w-full py-3.5 rounded-lg disabled:cursor-not-allowed disabled:opacity-25 bg-blue-600 text-white"
        >
          Continue
        </button>
      </div>

      <div v-if="currentStep === 4" class="space-y-4">
        <h2 class="text-3xl font-medium max-w-">
          Almost there. Next, we need your phone number.
        </h2>
        <input
          v-model="phone"
          type="tel"
          placeholder="Phone number"
          class="input py-3.5 outline-none pl-3"
        />
        <button
          @click="nextStep"
          :disabled="!!!phone"
          class="w-full py-3.5 rounded-lg disabled:cursor-not-allowed disabled:opacity-25 bg-blue-600 text-white"
        >
          Continue
        </button>
      </div>

      <div v-if="currentStep === 5" class="space-y-4">
        <h2 class="text-3xl font-medium max-w-">
          Lastly, there are agreements.
        </h2>
        <div class="pt-2">
          <label
            class="text-sm text-gray-600 space-x-3 leading-relaxed text-justify"
          >
            <input type="checkbox" v-model="agreedToTerms" />
            By checking this box, you agree to our Limited Scope Advisory
            Agreement, consent to electronic delivery of communications and our
            Privacy Policy, and acknowledge that you have received a copy of our
            Form CRS relationship summary and Form ADV brochure.
          </label>
        </div>
        <div class="mt-6">
          <button
            @click="submitForm"
            :disabled="!!!agreedToTerms"
            class="w-full py-3.5 rounded-lg disabled:cursor-not-allowed disabled:opacity-25 bg-blue-600 text-white"
          >
            Create account
          </button>
        </div>
      </div>

      <p
        class="text-base text-gray-600 flex items-center gap-x-2 font-semibold mt-6"
      >
        <img src="@/assets/icons/secure.svg" class="h-6 w-6" />
        All your information is secure
      </p>
    </div>
    <CoreLoader :show="show" />
  </main>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const show = ref(false)

const currentStep = ref(1);
const email = ref("");
const password = ref("");
const firstName = ref("");
const lastName = ref("");
const preferredName = ref("");
const useDifferentName = ref(false);
const phone = ref("");
const agreedToTerms = ref(false);

// Initialize step from URL or default to 1
currentStep.value = parseInt(route.query.step as string) || 1;

// Watch for changes in the step and update the URL accordingly
watchEffect(() => {
  router.push({
    query: { ...route.query, step: currentStep.value.toString() },
  });
});

function nextStep() {
  if (currentStep.value < 5) {
    currentStep.value++;
  }
}

function submitForm() {
  if (agreedToTerms.value) {
    show.value = true
    setTimeout(() => {
         show.value = false
    }, 5000);
    alert("Form submitted!");
  } else {
    alert("Please agree to the terms to continue.");
  }
}

definePageMeta({
  layout: "auth-with-logo-only",
});
</script>

<style scoped>
.input {
  width: 100%;
  margin: 4px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
