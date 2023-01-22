<script setup>
import { ref } from "vue";
import AppointmentCardsView from "./AppointmentCardsView.vue";
import QuickLinkItem from "../components/QuickLinkItem.vue";

const activeTab = ref(1);

function setActiveTab(num) {
  activeTab.value = num;
}
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
            <RouterLink
              to="/profile/hosted"
              @click="setActiveTab(1)"
              :class="{
                'text-orange-600 border-orange-600': activeTab == 1,
              }"
              class="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-amber-400 hover:border-amber-400"
            >
              Hosted Appointments
            </RouterLink>
          </li>
          <li class="w-full -mb-px">
            <RouterLink
              to="/profile/booked"
              @click="setActiveTab(2)"
              :class="{
                'text-orange-600 border-orange-600': activeTab == 2,
              }"
              class="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-amber-400 hover:border-amber-400"
            >
              Booked Appointments
            </RouterLink>
          </li>
        </ul>
      </nav>
      <RouterView />
    </main>
    <aside
      class="sm:col-start-8 sm:col-end-13 bg-white shrink-0 flex flex-col gap-2 sm:h-[inherit] pt-10 sm:pt-0"
    >
      <section class="sticky top-0">
        <header class="text-2xl flex flex-col items-center">
          <img
            src="/img/ak_stare.png"
            class="bg-indigo-800 rounded-full border-4 border-gray-300 w-32"
            alt=""
          />
          <h3 class="text-lg whitespace-nowrap text-ellipsis overflow-hidden">
            @username
          </h3>
        </header>
        <QuickLinkItem title="Host an appointment" link="/appointmentform" />
      </section>
    </aside>
  </main>
</template>
