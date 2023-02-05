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
    default: "", // all, booked, hosted
  },
  profileId: {
    type: String,
  },
  limit: {
    default: 100,
  },
});

const appointmentList = ref([]);

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

    switch (props.filter) {
      case "hosted":
        appointmentList.value = filterHosted(tempList, props.profileId);
        break;

      case "booked":
        appointmentList.value = filterBooked(tempList, props.profileId);
        break;

      default:
        appointmentList.value = tempList;
        break;
    }
  });
});
function filterHosted(arr, keyword) {
  return arr.filter((el) => el.host_id == keyword);
}

//temp
function filterBooked(arr, keyword) {
  return arr.filter((el) => el.host_id != keyword);
}
</script>
<template>
  <div class="flex flex-col items-stretch gap-4 px-1 pb-4">
    <template v-for="(item, index) in appointmentList" v-bind:key="item.id">
      <AppointmentCardItem v-bind:appointment="item" v-if="index < limit"
    /></template>
  </div>
</template>
