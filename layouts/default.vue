<template>
  <div>
    <div>
      <div class="sm:block">
        <div class="border-b border-gray-200 bg-black">
       <div class="text-white flex justify-center lg:justify-between items-center max-w-7xl mx-auto">
        <nav class="-mb-px flex space-x-8 uppercase " aria-label="Tabs">
          <NuxtLink @click="activePage = 'individual'" :class="[activePage === 'individual' ? 'text-white border-white' : 'border-transparent text-gray-500']" to="/" class="whitespace-nowrap border-b-2  px-1 py-4 text-xs lg:text-sm font-medium">Individuals</NuxtLink>
          <NuxtLink @click="activePage = 'employer'" :class="[activePage === 'employer' ? 'text-white border-white' : 'border-transparent text-gray-500']" to="/work" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-xs lg:text-sm font-medium">Employers</NuxtLink>
          <NuxtLink @click="activePage = 'advisors'" :class="[activePage === 'advisors' ? 'text-white border-white' : 'border-transparent text-gray-500']" to="/advisor" class="whitespace-nowrap border-b-2  px-1 py-4 text-xs lg:text-sm font-medium " aria-current="page">Advisors</NuxtLink>
        </nav>
        <!-- <a class="hidden lg:block" href="tel:(845) 210-4371">Contact Sales: (845) 210-4371</a> -->
       </div>
        </div>
      </div>
    </div>
    <IndividualNavigationBar class="z-50"/>
    <NuxtPage class="z-10" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const activePage = ref('individual')
</script>

