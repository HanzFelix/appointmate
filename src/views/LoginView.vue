<template>
  <!-- Login -->
  <main
    class="container grid grid-cols-1 sm:grid-cols-12 mx-auto bg-white justify-stretch px-10 gap-10 overflow-hidden mt-10"
  >
    <section
      class="lg:col-start-8 lg:col-end-12 sm:col-start-3 sm:col-end-11 flex flex-col bg-white grow-0 gap-6 rounded-3xl p-10 shadow-md"
    >
      <section class="flex flex-col gap-2">
        <h1 class="text-4xl">Log in</h1>
        <p>New here? <a href="#" class="underline">Create an account</a></p>
      </section>
      <form action="#" class="flex flex-col gap-3">
        <article class="flex flex-col">
          <label
            for="appointment_id"
            class="text-xs text-orange-600 font-medium"
            >USERNAME</label
          >
          <input
            type="text"
            name="appointment_id"
            class="py-2 focus:border-b-orange-600 outline-0 border-b-2 border-gray-300"
            placeholder="Enter username"
            id=""
          />
        </article>
        <article class="flex flex-col">
          <label
            for="appointment_id"
            class="text-xs text-orange-600 font-medium"
            >PASSWORD</label
          >
          <input
            type="text"
            name="appointment_id"
            class="py-2 focus:border-b-orange-600 outline-0 border-b-2 border-gray-300"
            placeholder="Enter password"
            id=""
          />
        </article>
        <a href="#">Forgot password?</a>
        <button
          class="mt-2 p-2 text-sm bg-amber-400 rounded-lg text-white font-medium self-start px-6"
          type="submit"
        >
          Log in
        </button>
      </form>
    </section>
  </main>
</template>
