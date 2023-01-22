<script setup>
import { ref } from "vue";
import AppointmentCardItem from "../components/AppointmentCardItem.vue";

const props = defineProps({
  filter: String,
});
const appointmentList = ref([
  {
    id: 0,
    title: props.filter,
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
  {
    id: 1,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
  {
    id: 2,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
  {
    id: 3,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
  {
    id: 4,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
  {
    id: 5,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
]);
</script>
<template>
  <div class="flex flex-col items-stretch gap-4 pb-64">
    <AppointmentCardItem
      v-for="item in appointmentList"
      v-bind:appointment="item"
      v-bind:key="item.id"
    />
  </div>
</template>
