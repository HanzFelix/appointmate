<template>
  <!-- Login -->
  <div
    class="z-10 flex h-screen items-center bg-center"
    style="background-image: url('/img/login_bg.jpg')"
  >
    <main
      class="container z-30 mx-auto grid grid-cols-1 gap-10 overflow-hidden px-10 pb-12 sm:grid-cols-12"
    >
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
          <button
            class="mt-2 self-start rounded-lg bg-amber-400 p-2 px-6 text-sm font-medium text-white"
            type="submit"
          >
            Log in
          </button>
        </form>
      </section>
    </main>
  </div>
  <div class="fixed z-20 bg-[#4f4f4f] opacity-50 mix-blend-multiply">
    <h1>All appointments, in one place</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      reiciendis ut mollitia in, inventore blanditiis.
    </p>
  </div>
</template>
