<script setup>
const props = defineProps({
  title: String,
  link: String,
});
</script>

<template>
  <RouterLink
    :to="link"
    class="border-box group flex items-center justify-between rounded-xl bg-white p-4 shadow-md shadow-stone-400 transition-colors hover:text-orange-600 active:bg-orange-500"
  >
    <span class="group-active:text-white">{{ title }}</span>
    <span
      class="material-symbols-outlined text-orange-600 group-active:text-white"
      >arrow_circle_right</span
    >
  </RouterLink>
</template>
