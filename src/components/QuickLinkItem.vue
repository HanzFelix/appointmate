<script setup>
const props = defineProps({
  title: String,
  link: String,
});
</script>

<template>
  <RouterLink
    :to="link"
    class="p-4 shadow-md bg-white border-box rounded-xl flex justify-between items-center hover:text-orange-600 active:bg-orange-500 transition-colors group"
  >
    <span class="group-active:text-white">{{ title }}</span>
    <span
      class="material-symbols-outlined text-orange-600 group-active:text-white"
      >arrow_circle_right</span
    >
  </RouterLink>
</template>
