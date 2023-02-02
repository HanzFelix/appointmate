<script setup>
import { ref, onMounted } from "vue";
import AppointmentCardItem from "./AppointmentCardItem.vue";
import { appointmateDB } from "@/firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";

const props = defineProps({
  filter: {
    type: String,
    default: "Appointment Title",
  },
  limit: {
    default: 100,
  },
});

const appointmentList = ref([
  /*
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
    title: props.filter + " but it's long",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/img/sample.jpg",
  },
  {
    id: 2,
    title: props.filter + " but it's unnecessarily verbose",
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
  },*/
]);

const appointmentsColRef = collection(appointmateDB, "appointments");
const appointmentsColQuery = query(appointmentsColRef, orderBy("host_id"));

// get appointments
onMounted(async () => {
  onSnapshot(appointmentsColQuery, (querySnapshot) => {
    const tempList = [];
    querySnapshot.forEach((doc) => {
      const appointment = {
        id: doc.id,
        title: doc.data().title,
        host_id: doc.data().host_id,
        description: doc.data().description,
        datetime: doc.data().datetime,
        image_path: doc.data().image_path,
      };
      tempList.push(appointment);
    });
    appointmentList.value = tempList;
  });
});
</script>
<template>
  <div class="flex flex-col items-stretch gap-4">
    <template v-for="(item, index) in appointmentList" v-bind:key="item.id">
      <AppointmentCardItem v-bind:appointment="item" v-if="index < limit"
    /></template>
  </div>
</template>
