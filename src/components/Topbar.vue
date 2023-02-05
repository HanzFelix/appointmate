<script setup>
import { useRouter } from "vue-router";
import { useLocalStore } from "../stores/local";
import { ref, onMounted } from "vue";

const localStore = useLocalStore();
const router = useRouter();
const myProfileId = ref("id");
const myUsername = ref("a");

function logout() {
  localStore.myUserId = "";
  localStore.myProfileId = "a";
  localStorage.removeItem("login-token");
  localStorage.removeItem("user-profile");
  localStore.loggedIn = false;
  router.push({ name: "login" });
}

onMounted(async () => {
  myProfileId.value = localStore.myProfileId;
  myUsername.value = localStore.myProfile.username;
});
</script>
<template>
  <header class="top-0 z-10 bg-amber-400 py-4 shadow-md">
    <div class="container mx-auto -mb-px flex justify-between px-10 sm:px-12">
      <RouterLink to="/home" class="text-white">Appointmate</RouterLink>
      <nav class="flex gap-4 text-white">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink
          :to="{
            name: 'myProfile',
          }"
          >Profile</RouterLink
        >
        <button @click="logout()">Log out</button>
      </nav>
    </div>
  </header>
</template>
