<!-- <template>
    <section class="sm:grid sm:grid-cols-2 h-screen">
      <div class="bg-blue-100 fixed w-1/2 h-full">
        <img
          alt=""
          src="@/assets/img/profile.png"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="p-8 md:p-12 lg:px-16 lg:py-24 overflow-y-auto ml-auto w-1/2 h-full">
        <div
          class="mx-auto max-w-xl"
        >
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Let's get you started
          </h2>
          <p>
            To open your account, we're legally required to collect some basic
            information. We'll never share your information with anyone.
          </p>
          <ol class="list-decimal ml-4 my-4">
            <li>Get the basics</li>
            <li>Build your profile</li>
          </ol>
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
          <p class="text-sm mt-4">Set this up later</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "profile",
  });
  </script>
   -->

   <template>
    <section class="flex h-screen">
      <div class="bg-blue-100 flex justify-center items-center w-1/2 fixed h-full">
        <img
          alt=""
          src="@/assets/img/profile.png"
          class="h-full w-auto object-contain max-w-full max-h-full"
        />
      </div>
      <div class="w-1/2 ml-auto h-full overflow-y-auto p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl">
       <div class="space-y-3">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Let's get you started
          </h2>
          <p class="text-gray-700">
            To open your account, we're legally required to collect some basic
            information. We'll never share your information with anyone.
          </p>
       </div>
          <ol class="list-decimal ml-4 my-4 space-y-3">
            <li class="font-semibold">Get the basics</li>
            <li class="text-gray-400">Build your profile</li>
          </ol>
          <button
            class="bg-blue-500 text-sm text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
          <p class="text-sm mt-4 text-blue-600">Set this up later</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "profile",
  });
  </script>
  