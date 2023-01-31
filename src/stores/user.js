import { ref } from "vue";
import { defineStore } from "pinia";
import { appointmateDB } from "../firebase";
import {
  query,
  where,
  collection,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const userRef = collection(appointmateDB, "users");
const profileRef = collection(appointmateDB, "profiles");

export const useUserStore = defineStore("user", {
  state: () => ({
    userId: localStorage.getItem("login-token")
      ? localStorage.getItem("login-token")
      : "",
    myUserProfile: localStorage.getItem("login-token")
      ? JSON.parse(localStorage.getItem("user-profile"))
      : {},
    tempUserProfile: {},
  }),
  getters: {
    isLoggedIn() {
      return this.userId.length > 0;
    },
    getProfileId() {
      return this.myUserProfile.id;
    },
  },
  actions: {
    async login(email, password) {
      const userQuery = query(
        userRef,
        where("email", "==", email),
        where("password", "==", password)
      );
      try {
        const userSnap = await getDocs(userQuery);
        if (userSnap.size == 0) {
          console.log("unable to find user");
          return false;
          // throw error text to display
        }
        userSnap.forEach((doc) => {
          this.userId = doc.id;
        });
        localStorage.setItem("login-token", this.userId);

        // load profile
        this.myUserProfile = await this.loadUserProfile(this.userId);
        localStorage.setItem(
          "user-profile",
          JSON.stringify(this.myUserProfile)
        );
        this.loggedIn = true;
      } catch (error) {
        console.log("user error: " + error);
      }
      return true;
    },
    logout() {
      this.userId = "";
      this.myUserProfile = {};
      localStorage.removeItem("login-token");
      localStorage.removeItem("user-profile");
    },

    async loadUserProfile(user_id) {
      const profileQuery = query(profileRef, where("user_id", "==", user_id));
      const profileSnap = await getDocs(profileQuery);
      if (profileSnap.size == 0) {
        throw new Error("Unable to find profile");
      }
      const profiles = [];
      profileSnap.forEach((doc) => {
        profiles.push({
          id: doc.id,
          avatar: doc.data().avatar,
          username: doc.data().username,
        });
      });
      return profiles[0];
    },
  },
});
