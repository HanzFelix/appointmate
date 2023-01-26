<script setup>
import ButtonAlternative from "./ButtonAlternative.vue";
import ButtonPrimary from "./ButtonPrimary.vue";

const props = defineProps({
  show: { default: false },
  title: { type: String, default: "Pop-up" },
  message: { type: String, default: "No Message" },
});

const emit = defineEmits(["confirm", "cancel"]);
function emitAsCancel() {
  emit("cancel");
}
function emitAsConfirm() {
  emit("confirm");
}
</script>

<template>
  <!-- Model Background -->
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 px-8"
  >
    <!-- Modal content -->
    <div
      class="relative flex max-w-xl flex-col gap-2 rounded-2xl bg-white p-4 shadow-md shadow-zinc-400"
    >
      <!-- Modal header -->
      <header class="flex items-start justify-between rounded-t p-2">
        <h3 class="text-xl text-zinc-700">
          {{ title }}
        </h3>
        <button
          type="button"
          @click="emitAsCancel"
          class="ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-zinc-400 hover:bg-zinc-200 hover:text-orange-600"
          data-modal-hide="defaultModal"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </header>
      <!-- Modal body -->
      <div class="p-2">
        <p class="text-base leading-relaxed">
          {{ message }}
        </p>
      </div>
      <!-- Modal footer -->
      <footer class="flex flex-row-reverse flex-wrap-reverse gap-x-4">
        <ButtonAlternative text="Cancel" :click-action="emitAsCancel" />
        <ButtonPrimary
          text="Delete"
          :click-action="emitAsConfirm"
          variant="Danger"
        />
      </footer>
    </div>
  </div>
</template>
