<script setup>
import { ref } from "vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonAlternative from "../components/ButtonAlternative.vue";
import { useRouter } from "vue-router";
import { appointmateDB } from "../firebase";
import {
  Timestamp,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  getDoc,
} from "firebase/firestore";
import { useLocalStore } from "../stores/local";

// firebase
const appointmentsRef = collection(appointmateDB, "appointments");
const schedulesRef = collection(appointmateDB, "schedules");
const localStore = useLocalStore();
const router = useRouter();

// default form values
const appointmentTitle = ref("");
const appointmentDesc = ref("");
const appointmentImg = ref("/img/sample.jpg");
const schedules = ref([
  {
    date: "2023-02-03",
    times: [
      { starttime: "13:00", endtime: "14:00" },
      { starttime: "", endtime: "" },
    ],
  },
  { date: "", times: [] },
]);

// add appointment and schedules to firestore
async function onSubmit() {
  // convert to object
  const appointment = {
    title: appointmentTitle.value,
    description: appointmentDesc.value,
    image_path: appointmentImg.value,
    host_id: localStore.myProfile.id,
  };

  // add appointment to firestore
  const docRef = await addDoc(appointmentsRef, appointment);
  localStore.loadedAppointmentId = docRef.id;

  // parse schedules from inputs
  console.log(schedules.value);
  const scheduleList = [];
  for (let s_index in schedules.value) {
    const schedule = schedules.value[s_index];
    if (schedule.date == "") continue;
    for (let t_index in schedule.times) {
      const time = schedule.times[t_index];
      if (time.starttime == "") continue;
      if (time.endtime == "") continue;

      scheduleList.push({
        appointee_id: "",
        appointment_id: docRef.id,
        timestart: stringToTimeStamp(schedule.date, time.starttime),
        timeend: stringToTimeStamp(schedule.date, time.endtime),
      });
    }
  }
  for (let i in scheduleList) {
    await addDoc(schedulesRef, scheduleList[i]);
  }

  router.push({
    name: "appointmentdetails",
    params: { id: localStore.loadedAppointmentId },
  });
}

// convert input date and time to Date()
function stringToTimeStamp(day, time) {
  const [y, m, d] = day.split("-");
  const [hh, mm] = time.split(":");

  return Timestamp.fromDate(new Date(+y, m - 1, +d, hh, mm));
}

// checks whether the input is not equivalent to an empty string
function hasValue(input) {
  return input != "";
}

/*function getDates() {
  let dates = [];
  let starttime = "00:00:00";
  let startdate = new Date().toLocaleDateString();
  let tempdate = new Date(startdate + " " + starttime);
  for (let i = 1; i <= 56; i++) {
    dates.push(tempdate.setDate(tempdate.getDate() + 1));
  }
  return dates;
}

function getTimes() {
  let times = [];
  let endtime = "23:00:00";
  let x = 60 * 60 * 1000;
}*/

// append an empty date for user to expand their schedule
function addDate(schedule) {
  schedule.times.push({ starttime: "", endtime: "" });
  schedules.value.push({ date: "", times: [] });
}

// append an empty time period for user to expand their schedule
function addTime(times) {
  times.push({ starttime: "", endtime: "" });
}

// remove a section of date/time from the list of schedules
function removeSchedule(list, index) {
  list.splice(index, 1);
}

// allow the user to reuse a set of time periods for other dates.
function duplicateSchedule(schedule) {
  const times = [];
  for (let i = 0; i < schedule.times.length; i++) {
    times.push({
      starttime: schedule.times[i].starttime,
      endtime: schedule.times[i].endtime,
    });
  }
  const duplicatedSchedule = {
    date: "",
    times: times,
  };

  schedules.value.splice(schedules.value.length - 1, 0, duplicatedSchedule);
}
</script>
<template>
  <!-- Create/Edit Appointment -->
  <main class="container mx-auto flex h-full flex-col overflow-y-auto">
    <section
      class="flex h-40 w-full shrink-0 items-end justify-end bg-cover bg-center px-12 py-6 sm:h-60 md:h-80"
      style="background-image: url('/img/sample.jpg')"
    >
      <label
        for="input-image"
        id="label-edit-image"
        class="material-symbols-outlined cursor-pointer rounded-xl bg-white p-2 text-4xl text-orange-600 shadow-md shadow-zinc-400 hover:text-amber-500"
        >add_photo_alternate</label
      >
      <input
        type="file"
        name="image"
        id="input-image"
        hidden
        accept="image/*"
      />
    </section>
    <form
      @submit.stop.prevent="onSubmit"
      class="justify-stretch grid basis-full grid-cols-1 gap-10 bg-white p-10 lg:grid-cols-12"
    >
      <main class="flex flex-col gap-2 bg-white lg:col-start-1 lg:col-end-8">
        <header class="text-2xl">Details</header>
        <main class="flex flex-col gap-4">
          <article class="flex flex-col">
            <label
              for="appointment_name"
              class="text-xs font-medium text-orange-600"
              >TITLE</label
            >
            <input
              type="text"
              name="appointment_name"
              class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
              placeholder="Enter title"
              v-model="appointmentTitle"
              required
            />
          </article>
          <article class="flex flex-col">
            <label
              for="appointment_description"
              class="text-xs font-medium text-orange-600"
              >DESCRIPTION</label
            >
            <textarea
              class="h-min border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
              name="appointment_description"
              id=""
              placeholder="Enter description"
              v-model="appointmentDesc"
              required
            ></textarea>
          </article>
        </main>
      </main>
      <aside class="shrink-0 bg-white lg:col-start-8 lg:col-end-13">
        <section class="flex flex-col gap-2">
          <header class="text-2xl">Set available time schedules</header>
          <!-- dynamic day schedule-->
          <article
            class="flex flex-col justify-items-stretch gap-2"
            v-for="(schedule, index) in schedules"
          >
            <article class="flex items-center justify-between gap-2">
              <input
                type="date"
                v-model="schedule.date"
                class="shadow-m basis-full rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              />
              <div class="flex gap-2">
                <button
                  type="button"
                  @click="duplicateSchedule(schedule)"
                  :disabled="
                    !hasValue(schedule.date) ||
                    schedule.times.length == 0 ||
                    !hasValue(schedule.times[0].endtime)
                  "
                  class="material-symbols-outlined text-orange-600 disabled:text-white"
                >
                  content_copy
                </button>
                <button
                  type="button"
                  v-if="index != schedules.length - 1"
                  @click="removeSchedule(schedules, index)"
                  class="material-symbols-outlined text-orange-600"
                >
                  cancel
                </button>
                <button
                  type="button"
                  @click="addDate(schedule)"
                  v-if="index == schedules.length - 1"
                  :disabled="!hasValue(schedule.date)"
                  class="material-symbols-outlined text-orange-600 disabled:text-zinc-400"
                >
                  add_circle
                </button>
              </div>
            </article>
            <!--time schedule-->
            <article
              v-for="(time, t_index) in schedule.times"
              class="flex items-center justify-end gap-2"
            >
              <div
                class="flex basis-full flex-wrap items-center justify-end gap-2"
              >
                <input
                  :disabled="!hasValue(schedule.date)"
                  type="time"
                  v-model="time.starttime"
                  class="box-border basis-5/12 rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600 disabled:text-zinc-400"
                />
                <input
                  :disabled="
                    !hasValue(schedule.date) || !hasValue(time.starttime)
                  "
                  type="time"
                  v-model="time.endtime"
                  class="box-border basis-5/12 rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600 disabled:text-zinc-400"
                />
              </div>
              <div class="flex gap-2">
                <button
                  @click="removeSchedule(schedule.times, t_index)"
                  type="button"
                  v-if="t_index != schedule.times.length - 1"
                  class="material-symbols-outlined text-orange-600 disabled:text-zinc-400"
                >
                  cancel
                </button>
                <span
                  :disabled="!hasValue(time.endtime)"
                  class="material-symbols-outlined text-white"
                >
                  content_copy
                </span>
                <button
                  @click="addTime(schedule.times)"
                  type="button"
                  v-if="t_index == schedule.times.length - 1"
                  :disabled="!hasValue(time.endtime)"
                  class="material-symbols-outlined text-orange-600 disabled:text-zinc-400"
                >
                  add_circle
                </button>
              </div>
            </article>
          </article>
          <footer class="mt-4 flex flex-row-reverse gap-4">
            <ButtonAlternative text="Discard/Delete" />
            <ButtonPrimary button-type="submit" text="Create/Update" />
          </footer>
        </section>
      </aside>
    </form>
  </main>
</template>
