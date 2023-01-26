<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
</script>
<template>
  <div class="flex flex-col gap-6">
    <section class="flex flex-col gap-2">
      <h1 class="text-4xl">Log in</h1>

      <p>
        New here?
        <RouterLink to="/register" class="underline"
          >Create an account</RouterLink
        >
      </p>
    </section>
    <form action="#" class="flex flex-col gap-3">
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
      <p>
        Forgot password?
        <a href="#" class="underline">Create an account</a>
      </p>
      <article class="flex"><ButtonPrimary text="Log in" /></article>
    </form>
  </div>
</template>
