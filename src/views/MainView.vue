<script setup>
import TopBar from "../components/Topbar.vue";
import HomeView from "./HomeView.vue";
import ProfileView from "./ProfileView.vue";
</script>

<template>
  <div class="h-screen flex flex-col items-stretch">
    <TopBar />
    <RouterView />
  </div>
</template>
