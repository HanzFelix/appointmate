<script setup>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useLocalStore } from "../stores/local";
import { appointmateDB } from "@/firebase";
import {
  query,
  where,
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const localStore = useLocalStore();
const router = useRouter();
const userRef = collection(appointmateDB, "users");
const profilesRef = collection(appointmateDB, "profiles");

const email = ref("example1@mail.com");
const password = ref("example");

async function onSubmit() {
  // login user
  const userQuery = query(
    userRef,
    where("email", "==", email.value),
    where("password", "==", password.value)
  );
  try {
    const userSnap = await getDocs(userQuery);
    if (userSnap.size == 0) {
      // throw error text to display
      alert("unable to find user");
      return;
    }

    userSnap.forEach((doc) => {
      localStore.myUserId = doc.id;
    });

    localStorage.setItem("login-token", localStore.myUserId);

    // load profile
    const profileQuery = query(
      profilesRef,
      where("user_id", "==", localStore.myUserId)
    );
    const profileSnap = await getDocs(profileQuery);
    if (profileSnap.size == 0) {
      alert("Unable to find profile");
      return;
    }
    profileSnap.forEach((doc) => {
      localStore.myProfile = {
        id: doc.id,
        avatar: doc.data().avatar,
        username: doc.data().username,
      };
    });
    localStorage.setItem("user-profile", JSON.stringify(localStore.myProfile));
    localStore.loggedIn = true;

    // Redirect to homepage after successful login
    router.push({ name: "home" });
  } catch (error) {
    alert("user error: " + error);
  }
  return true;
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
