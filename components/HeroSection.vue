<template>
  <section class="overflow-hidden bg-gradient-navy sm:grid sm:grid-cols-2 b bg-[#000b50]">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">An easy way to invest & save</h1>
        <p class="mt-6 text-lg leading-8 text-white">We put your money to work so you can take it easy. Build wealth with automated investing, earn more on your cash with variable 5.00% APY*, and grow your retirement with tax-advantaged IRAs.</p>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink to="/signup" class="rounded-md bg-[#1d6ae5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</NuxtLink>
          <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-white underline">Login <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </div>
  
    <img
      alt=""
      src="@/assets/img/hero.png"
      class="w-full object-cover sm:h-full"
    />
  </section>
  </template>
  