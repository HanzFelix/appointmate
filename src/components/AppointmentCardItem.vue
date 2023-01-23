<script setup>
const props = defineProps({
  appointment: Object,
});
</script>

<template>
  <RouterLink
    class="group flex flex-col-reverse justify-between rounded-xl bg-white shadow-md shadow-stone-400 transition-colors md:flex-row"
    to="/appointmentdetails"
  >
    <div
      class="box-border flex flex-col justify-center overflow-hidden py-2 px-4"
    >
      <h2
        class="truncate text-ellipsis whitespace-nowrap text-2xl group-hover:text-orange-600 group-active:text-amber-400"
      >
        {{ appointment.title }}
      </h2>
      <p
        class="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-600 group-hover:text-orange-500 group-active:text-amber-400"
      >
        {{ appointment.user }}
      </p>
      <p
        class="h-8 flex-auto overflow-hidden text-ellipsis text-sm leading-4 group-hover:text-orange-600 group-active:text-amber-400"
      >
        {{ appointment.description }}
      </p>
      <p
        class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs group-hover:text-orange-500 group-active:text-amber-400"
      >
        {{ appointment.datetime }}
      </p>
    </div>
    <img
      :src="appointment.image_src"
      alt=""
      class="h-32 shrink-0 rounded-t-xl object-cover md:w-40 md:rounded-r-xl md:rounded-tl-none"
    />
  </RouterLink>
</template>
