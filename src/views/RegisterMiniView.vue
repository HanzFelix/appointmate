<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
//TODO: Implement register in firebase
</script>
<template>
  <div class="flex flex-col gap-6">
    <section class="flex flex-col gap-2">
      <h1 class="text-4xl">Register</h1>
    </section>
    <form action="#" class="flex flex-col gap-3">
      <article class="flex flex-col">
        <label for="appointment_id" class="text-xs font-medium text-orange-600"
          >USERNAME</label
        >
        <input
          type="text"
          name="appointment_id"
          class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
          placeholder="Enter username"
          id=""
        />
      </article>
      <article class="flex flex-col">
        <label for="appointment_id" class="text-xs font-medium text-orange-600"
          >EMAIL</label
        >
        <input
          type="email"
          name="appointment_id"
          class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
          placeholder="Enter email"
          id=""
        />
      </article>
      <article class="flex flex-col">
        <label for="appointment_id" class="text-xs font-medium text-orange-600"
          >PASSWORD</label
        >
        <input
          type="text"
          name="appointment_id"
          class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
          placeholder="Enter password"
          id=""
        />
      </article>
      <article class="flex"><ButtonPrimary text="Register" /></article>
    </form>
  </div>
</template>
