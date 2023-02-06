<script setup>
import QuickLinkItem from "../components/QuickLinkItem.vue";
import AppointmentCardList from "../components/AppointmentCardList.vue";
import { useLocalStore } from "../stores/local";
import { ref, onMounted } from "vue";

const localStore = useLocalStore();
const username = ref("user");

onMounted(async () => {
  username.value = localStore.myProfile.username;
});
</script>
<template>
  <!-- Home -->
  <main
    class="container mx-auto grid h-full grid-cols-1 gap-10 overflow-hidden overflow-y-auto bg-zinc-100 px-10 py-10 sm:grid-cols-12"
  >
    <main class="flex flex-col gap-2 sm:col-start-1 sm:col-end-8">
      <header class="text-2xl">Upcoming</header>
      <AppointmentCardList limit="3" />
      <footer class="text-right font-medium text-orange-600 underline">
        <RouterLink to="profile" href="#">See all...</RouterLink>
      </footer>
    </main>
    <aside class="shrink-0 sm:col-start-8 sm:col-end-13">
      <section class="flex flex-col gap-2">
        <header class="text-2xl">Hello {{ username }},</header>
        <QuickLinkItem title="See upcoming appointments" link="profile" />
        <QuickLinkItem title="See available appointments" link="profile" />
      </section>
      <section
        class="mt-8 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-md shadow-zinc-400"
      >
        <h1 class="text-xl">Add appointment</h1>
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
            class="mt-2 rounded-lg bg-amber-400 p-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 active:bg-orange-600"
            type="submit"
          >
            View
          </button>
        </form>
      </section>
    </aside>
  </main>
</template>
