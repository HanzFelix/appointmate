<script setup>
import { ref, watch, onUpdated, onMounted } from "vue";
import AppointmentCardList from "../components/AppointmentCardList.vue";
import QuickLinkItem from "../components/QuickLinkItem.vue";
import { useUserStore } from "../stores/user";

const props = defineProps({
  username: {
    type: String,
    default: JSON.parse(localStorage.getItem("user-profile")).username,
  },
  activeTab: {
    type: String,
    default: "hosted",
  },
});

const usernameRef = ref("");
const activeTab = ref(props.activeTab); // todo: move inside onMounted()
const loadedProfileRef = ref(
  JSON.parse(localStorage.getItem("user-profile"))
  //  await userStore.loadProfileFromUsername(usernameRef.value)
);

onMounted(async () => {
  usernameRef.value = props.username;
  const userStore = useUserStore();
  loadedProfileRef.value = await userStore.loadProfileFromUsername(
    usernameRef.value
  );
});

function setActiveTab(val) {
  activeTab.value = val;
}
/*
watch(usernameRef, async (newValue, oldValue) => {
  usernameRef.value = newValue;
  const userStore = useUserStore();
  loadedProfileRef.value = await userStore.loadProfileFromUsername(
    usernameRef.value
  );
});*/
</script>
<template>
  <!-- Profile -->
  <main
    class="justify-stretch justify-stretch container mx-auto box-border flex h-full flex-col-reverse gap-10 overflow-hidden overflow-y-auto bg-zinc-100 px-10 pb-10 sm:grid sm:grid-cols-12 sm:pt-10"
  >
    <main
      class="rounded-t-xl px-1 pb-1 sm:col-start-1 sm:col-end-8 sm:overflow-y-auto"
    >
      <nav
        class="sticky top-0 mb-2 border-b border-transparent bg-white text-center text-sm font-medium text-stone-700 shadow-md shadow-zinc-400"
      >
        <ul class="flex">
          <li class="-mb-px w-full">
            <a
              href="#"
              @click="setActiveTab('hosted')"
              :class="{
                'border-orange-600 text-orange-600': activeTab == 'hosted',
              }"
              class="inline-block w-full rounded-t-lg border-b-2 border-transparent p-4 hover:border-amber-400 hover:text-amber-400"
            >
              Hosted Appointments
            </a>
          </li>
          <li class="-mb-px w-full">
            <a
              href="#"
              @click="setActiveTab('booked')"
              :class="{
                'border-orange-600 text-orange-600': activeTab == 'booked',
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
          hidden: activeTab != 'hosted',
        }"
      />
      <AppointmentCardList
        filter="booked"
        :class="{
          hidden: activeTab != 'booked',
        }"
      />
    </main>
    <aside
      class="flex shrink-0 flex-col gap-2 pt-10 sm:col-start-8 sm:col-end-13 sm:h-[inherit] sm:pt-0"
    >
      <section class="sticky top-0">
        <header
          class="mb-4 flex flex-col items-center gap-2 rounded-xl bg-white py-4 text-2xl shadow-md shadow-zinc-400"
        >
          <img
            :src="loadedProfileRef.avatar"
            class="h-32 w-32 rounded-full border-4 border-gray-300 bg-indigo-800"
            alt=""
          />
          <h3 class="overflow-hidden text-ellipsis whitespace-nowrap text-lg">
            {{ "@" + usernameRef }}
          </h3>
        </header>
        <QuickLinkItem title="Host an appointment" link="/appointmentform" />
      </section>
    </aside>
  </main>
</template>
