<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
const router = useRouter();
const email = ref("example1@mail.com");
const password = ref("example");
async function onSubmit() {
  if (await userStore.login(email.value, password.value)) {
    router.push({ name: "home" });
    //redirect page
  }
}
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
    <form class="flex flex-col gap-3" @submit.stop.prevent="onSubmit">
      <article class="flex flex-col">
        <label for="email_login" class="text-xs font-medium text-orange-600"
          >EMAIL</label
        >
        <input
          type="email"
          name="email"
          class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
          placeholder="Enter email"
          id="email-login"
          v-model="email"
        />
      </article>
      <article class="flex flex-col">
        <label for="password-login" class="text-xs font-medium text-orange-600">
          PASSWORD
        </label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600"
          placeholder="Enter password"
          id="password-login"
        />
      </article>
      <p>
        Forgot password?
        <a href="#" class="underline">Create an account</a>
      </p>
      <article class="flex">
        <ButtonPrimary text="Log in" button-type="submit" />
      </article>
    </form>
  </div>
</template>
