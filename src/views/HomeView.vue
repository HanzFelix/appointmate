<template>
  <!-- Home -->
  <main
    class="container grid grid-cols-1 sm:grid-cols-12 mx-auto bg-white justify-stretch px-10 gap-10 overflow-hidden mt-14 py-10"
  >
    <main
      class="sm:col-start-1 sm:col-end-8 flex flex-col bg-white grow-0 gap-2"
    >
      <header class="text-2xl">At a Glance</header>
      <div class="flex flex-col gap-4">
        <article
          class="flex md:flex-row flex-col-reverse bg-white rounded-xl justify-items-stretch shadow-md"
        >
          <div
            class="flex flex-col justify-center py-2 px-4 box-border overflow-hidden"
          >
            <h2 class="text-xl whitespace-nowrap text-ellipsis truncate">
              Card Title That Exceeds a few lines aaaaa a aaaaa
            </h2>
            <p class="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
              @username
            </p>
            <p
              class="text-sm leading-4 h-8 flex-auto overflow-hidden text-ellipsis"
            >
              May May May May May May May May or may not contain an image.
              Filler text to fill enough to end with an ellipsis
            </p>
            <p
              class="text-xs whitespace-nowrap text-ellipsis overflow-hidden mt-1"
            >
              01/01/2001 12:00 AM (in 7 days)
            </p>
          </div>
          <img
            src="/public/img/sample.jpg"
            alt=""
            class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
          />
        </article>
        <RouterLink
          class="flex md:flex-row flex-col-reverse bg-white rounded-xl justify-items-stretch shadow-md"
          to="/appointmentdetails"
        >
          <div
            class="flex flex-col justify-center py-2 px-4 box-border overflow-hidden"
          >
            <h2 class="text-xl whitespace-nowrap text-ellipsis truncate">
              Card Title That Exceeds a few lines aaaaa a aaaaa
            </h2>
            <p class="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
              @username
            </p>
            <p
              class="text-sm leading-4 h-8 flex-auto overflow-hidden text-ellipsis"
            >
              May May May May May May May May or may not contain an image.
              Filler text to fill enough to end with an ellipsis
            </p>
            <p
              class="text-xs whitespace-nowrap text-ellipsis overflow-hidden mt-1"
            >
              01/01/2001 12:00 AM (in 7 days)
            </p>
          </div>
          <img
            src="https://hanzfelix.github.io/click-directory/img/default_bg_2.jpg"
            alt=""
            class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
          />
        </RouterLink>
        <footer class="text-right text-orange-600 font-medium underline">
          <a href="#">See all...</a>
        </footer>
      </div>
    </main>
    <aside class="sm:col-start-8 sm:col-end-13 bg-white shrink-0">
      <section class="flex flex-col gap-2">
        <header class="text-2xl">Quick Actions</header>
        <article
          class="p-4 bg-blue-300 border-box shadow-md rounded-xl flex justify-between items-center gap-2"
        >
          <span>See upcoming appointments</span>
          <span class="material-symbols-outlined text-orange-600"
            >arrow_circle_right</span
          >
        </article>
        <article
          class="p-4 bg-blue-300 shadow-md border-box rounded-xl flex justify-between items-center"
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
</template>
