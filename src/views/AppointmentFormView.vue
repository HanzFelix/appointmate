<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonAlternative from "../components/ButtonAlternative.vue";
</script>
<template>
  <!-- Create/Edit Appointment -->
  <main class="container mx-auto flex h-full flex-col overflow-y-auto">
    <section
      class="h-80 w-full shrink-0 bg-cover bg-center"
      style="background-image: url('/img/sample.jpg')"
    ></section>
    <main
      class="justify-stretch grid basis-full grid-cols-1 gap-10 bg-white px-10 py-10 md:grid-cols-12"
    >
      <main class="flex flex-col gap-2 bg-white md:col-start-1 md:col-end-8">
        <header class="text-2xl">Details</header>
        <form action="#" class="flex flex-col gap-4">
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
            ></textarea>
          </article>
          <footer class="flex flex-row-reverse gap-4">
            <ButtonAlternative text="Discard/Delete" />
            <ButtonPrimary text="Create/Update" />
          </footer>
        </form>
      </main>
      <aside class="shrink-0 bg-white md:col-start-8 md:col-end-13">
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
        </section>
      </aside>
    </main>
  </main>
</template>
