<script setup>
import { async } from "@firebase/util";
import { onMounted, ref, onBeforeMount } from "vue";
import { useUserStore } from "../stores/user";

const props = defineProps({
  appointment: Object,
});

const username = ref("[][][][][][][][][]");

const userStore = useUserStore();

onMounted(async () => {
  // TODO: Remove userStore
  // TODO: get username from appointmentObject instead
  username.value = (
    await userStore.loadProfileFromProfileId(props.appointment.host_id)
  ).username;
});

function toDate(timestamp) {
  return new Date(timestamp.seconds * 1000);
}
// TODO: Display appointment datetime based on user's connection with appointment
// note: includes "3 available schedules out of 27", "booked for 12/12/2021 (7:00 PM - 9:00PM)", "No available schedules out of 27",
//       "next appointment: @uninvited_guest - 12/12/2021 (7:00 PM - 9:00 PM)"
</script>

<template>
  <RouterLink
    class="group flex flex-col-reverse justify-between rounded-xl bg-white shadow-md shadow-zinc-400 transition-colors md:flex-row"
    :to="{ name: 'appointmentdetails', params: { id: appointment.id } }"
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
        {{ "@" + username }}
      </p>
      <p
        class="h-8 flex-auto overflow-hidden text-ellipsis text-sm leading-4 group-hover:text-orange-600 group-active:text-amber-400 sm:leading-5"
      >
        {{ appointment.description }}
      </p>
      <p
        class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs group-hover:text-orange-500 group-active:text-amber-400"
      >
        Booked for: 12 PM
      </p>
    </div>
    <img
      :src="appointment.image_path"
      alt=""
      class="h-32 shrink-0 rounded-t-xl object-cover md:w-40 md:rounded-r-xl md:rounded-tl-none"
    />
  </RouterLink>
</template>
