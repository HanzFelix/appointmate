<script setup>
import { ref } from "vue";
import AppointmentCardItem from "../components/AppointmentCardItem.vue";
import QuickLinkItem from "../components/QuickLinkItem.vue";

const appointmentList = ref([
  {
    id: 0,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/public/img/sample.jpg",
  },
  {
    id: 0,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/public/img/sample.jpg",
  },
  {
    id: 0,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/public/img/sample.jpg",
  },
  {
    id: 0,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/public/img/sample.jpg",
  },
  {
    id: 0,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/public/img/sample.jpg",
  },
  {
    id: 0,
    title: "Card Title",
    user: "@username",
    description: "Some description",
    datetime: "01/01/2001 12:00 AM (in 7 days)",
    image_src: "/public/img/sample.jpg",
  },
]);
</script>
<template>
  <!-- Profile -->
  <main
    class="container flex flex-col-reverse sm:grid sm:grid-cols-12 mx-auto bg-white justify-stretch px-10 box-border gap-10 overflow-hidden sm:mt-10 justify-stretch overflow-y-auto"
  >
    <main class="sm:col-start-1 sm:col-end-8">
      <nav
        class="text-sm font-medium text-center text-black border-b border-transparent sticky mb-2 top-0 bg-white shadow-[0_8px_4px_-4px_rgba(0,0,0,0.1)]"
      >
        <ul class="flex">
          <li class="w-full -mb-px">
            <a
              href="#"
              class="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-amber-400 hover:border-amber-400"
              >Hosted Appointments</a
            >
          </li>
          <li class="w-full -mb-px">
            <a
              href="#"
              class="inline-block w-full p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active"
              aria-current="page"
              >Booked Appointments</a
            >
          </li>
        </ul>
      </nav>
      <div class="flex flex-col gap-4 items-stretch pb-64">
        <AppointmentCardItem
          v-for="item in appointmentList"
          v-bind:appointment="item"
          v-bind:key="item.id"
        ></AppointmentCardItem>
        <!--article
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
            src="https://hanzfelix.github.io/click-directory/img/default_bg_2.jpg"
            alt=""
            class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
          />
        </article>
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
            src="https://hanzfelix.github.io/click-directory/img/default_bg_2.jpg"
            alt=""
            class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
          />
        </article>
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
            src="https://hanzfelix.github.io/click-directory/img/default_bg_2.jpg"
            alt=""
            class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
          />
        </article>
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
            src="https://hanzfelix.github.io/click-directory/img/default_bg_2.jpg"
            alt=""
            class="md:w-36 shrink-0 h-28 object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
          />
        </article-->
      </div>
    </main>
    <aside
      class="sm:col-start-8 sm:col-end-13 bg-white shrink-0 flex flex-col gap-2 sm:h-[inherit] pt-10 sm:pt-0"
    >
      <section class="sticky top-0">
        <header class="text-2xl flex flex-col items-center">
          <img
            src="/public/img/ak_stare.png"
            class="bg-indigo-800 rounded-full border-4 border-gray-300 w-32"
            alt=""
          />
          <h3 class="text-lg whitespace-nowrap text-ellipsis overflow-hidden">
            @username
          </h3>
        </header>
        <QuickLinkItem title="Host an appointment" link="appointmentform" />
      </section>
    </aside>
  </main>
</template>
