<script setup>
import { ref } from "vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonAlternative from "../components/ButtonAlternative.vue";
import { useUserStore } from "../stores/user";
import { useAppointmentStore } from "../stores/appointment";
import { useRouter } from "vue-router";
const appointmentStore = useAppointmentStore();
const userStore = useUserStore();
const router = useRouter();

const appointmentTitle = ref("");
const appointmentDesc = ref("");
const appointmentImg = ref("/img/sample.jpg");

async function onSubmit() {
  const appointment = {
    title: appointmentTitle.value,
    description: appointmentDesc.value,
    image_path: appointmentImg.value,
    host_id: userStore.myUserProfile.id,
  };
  if (await appointmentStore.addAppointment(appointment)) {
    router.push({
      name: "profile",
      params: { username: userStore.myUserProfile.id },
    });
  }
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
              id=""
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
            ></textarea>
          </article>
        </main>
      </main>
      <aside class="shrink-0 bg-white lg:col-start-8 lg:col-end-13">
        <section class="flex flex-col gap-2">
          <header class="text-2xl">Available time schedules</header>
          <!--date schedule-->
          <article
            class="flex flex-col justify-items-stretch gap-2"
            v-for="n in 2"
          >
            <article class="flex items-center justify-between gap-2">
              <select
                id="standard-select"
                class="shadow-m basis-full rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="Option 1">Select Date</option>
                <option value="Option 2">Oct 12, 2022 (Tue)</option>
                <option value="Option 2">Jan 25, 2023 (Wed)</option>
              </select>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-orange-600"
                  >content_copy</span
                >
                <span class="material-symbols-outlined text-orange-600"
                  >cancel</span
                >
              </div>
            </article>
            <!--time schedule-->
            <article v-for="n in 2" class="flex items-center justify-end gap-2">
              <div
                class="flex basis-full flex-wrap items-center justify-end gap-2"
              >
                <select
                  id="standard-select"
                  class="box-border basis-5/12 rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
                >
                  <option value="Option 1">Time Start</option>
                  <option value="Option 2">10:00 AM</option>
                  <option value="Option 3">9:00 AM</option>
                </select>
                <select
                  id="standard-select"
                  class="box-border basis-5/12 rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
                >
                  <option value="Option 1">Time End</option>
                  <option value="Option 2">10:00 AM</option>
                  <option value="Option 3">9:00 AM</option>
                </select>
              </div>
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-white"
                  >content_copy</span
                >
                <span class="material-symbols-outlined text-orange-600"
                  >add_circle</span
                >
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
