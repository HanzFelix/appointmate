<script setup>
import TopBar from "../components/Topbar.vue";
</script>

<template>
  <div
    class="flex h-screen flex-col items-stretch bg-cover"
    style="background-image: url('/img/login_bg.jpg')"
  >
    <TopBar />
    <RouterView />
  </div>
</template>
