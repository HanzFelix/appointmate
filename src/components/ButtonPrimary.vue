<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Primary",
  },
});
</script>
<template>
  <button
    class="mt-2 rounded-lg border-2 border-transparent bg-amber-400 p-2 px-6 text-sm font-medium text-white transition-colors hover:bg-amber-500 active:bg-orange-600"
    type="submit"
  >
    {{ props.text }}
  </button>
</template>
