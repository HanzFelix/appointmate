<template>
  <!-- Create/Edit Appointment -->
  <main class="overflow-y-auto">
    <section
      class="w-full h-80 bg-cover bg-center"
      style="background-image: url('../public/img/sample.jpg')"
    ></section>
    <main
      class="container grid grid-cols-1 sm:grid-cols-12 mx-auto bg-white justify-stretch px-10 gap-10 py-10"
    >
      <main
        class="sm:col-start-1 sm:col-end-8 flex flex-col bg-white grow-0 gap-2"
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
      <aside class="sm:col-start-8 sm:col-end-13 bg-white shrink-0">
        <section class="flex flex-col gap-2">
          <header class="text-2xl">Quick Actions</header>
          <article
            class="p-4 bg-white border-box shadow-md rounded-xl flex justify-between items-center gap-2"
          >
            <span>See upcoming appointments</span>
            <span class="material-symbols-outlined text-orange-600"
              >arrow_circle_right</span
            >
          </article>
          <article
            class="p-4 bg-white shadow-md border-box rounded-xl flex justify-between items-center"
          >
            <span>See available appointments</span>
            <span class="material-symbols-outlined text-orange-600"
              >arrow_circle_right</span
            >
          </article>
        </section>
        <section class="flex flex-col gap-2 mt-8">
          <h1 class="text-2xl">Add appointment</h1>
          <article
            class="p-4 shadow-md bg-white border-box rounded-xl flex justify-between items-center"
          >
            <span>Host an appointment</span>
            <span class="material-symbols-outlined text-orange-600"
              >arrow_circle_right</span
            >
          </article>
          <p class="text-center mt-1">--or--</p>
          <form action="#" class="flex flex-col">
            <article class="flex flex-col">
              <label
                for="appointment_id"
                class="text-xs text-orange-600 font-medium"
                >VIEW APPOINTMENT</label
              >
              <input
                type="text"
                name="appointment_id"
                class="py-2 focus:border-b-orange-600 outline-0 border-b-2 border-gray-300"
                placeholder="Enter appointment code or URL"
                id=""
              />
            </article>
            <button
              class="mt-2 p-2 text-sm bg-amber-400 rounded-lg text-white font-medium"
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
