<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonAlternative from "../components/ButtonAlternative.vue";
import ConfirmationModal from "../components/ConfirmationModal.vue";
import { ref, onMounted, computed } from "vue";
import { appointmateDB } from "../firebase";
import { useRouter } from "vue-router";
import {
  query,
  where,
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { useLocalStore } from "../stores/local";

// init packages
const router = useRouter();
const localStore = useLocalStore();

// firebase
const schedulesRef = collection(appointmateDB, "schedules");
const appointmentsRef = collection(appointmateDB, "appointments");

// default view values
// TODO: Fix view showing placeholder content on mount.
const showModal = ref(false);
const schedules = ref([]);
const selectedDate = ref("");
const selectedTimePeriod = ref("");
const loadedProfileRef = ref(localStore.myProfile);
const loadedAppointmentRef = ref({
  id: 0,
  title: "Loading...",
  description:
    "No appointment loaded. Please wait a moment, or refresh the page instead",
  image_path: "/img/sample.jpg",
  host_id: "fbNsQCvXAaqGYkqRtvw4",
});

// states include: booked, available, host, unavailable
const stateRef = ref("");

// deciding factors of state
const isMyAppointment = ref(false);
const isFullSchedule = ref(false);
const isEditingSchedule = ref(false);
const isBooked = ref(false);

const props = defineProps({
  id: {
    type: String,
    default: "asd",
  },
});

onMounted(async () => {
  selectedDate.value = "None";
  selectedTimePeriod.value = "None";
  localStore.loadedAppointmentId = props.id;

  // get appointment
  const appointmentRef = doc(appointmateDB, "appointments", props.id);
  const appointmentSnap = await getDoc(appointmentRef);
  loadedAppointmentRef.value = appointmentSnap.data();

  // get username
  const profileRef = doc(
    appointmateDB,
    "profiles",
    loadedAppointmentRef.value.host_id
  );
  const profileSnap = await getDoc(profileRef);
  loadedProfileRef.value = profileSnap.data();

  // allow management if logged in user is host
  if (loadedAppointmentRef.value.host_id == localStore.myProfile.id) {
    isMyAppointment.value = true;
  }

  // get appointment schedules
  const schedulesQuery = query(
    schedulesRef,
    where("appointment_id", "==", props.id)
  );
  const schedulesSnap = await getDocs(schedulesQuery);

  // found no schedules
  if (schedulesSnap.size == 0) {
    console.error("Unable to find schedules");
    return;
  }

  // get all schedules
  const schedulesTemp = [];
  schedulesSnap.forEach((doc) => {
    schedulesTemp.push({
      id: doc.id,
      appointment_id: doc.data().appointment_id,
      timestart: doc.data().timestart,
      timeend: doc.data().timeend,
    });
  });
  schedules.value = schedulesTemp;
});

// show delete dialog (?)
function showConfirmationDialog(bool) {
  showModal.value = bool;
}

// actions to appointment
// TODO: Fix schedules not included on delete.
async function deleteAppointment() {
  showConfirmationDialog(false);

  if (await deleteDoc(doc(appointmentsRef, appointment_id))) {
    router.push({
      name: "profile",
      params: { username: localStore.myProfile.username },
    });
  }
}

// convert firebase timestamp to readable date
// TODO: need dev's preferred datetime format
function scheduleToDate(timestamp) {
  return timestamp.toDate().toLocaleDateString();
}

// convert firebase timestamp to readable time
function scheduleToTime(timestamp) {
  return timestamp.toDate().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

// get dates while avoiding duplicates
// TODO: fix dates sometimes not displaying properly
function getDates() {
  const x = schedules.value.filter((schedule) => {
    let unique = true;
    const set = new Set();
    console.log(schedule);
    set.add(schedule.timestart);
    schedules.value.forEach((item) => {
      if (
        scheduleToDate(item.timestart) == scheduleToDate(schedule.timestart) &&
        item != schedule
      ) {
        unique = false;
      }
    });
    return unique;
  });
  return x;
  /*
  const list = [];
  for (let i in schedules.value) {
    list.push(schedules.value[i].timestart);
  }
  return [...new Set(list)];
  */
}

// get time periods based on selected date
function getTimePeriods() {
  if (selectedDate.value != "None") {
    return schedules.value.filter(
      (schedule) =>
        scheduleToDate(schedule.timestart) == scheduleToDate(selectedDate.value)
    );
  }
  return [];
}

// TODO: Add capability to editing appointment schedule, etc.
</script>
<template>
  <!-- Create/Edit Appointment -->
  <main class="container mx-auto flex h-full flex-col overflow-y-auto">
    <section
      class="h-40 w-full shrink-0 bg-cover bg-center sm:h-60 md:h-80"
      :style="{
        'background-image': 'url(' + loadedAppointmentRef.image_path + ')',
      }"
    ></section>
    <main
      class="justify-stretch grid basis-full grid-cols-1 gap-10 bg-white px-10 py-10 sm:grid-cols-12"
    >
      <main
        class="flex grow-0 flex-col gap-2 bg-white sm:col-start-1 sm:col-end-8"
      >
        <section class="flex justify-between">
          <h1 class="text-3xl">{{ loadedAppointmentRef.title }}</h1>
          <span class="material-symbols-outlined">link</span>
        </section>
        <section class="flex justify-between">
          <RouterLink
            :to="{
              name: 'profile',
              params: { username: loadedProfileRef.username },
            }"
            href="#"
            class="text-gray-600"
            >{{ "@" + loadedProfileRef.username }}</RouterLink
          >
          <section class="flex items-center">
            <span>27 available</span>
            <span
              class="material-symbols-outlined cursor-pointer text-amber-400"
              @click="showConfirmationDialog(true)"
              >bookmark</span
            >
          </section>
        </section>
        <p class="whitespace-pre-wrap">
          {{ loadedAppointmentRef.description }}
        </p>
        <!--p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          eveniet, ipsum quia suscipit, pariatur dicta natus voluptatibus id
          sapiente dolorem eos quidem facere, incidunt et. Libero sit odio
          voluptatum nostrum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quibusdam quidem minima deleniti quod! Magnam
          eligendi animi, iste porro dignissimos ducimus sed, eius saepe
          molestiae, doloribus totam veritatis minus excepturi corrupti.
        </p-->
      </main>
      <!-- sidebar -->
      <aside class="shrink-0 sm:col-start-8 sm:col-end-13">
        <section class="flex flex-col gap-4">
          <!--when schedule is available-->
          <section
            v-if="!isMyAppointment"
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
            <header class="text-2xl">Available time schedules</header>
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >DATE</label
              >
              <select
                v-model="selectedDate"
                id="standard-select"
                class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="None">Select Date</option>
                <option
                  v-for="schedule in getDates()"
                  :value="schedule.timestart"
                >
                  {{ scheduleToDate(schedule.timestart) }}
                </option>
              </select>
            </article>
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >TIME</label
              >
              <select
                :disabled="selectedDate == 'None'"
                v-model="selectedTimePeriod"
                id="standard-select"
                class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="None">Select Time Period</option>
                <option
                  v-for="schedule in getTimePeriods()"
                  :value="schedule.id"
                >
                  {{
                    scheduleToTime(schedule.timestart) +
                    " - " +
                    scheduleToTime(schedule.timeend)
                  }}
                </option>
              </select>
            </article>
            <footer class="flex flex-row-reverse gap-4">
              <ButtonPrimary text="Book Appointment" />
            </footer>
          </section>
          <!--when booked-->
          <section
            v-if="isBooked && !isEditingSchedule"
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
            <header class="text-2xl">Booked appointment</header>
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >DATE</label
              >
              <select
                disabled
                id="standard-select"
                class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
                v
              >
                <option value="Option 1">Select Date</option>
                <option value="Option 2" selected>Oct 12, 2022 (Tue)</option>
                <option value="Option 3">Oct 13, 2022 (Wed)</option>
              </select>
            </article>
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >TIME</label
              >
              <select
                disabled
                id="standard-select"
                class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="Option 1">Select Time Period</option>
                <option value="Option 2" selected>9:00 AM - 10:00 AM</option>
                <option value="Option 3">10:00 AM - 11:00 AM</option>
                <option value="Option 3">11:00 AM - 12:00 PM</option>
              </select>
            </article>
            <footer class="flex flex-row-reverse gap-4">
              <ButtonPrimary text="Edit Booked Appointment" />
            </footer>
          </section>
          <!--when editing booked appointment -->
          <section
            v-if="isBooked && isEditingSchedule"
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
            <header class="text-2xl">Booked appointment</header>
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >DATE</label
              >
              <select
                id="standard-select"
                class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="Option 1">Select Date</option>
                <option value="Option 2" selected>Oct 12, 2022 (Tue)</option>
                <option value="Option 3">Oct 13, 2022 (Wed)</option>
              </select>
            </article>
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >TIME</label
              >
              <select
                id="standard-select"
                class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="Option 1">Select Time Period</option>
                <option value="Option 2" selected>9:00 AM - 10:00 AM</option>
                <option value="Option 3">10:00 AM - 11:00 AM</option>
                <option value="Option 3">11:00 AM - 12:00 PM</option>
              </select>
            </article>
            <footer class="flex flex-row-reverse flex-wrap-reverse gap-x-4">
              <ButtonAlternative text="Cancel" />
              <ButtonPrimary
                text="Delete"
                :click-action="showConfirmationDialog"
                variant="Danger"
              />
              <ButtonPrimary text="Reschedule" />
            </footer>
          </section>
          <!-- host perspective -->
          <section
            v-if="isMyAppointment"
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
            <header class="text-2xl">Booked appointments</header>
            <article class="flex flex-col">
              0 out of x schedules booked.
              <p v-for="schedule in schedules" :value="schedule.id">
                {{
                  scheduleToDate(schedule.timestart) +
                  " (" +
                  scheduleToTime(schedule.timestart) +
                  " - " +
                  scheduleToTime(schedule.timeend) +
                  ")"
                }}
              </p>
            </article>
            <footer class="flex flex-row-reverse gap-4">
              <ButtonPrimary text="Edit appointment" />
            </footer>
          </section>
          <!--ButtonPrimary
            text="TempDelete"
            :click-action="showConfirmationDialog"
            variant="Danger"
          /-->
        </section>
      </aside>
    </main>
  </main>
  <Teleport to="body">
    <ConfirmationModal
      :show="showModal"
      @cancel="showConfirmationDialog(false)"
      @confirm="deleteAppointment()"
      title="Delete Appointment"
      message="Are you sure you want to delete? This cannot be undone."
    />
  </Teleport>
</template>
