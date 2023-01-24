<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonAlternative from "../components/ButtonAlternative.vue";
import QuickLinkItem from "../components/QuickLinkItem.vue";
</script>
<template>
  <!-- Create/Edit Appointment -->
  <main class="container mx-auto flex h-full flex-col overflow-y-auto">
    <section
      class="h-40 w-full shrink-0 bg-cover bg-center sm:h-60 md:h-80"
      style="background-image: url('/img/sample.jpg')"
    ></section>
    <main
      class="justify-stretch grid basis-full grid-cols-1 gap-10 bg-white px-10 py-10 sm:grid-cols-12"
    >
      <main
        class="flex grow-0 flex-col gap-2 bg-white sm:col-start-1 sm:col-end-8"
      >
        <section class="flex justify-between">
          <h1 class="text-3xl">Multiline Title that Exceeds a Few Lines</h1>
          <span class="material-symbols-outlined">link</span>
        </section>
        <section class="flex justify-between">
          <RouterLink to="/profile" href="#" class="text-gray-600"
            >@username</RouterLink
          >
          <section>
            <span>27 available</span>
            <span class="material-symbols-outlined text-amber-400"
              >bookmark</span
            >
          </section>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          eveniet, ipsum quia suscipit, pariatur dicta natus voluptatibus id
          sapiente dolorem eos quidem facere, incidunt et. Libero sit odio
          voluptatum nostrum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quibusdam quidem minima deleniti quod! Magnam
          eligendi animi, iste porro dignissimos ducimus sed, eius saepe
          molestiae, doloribus totam veritatis minus excepturi corrupti.
        </p>
      </main>
      <!-- sidebar -->
      <aside class="shrink-0 sm:col-start-8 sm:col-end-13">
        <section class="flex flex-col gap-4">
          <header class="text-2xl">
            Available time schedules/Booked appointment/Booked appointments
          </header>
          <!--when booked appointment is available-->
          <section
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
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
                <option value="Option 2">Oct 12, 2022 (Tue)</option>
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
                <option value="Option 2">9:00 AM - 10:00 AM</option>
                <option value="Option 3">10:00 AM - 11:00 AM</option>
                <option value="Option 3">11:00 AM - 12:00 PM</option>
              </select>
            </article>
            <footer class="flex flex-row-reverse gap-4">
              <ButtonPrimary text="Book Appointment" />
            </footer>
          </section>
          <!--when booked-->
          <section
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
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
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
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
            <footer class="flex flex-row-reverse gap-4">
              <ButtonPrimary text="Reschedule" />
              <ButtonAlternative text="Cancel" />
            </footer>
          </section>
          <!-- host perspective -->
          <section
            class="flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400"
          >
            <article class="flex flex-col">
              <QuickLinkItem
                title="Host an appointment"
                link="appointmentform"
              />
            </article>
            <footer class="flex flex-row-reverse gap-4">
              <ButtonPrimary text="Edit appointment" />
            </footer>
          </section>
        </section>
      </aside>
    </main>
  </main>
</template>
