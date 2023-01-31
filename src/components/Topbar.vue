<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
const router = useRouter();
function logout() {
  userStore.logout();
  router.push({ name: "login" });
}
</script>
<template>
  <header class="top-0 z-10 bg-amber-400 py-4 shadow-md">
    <div class="container mx-auto -mb-px flex justify-between px-10 sm:px-12">
      <RouterLink to="/home" class="text-white">Appointmate</RouterLink>
      <nav class="flex gap-4 text-white">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <button @click="logout()">Log out</button>
      </nav>
    </div>
  </header>
</template>
