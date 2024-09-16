<template>
    <div class="bg-[#000b50]">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-white">
            Still have questions?
          </h2>
          <dl class="mt-10 space-y-6 divide-y divide-white">
            <div v-for="(item, index) in faqItems" :key="index" class="pt-6">
              <dt>
                <!-- Expand/collapse question button -->
                <button
                  type="button"
                  @click="toggleFaq(index)"
                  class="flex w-full items-start justify-between text-left text-white"
                  :aria-expanded="openIndex === index"
                >
                  <span class="text-base font-semibold leading-7">
                    {{ item.question }}
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <!-- Plus Icon -->
                    <svg
                      v-if="openIndex !== index"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    <!-- Minus Icon -->
                    <svg
                      v-else
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                v-show="openIndex === index"
                class="mt-2 pr-12 space-y-4 text-base leading-7 text-white"
              >
                <p v-for="(answer, answerIndex) in item.answers" :key="answerIndex">
                  {{ answer }}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface FaqItem {
    question: string;
    answers: string[];
  }
  
  // FAQ data
  const faqItems: FaqItem[] = [
    {
      question: 'How does Betterment work?',
      answers: [
        'Betterment helps you manage your money through cash management, guided investing, and retirement planning. We are a fiduciary, which means we act in your best interest.',
        'We\'ll ask a bit about you when you sign up. We\'ll also gather information when you connect your outside accounts. Then, we\'ll help you set financial goals and set you up with investment portfolios for each goal.',
        'For your long-term financial needs (like retirement, next year\'s vacation, or a down payment), our investment strategy utilizes low-cost ETFs (exchange-traded funds) and an adjustable risk profile based on your goal type and how long you plan to invest.',
        'For your daily saving and spending, you can use our cash management products that include Checking (which is offered by nbkc bank, Member FDIC) and Cash Reserve, a high-yield cash account.',
      ],
    },
    {
      question: 'Will I have access to real humans?',
      answers: [
        'Customer support team members are available five days per week to answer questions about your account.',
        'If you want in-depth financial advice, you can talk to a licensed advisor by phone for an additional cost. Our Premium plan provides you with unlimited access and costs an additional 0.40% on your invested balances (with a minimum account balance requirement of $100,000).',
      ],
    },
    {
      question: 'Is my money safe at Betterment?',
      answers: [
        'Betterment Securities is a Member of SIPC, which protects securities of its members up to $500K (including $250K for claims for cash). Explanatory brochure available upon request or at www.sipc.org. What you should remember is that the SIPC does not protect against market changes in your investing account.',
        'Individual Cash Reserve accounts have FDIC insurance up to $2 million and joint Cash Reserve accounts offer up to $4 million in FDIC insurance once funds are deposited into our program banks†.',
        'Funds deposited into Checking are FDIC-insured up to $250,000 for individual accounts and up to $250,000 per depositor for joint accounts, provided by nbkc bank, Member FDIC. Explore further details about FDIC insurance.',
      ],
    },
    {
      question: 'Who are the experts behind the scenes?',
      answers: [
        'Our team of investing experts make decisions about our portfolio strategies and fund selection with the help of an external committee of economists, PhDs, and industry experts.',
        'More than just a portfolio management team, our experts work to develop improvements to our Tax Smart technology, our cash analysis tools, and other advanced strategies.',
      ],
    },
  ];
  
  const openIndex = ref<number | null>(null);
  
  function toggleFaq(index: number) {
    openIndex.value = openIndex.value === index ? null : index;
  }
  </script>
  
  <style scoped>
  .hidden {
    display: none;
  }
  </style>
  