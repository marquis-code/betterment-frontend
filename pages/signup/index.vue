<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div class="flex flex-col p-6 bg-white">
            <h1 class="text-2xl font-semibold mb-4">How do you want to get started?</h1>
            <p class="mb-4 text-gray-700">It’s easy—opening your account takes as little as 3 minutes.</p>

            <!-- Accounts Section -->
            <div class="space-y-2 mb-6">
                <div v-for="item in accountOptions" :key="item.title"
                    class="p-4 cursor-pointer border-b border-gray-100" @click="handleNavigation(item)">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="icon-placeholder mr-4 rounded-sm">{{ item.icon }}</span>
                            <div>
                                <p class="font-medium text-sm">{{ item.title }}</p>
                                <p class="text-sm text-gray-600">{{ item.description }}</p>
                            </div>
                        </div>
                        <span class="icon-placeholder">></span>
                    </div>
                </div>
            </div>

            <!-- Services Section -->
            <div class="space-y-2 mb-6">
                <h2 class="text-lg font-semibold mb-2">Services</h2>
                <div v-for="service in services" :key="service.title"
                    class="p-4 cursor-pointer border-b border-gray-100" @click="handleNavigation(service)">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="icon-placeholder mr-4">{{ service.icon }}</span>
                            <p class="font-medium">{{ service.title }}</p>
                        </div>
                        <span class="icon-placeholder">></span>
                    </div>
                </div>
            </div>

            <!-- Employee Sponsored Benefits -->
            <div class="space-y-2">
                <h2 class="text-lg font-semibold mb-2">Employee sponsored benefits</h2>
                <div v-for="benefit in benefits" :key="benefit.title"
                    class="p-4 cursor-pointer border-b border-gray-100" @click="handleNavigation(benefit)">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="icon-placeholder mr-4">{{ benefit.icon }}</span>
                            <p class="font-medium">{{ benefit.title }}</p>
                        </div>
                        <span class="icon-placeholder">></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const accountOptions = ref([
    { icon: '💰', title: 'High-yield cash', description: 'Grow your savings with 5.00% APY* (variable)' },
    { icon: '🏦', title: 'Bond investing', description: 'Invest in a 100% bond portfolio' },
    { icon: '📈', title: 'Investing', description: 'Invest with expert-built stock and bond portfolios' },
    { icon: '🌞', title: 'IRA', description: 'Invest for retirement with a traditional, Roth, or SEP IRA' },
    { icon: '🔐', title: 'Crypto investing', description: 'Invest with managed crypto portfolios' },
    { icon: '🏧', title: 'Checking', description: 'Pay bills and earn cash back' }
])

const services = ref([
    { icon: '🔧', title: 'Talk to an advisor', description: 'Connect with our financial experts for hands-on guidance' },
    { icon: '📋', title: 'Get a recommendation', description: 'Take our quiz and we’ll help guide you' }
])

const benefits = ref([
    { icon: '🔒', title: 'Claim your Betterment 401(k)', description: 'Does your employer offer a 401(k) or other benefits through Betterment? Start here' }
])

definePageMeta({
    layout: 'auth-with-logo-only'
})

const handleNavigation = (item: any) => {
    const titleKey = item.title.split(' ').join('_')
    router.push(`/signup/${titleKey}`)
}
</script>

<style scoped>
.icon-placeholder {
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    /* Adjust the size as needed */
}
</style>