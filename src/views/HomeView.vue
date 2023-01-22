<script setup>
import QuickLinkItem from "../components/QuickLinkItem.vue";
</script>
<template>
  <!-- Home -->
  <main
    class="justify-stretch container mx-auto grid grid-cols-1 gap-10 overflow-hidden overflow-y-auto bg-white px-10 py-10 sm:grid-cols-12"
  >
    <main
      class="flex grow-0 flex-col gap-2 bg-white sm:col-start-1 sm:col-end-8"
    >
      <header class="text-2xl">Upcoming</header>
      <div class="flex flex-col gap-4">
        <article
          class="flex flex-col-reverse justify-items-stretch rounded-xl bg-white shadow-md md:flex-row"
        >
          <div
            class="box-border flex flex-col justify-center overflow-hidden py-2 px-4"
          >
            <h2 class="truncate text-ellipsis whitespace-nowrap text-xl">
              Card Title That Exceeds a few lines aaaaa a aaaaa
            </h2>
            <p class="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
              @username
            </p>
            <p
              class="h-8 flex-auto overflow-hidden text-ellipsis text-sm leading-4"
            >
              May May May May May May May May or may not contain an image.
              Filler text to fill enough to end with an ellipsis
            </p>
            <p
              class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs"
            >
              01/01/2001 12:00 AM (in 7 days)
            </p>
          </div>
          <img
            src="/img/sample.jpg"
            alt=""
            class="h-28 shrink-0 rounded-t-xl object-cover md:w-36 md:rounded-r-xl md:rounded-tl-none"
          />
        </article>
        <RouterLink
          class="flex flex-col-reverse justify-items-stretch rounded-xl bg-white shadow-md md:flex-row"
          to="/appointmentdetails"
        >
          <div
            class="box-border flex flex-col justify-center overflow-hidden py-2 px-4"
          >
            <h2 class="truncate text-ellipsis whitespace-nowrap text-xl">
              Card Title That Exceeds a few lines aaaaa a aaaaa
            </h2>
            <p class="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
              @username
            </p>
            <p
              class="h-8 flex-auto overflow-hidden text-ellipsis text-sm leading-4"
            >
              May May May May May May May May or may not contain an image.
              Filler text to fill enough to end with an ellipsis
            </p>
            <p
              class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs"
            >
              01/01/2001 12:00 AM (in 7 days)
            </p>
          </div>
          <img
            src="https://hanzfelix.github.io/click-directory/img/default_bg_2.jpg"
            alt=""
            class="h-28 shrink-0 rounded-t-xl object-cover md:w-36 md:rounded-r-xl md:rounded-tl-none"
          />
        </RouterLink>
        <footer class="text-right font-medium text-orange-600 underline">
          <RouterLink to="profile" href="#">See all...</RouterLink>
        </footer>
      </div>
    </main>
    <aside class="shrink-0 bg-white sm:col-start-8 sm:col-end-13">
      <section class="flex flex-col gap-2">
        <header class="text-2xl">Quick Actions</header>
        <QuickLinkItem title="See upcoming appointments" link="profile" />
        <QuickLinkItem title="See available appointments" link="profile" />
      </section>
      <section class="mt-8 flex flex-col gap-2">
        <h1 class="text-2xl">Add appointment</h1>
        <QuickLinkItem title="Host an appointment" link="appointmentform" />
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
            class="mt-2 rounded-lg bg-amber-400 p-2 text-sm font-medium text-white hover:bg-amber-500"
            type="submit"
          >
            View
          </button>
        </form>
      </section>
    </aside>
  </main>
</template>
