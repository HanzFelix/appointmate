<script setup>
import { ref, onMounted } from "vue";
import AppointmentCardList from "../components/AppointmentCardList.vue";
import QuickLinkItem from "../components/QuickLinkItem.vue";
import { useLocalStore } from "../stores/local";
import { appointmateDB } from "../firebase";
import {
  query,
  where,
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const props = defineProps({
  username: {
    type: String,
    default: localStorage.getItem("user-profile")
      ? JSON.parse(localStorage.getItem("user-profile")).username
      : "",
  },
  activeTab: {
    type: String,
    default: "hosted",
  },
});

const localStore = useLocalStore();

const activeTab = ref(props.activeTab); // todo: move inside onMounted()
const loadedProfileRef = ref({
  id: "",
  avatar: "",
  username: "user",
});
const profilesRef = collection(appointmateDB, "profiles");
const isMyProfile = ref(false);

onMounted(async () => {
  // LOAD PROFILE
  // if viewing user's own profile
  if (localStore.myProfile.username == props.username) {
    loadedProfileRef.value = localStore.myProfile;
    isMyProfile.value = true;
    return;
  }

  // search profile using username.
  const profileQuery = query(
    profilesRef,
    where("username", "==", props.username)
  );
  const profileSnap = await getDocs(profileQuery);

  // found no profile
  if (profileSnap.size == 0) {
    alert("Unable to find profile");
    return;
  }

  // get only first profile found
  const profiles = [];
  profileSnap.forEach((doc) => {
    profiles.push({
      id: doc.id,
      avatar: doc.data().avatar,
      username: doc.data().username,
    });
  });

  // store retrieved profile
  loadedProfileRef.value = profiles[0];
  localStore.loadedProfileId = profiles[0].id;
});

// switch between hosted and booked appointment
function setActiveTab(val) {
  activeTab.value = val;
}

// TODO: use RouterView for AppointmentCardList instead?
</script>
<template>
  <!-- Profile -->
  <main
    class="justify-stretch container mx-auto box-border flex h-full flex-col-reverse gap-10 overflow-hidden overflow-y-auto bg-zinc-100 px-10 pb-10 sm:grid sm:grid-cols-12 sm:pt-10"
  >
    <main
      class="basis-full rounded-t-xl pb-1 sm:col-start-1 sm:col-end-8 sm:overflow-y-auto"
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
        :profile-id="loadedProfileRef.id"
        filter="hosted"
        :class="{
          hidden: activeTab != 'hosted',
        }"
      />
      <AppointmentCardList
        :profile-id="loadedProfileRef.id"
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
            {{ "@" + loadedProfileRef.username }}
          </h3>
        </header>
        <QuickLinkItem
          title="Host an appointment"
          v-if="isMyProfile"
          link="/appointmentform"
        />
      </section>
    </aside>
  </main>
</template>
