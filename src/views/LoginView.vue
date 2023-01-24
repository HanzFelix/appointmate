<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
</script>
<template>
  <!-- Login -->
  <div
    class="fixed flex h-screen w-screen items-center bg-cover"
    style="background-image: url('/img/login_bg.jpg')"
  >
    <div
      class="z-20 hidden w-full bg-[#4f4f4f] opacity-60 mix-blend-multiply lg:block"
    >
      <div class="container mx-auto grid grid-cols-12 gap-10 px-10 py-8">
        <div class="lg:col-start-2 lg:col-end-6">
          <h1 class="mb-8 text-4xl text-transparent">
            All appointments, <br />in one place
          </h1>
          <p class="text-transparent">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus reiciendis ut mollitia in, inventore blanditiis.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="z-10 flex h-screen w-full items-center">
    <main
      class="container z-30 mx-auto grid grid-cols-1 items-center gap-10 overflow-hidden px-10 sm:grid-cols-12"
    >
      <div class="hidden lg:col-start-2 lg:col-end-6 lg:block">
        <h1 class="mb-8 text-4xl text-white">
          All appointments, <br />in one place
        </h1>
        <p class="text-white opacity-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          reiciendis ut mollitia in, inventore blanditiis.
        </p>
      </div>
      <section
        class="flex grow-0 flex-col gap-6 rounded-3xl bg-white p-10 shadow-md sm:col-start-3 sm:col-end-11 lg:col-start-8 lg:col-end-12"
      >
        <section class="flex flex-col gap-2">
          <h1 class="text-4xl">Log in</h1>
          <p>New here? <a href="#" class="underline">Create an account</a></p>
        </section>
        <form action="#" class="flex flex-col gap-3">
          <article class="flex flex-col">
            <label
              for="appointment_id"
              class="text-xs font-medium text-orange-600"
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
            <label
              for="appointment_id"
              class="text-xs font-medium text-orange-600"
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
          <a href="#">Forgot password?</a>
          <article class="flex"><ButtonPrimary text="Log in" /></article>
        </form>
      </section>
    </main>
  </div>
</template>
