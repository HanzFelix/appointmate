<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Alternative",
  },
  clickAction: Function,
  buttonType: { type: String, default: "button" },
});
</script>
<template>
  <button
    class="mt-2 rounded-lg border-2 border-zinc-300 p-2 px-6 text-sm font-medium text-zinc-600 transition-colors hover:border-orange-600 hover:text-orange-600 active:border-orange-600 active:bg-orange-600 active:text-white"
    :type="buttonType"
    @click="clickAction"
  >
    {{ text }}
  </button>
</template>
