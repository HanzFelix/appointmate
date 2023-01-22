<script setup>
const props = defineProps({
  appointment: Object,
});
</script>

<template>
  <RouterLink
    class="flex md:flex-row flex-col-reverse bg-white rounded-xl justify-between shadow-md transition-colors group"
    to="/appointmentdetails"
  >
    <div
      class="flex flex-col justify-center py-2 px-4 box-border overflow-hidden"
    >
      <h2
        class="text-xl whitespace-nowrap text-ellipsis truncate group-active:text-amber-400 group-hover:text-orange-600"
      >
        {{ appointment.title }}
      </h2>
      <p
        class="text-xs whitespace-nowrap text-ellipsis overflow-hidden text-gray-600 group-hover:text-orange-500 group-active:text-amber-400"
      >
        {{ appointment.user }}
      </p>
      <p
        class="text-sm leading-4 h-8 flex-auto overflow-hidden text-ellipsis group-active:text-amber-400 group-hover:text-orange-600"
      >
        {{ appointment.description }}
      </p>
      <p
        class="text-xs whitespace-nowrap text-ellipsis overflow-hidden mt-1 group-hover:text-orange-500 group-active:text-amber-400"
      >
        {{ appointment.datetime }}
      </p>
    </div>
    <img
      :src="appointment.image_src"
      alt=""
      class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
    />
  </RouterLink>
</template>
