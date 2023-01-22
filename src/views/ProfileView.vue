<script setup>
import { ref } from "vue";
import AppointmentCardList from "../components/AppointmentCardList.vue";
import QuickLinkItem from "../components/QuickLinkItem.vue";

const activeTab = ref(1);

function setActiveTab(num) {
  activeTab.value = num;
}
</script>
<template>
  <!-- Profile -->
  <main
    class="justify-stretch justify-stretch container mx-auto box-border flex flex-col-reverse gap-10 overflow-hidden overflow-y-auto bg-white px-10 sm:mt-10 sm:grid sm:grid-cols-12"
  >
    <main class="sm:col-start-1 sm:col-end-8">
      <nav
        class="sticky top-0 mb-2 border-b border-transparent bg-white text-center text-sm font-medium text-black shadow-[0_8px_4px_-4px_rgba(0,0,0,0.1)]"
      >
        <ul class="flex">
          <li class="-mb-px w-full">
            <a
              href="#"
              @click="setActiveTab(1)"
              :class="{
                'border-orange-600 text-orange-600': activeTab == 1,
              }"
              class="inline-block w-full rounded-t-lg border-b-2 border-transparent p-4 hover:border-amber-400 hover:text-amber-400"
            >
              Hosted Appointments
            </a>
          </li>
          <li class="-mb-px w-full">
            <a
              href="#"
              @click="setActiveTab(2)"
              :class="{
                'border-orange-600 text-orange-600': activeTab == 2,
              }"
              class="inline-block w-full rounded-t-lg border-b-2 border-transparent p-4 hover:border-amber-400 hover:text-amber-400"
            >
              Booked Appointments
            </a>
          </li>
        </ul>
      </nav>
      <AppointmentCardList
        filter="hosted"
        :class="{
          hidden: activeTab != 1,
        }"
      />
      <AppointmentCardList
        filter="booked"
        :class="{
          hidden: activeTab != 2,
        }"
      />
    </main>
    <aside
      class="flex shrink-0 flex-col gap-2 bg-white pt-10 sm:col-start-8 sm:col-end-13 sm:h-[inherit] sm:pt-0"
    >
      <section class="sticky top-0">
        <header class="flex flex-col items-center text-2xl">
          <img
            src="/img/ak_stare.png"
            class="w-32 rounded-full border-4 border-gray-300 bg-indigo-800"
            alt=""
          />
          <h3 class="overflow-hidden text-ellipsis whitespace-nowrap text-lg">
            @username
          </h3>
        </header>
        <QuickLinkItem title="Host an appointment" link="/appointmentform" />
      </section>
    </aside>
  </main>
</template>
