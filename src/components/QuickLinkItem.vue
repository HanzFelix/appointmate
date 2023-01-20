<script setup>
const props = defineProps({
  title: String,
  link: String,
});
</script>

<template>
  <RouterLink
    :to="link"
    class="p-4 shadow-md bg-white border-box rounded-xl flex justify-between items-center"
  >
    <span>{{ title }}</span>
    <span class="material-symbols-outlined text-orange-600"
      >arrow_circle_right</span
    >
  </RouterLink>
</template>
