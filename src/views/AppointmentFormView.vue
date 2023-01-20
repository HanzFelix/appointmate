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
        <header class="text-2xl">Details</header>
        <form action="#" class="flex flex-col gap-4">
          <article class="flex flex-col">
            <label
              for="appointment_name"
              class="text-xs text-orange-600 font-medium"
              >TITLE</label
            >
            <input
              type="text"
              name="appointment_name"
              class="py-2 focus:border-b-orange-600 outline-0 border-b-2 border-gray-300"
              placeholder="Enter title"
              id=""
            />
          </article>
          <article class="flex flex-col">
            <label
              for="appointment_description"
              class="text-xs text-orange-600 font-medium"
              >DESCRIPTION</label
            >
            <textarea
              class="py-2 focus:border-b-orange-600 outline-0 border-b-2 border-gray-300 h-min"
              name="appointment_description"
              id=""
              placeholder="Enter description"
            ></textarea>
          </article>
          <footer class="flex flex-row-reverse gap-4">
            <button
              class="mt-2 py-2 px-6 text-sm bg-amber-400 rounded-lg text-white font-medium"
              type="submit"
            >
              Create/Update
            </button>
            <button
              class="mt-2 py-2 px-6 text-sm bg-amber-400 rounded-lg text-white font-medium"
              type="submit"
            >
              Discard/Delete
            </button>
          </footer>
        </form>
      </main>
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
