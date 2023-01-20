<script setup>
const props = defineProps({
  appointment: Object,
});
</script>

<template>
  <article
    class="flex md:flex-row flex-col-reverse bg-white rounded-xl justify-between shadow-md"
  >
    <div
      class="flex flex-col justify-center py-2 px-4 box-border overflow-hidden"
    >
      <h2 class="text-xl whitespace-nowrap text-ellipsis truncate">
        {{ appointment.title }}
      </h2>
      <p class="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
        {{ appointment.user }}
      </p>
      <p class="text-sm leading-4 h-8 flex-auto overflow-hidden text-ellipsis">
        {{ appointment.description }}
      </p>
      <p class="text-xs whitespace-nowrap text-ellipsis overflow-hidden mt-1">
        {{ appointment.datetime }}
      </p>
    </div>
    <img
      :src="appointment.image_src"
      alt=""
      class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
    />
  </article>
</template>
