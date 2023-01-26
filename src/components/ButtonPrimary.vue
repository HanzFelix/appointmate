<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Primary",
  },
  clickAction: Function,
  buttonType: { type: String, default: "button" },
  variant: {
    type: String,
    default: "Primary",
  },
});

const variants = {
  Primary: "bg-amber-400 hover:bg-amber-500 active:bg-orange-600",
  Danger: "bg-red-500 hover:bg-orange-500 active:bg-red-600",
};
</script>
<template>
  <button
    class="mt-2 rounded-lg border-2 border-transparent p-2 px-6 text-sm font-medium text-white transition-colors"
    :type="buttonType"
    @click="clickAction"
    :class="variants[variant]"
  >
    {{ text }}
  </button>
</template>
