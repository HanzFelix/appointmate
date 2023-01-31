import { ref } from "vue";
import { defineStore } from "pinia";
import { appointmateDB } from "../firebase";
import { query, where, collection, getDoc, getDocs } from "firebase/firestore";

const profileRef = collection(appointmateDB, "profiles");

export const useProfileStore = defineStore("user", {
  state: () => ({}),
  getters: {},
  actions: {},
});
