<template>
  <!-- Create/Edit Appointment -->
  <main class="container mx-auto flex h-full flex-col overflow-y-auto">
    <section
      class="h-80 w-full shrink-0 bg-cover bg-center"
      style="background-image: url('/img/sample.jpg')"
    ></section>
    <main
      class="justify-stretch grid basis-full grid-cols-1 gap-10 bg-white px-10 py-10 sm:grid-cols-12"
    >
      <main class="flex flex-col gap-2 bg-white sm:col-start-1 sm:col-end-8">
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
            <button
              class="mt-2 rounded-lg bg-amber-400 py-2 px-6 text-sm font-medium text-white"
              type="submit"
            >
              Create/Update
            </button>
            <button
              class="mt-2 rounded-lg bg-amber-400 py-2 px-6 text-sm font-medium text-white"
              type="submit"
            >
              Discard/Delete
            </button>
          </footer>
        </form>
      </main>
      <aside class="shrink-0 bg-white sm:col-start-8 sm:col-end-13">
        <section class="flex flex-col justify-items-stretch gap-2">
          <header class="text-2xl">Available time schedules</header>
          <article class="flex items-center justify-between gap-2">
            <select
              id="standard-select"
              class="shadow-m basis-full rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
            >
              <option value="Option 1">Select Date</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
              <option value="Option length">
                Option that has too long of a value
              </option>
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
          <article class="flex items-center justify-between pl-8">
            <div class="flex gap-2">
              <select
                id="standard-select"
                class="shadow-m basis-full rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="Option 1">Select Time</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option length">Option that</option>
              </select>
              <select
                id="standard-select"
                class="shadow-m basis-full rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"
              >
                <option value="Option 1">Select Time</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option length">Option that</option>
              </select>
            </div>
            <div class="flex gap-2">
              <span class="material-symbols-outlined text-orange-600"
                >add_circle</span
              >
            </div>
          </article>
        </section>
      </aside>
    </main>
  </main>
</template>
