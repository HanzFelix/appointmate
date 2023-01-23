<template>
  <!-- Create/Edit Appointment -->
  <main class="container mx-auto overflow-y-auto">
    <section
      class="h-80 w-full bg-cover bg-center"
      style="background-image: url('/img/sample.jpg')"
    ></section>
    <main
      class="justify-stretch container mx-auto grid grid-cols-1 gap-10 bg-white px-10 py-10 sm:grid-cols-12"
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
      <aside class="shrink-0 bg-white sm:col-start-8 sm:col-end-13">
        <section class="flex flex-col gap-2">
          <header class="text-2xl">Available time schedules</header>
          <article class="flex flex-col">
            <label
              for="appointment_id"
              class="text-xs font-medium text-orange-600"
              >VIEW APPOINTMENT</label
            >
            <input
              type="text"
              name="appointment_id"
              class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
              placeholder="Enter appointment code or URL"
              id=""
            />
          </article>
        </section>
        <section class="mt-8 flex flex-col gap-2">
          <h1 class="text-2xl">Add appointment</h1>
          <article
            class="border-box flex items-center justify-between rounded-xl bg-white p-4 shadow-md"
          >
            <span>Host an appointment</span>
            <span class="material-symbols-outlined text-orange-600"
              >arrow_circle_right</span
            >
          </article>
          <p class="mt-1 text-center">--or--</p>
          <form action="#" class="flex flex-col">
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs font-medium text-orange-600"
                >VIEW APPOINTMENT</label
              >
              <input
                type="text"
                name="appointment_id"
                class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
                placeholder="Enter appointment code or URL"
                id=""
              />
            </article>
            <button
              class="mt-2 rounded-lg bg-amber-400 p-2 text-sm font-medium text-white"
              type="submit"
            >
              View
            </button>
          </form>
        </section>
      </aside>
    </main>
  </main>
</template>
