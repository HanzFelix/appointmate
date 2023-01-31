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
    userProfile: localStorage.getItem("user-profile")
      ? localStorage.getItem("user-profile")
      : "",
  }),
  getters: {
    isLoggedIn() {
      return this.userId.length > 0;
    },
    getProfileId() {
      console.log("i am returning; " + this.userProfile);
      return this.userProfile;
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
          // error text to display
        } else {
          userSnap.forEach((doc) => {
            this.userId = doc.id;
          });
          this.loggedIn = true;
          localStorage.setItem("login-token", this.userId);

          //const profileStore = await useProfileStore();
          localStorage.setItem(
            "user-profile",
            JSON.stringify(await this.loadUserProfile(this.userId))
          );
          this.userProfile = JSON.parse(localStorage.getItem("user-profile"));
          return true;
        }
      } catch (error) {
        console.log("user error: " + error);
      }
      return false;
    },
    logout() {
      this.userId = "";
      this.userProfile = {};
      localStorage.removeItem("login-token");
      localStorage.removeItem("user-profile");
    },

    async loadUserProfile(user_id) {
      console.log("where user-id == " + user_id);
      const profileQuery = query(profileRef, where("user_id", "==", user_id));
      try {
        const profileSnap = await getDocs(profileQuery);
        if (profileSnap.size == 0) {
          console.log("unable to find profile");
          // error text to display
        } else {
          profileSnap.forEach((doc) => {
            const profile = {
              id: doc.id,
              username: doc.data().username,
              avatar: doc.data().avatar,
            };
            return profile;
          });
        }
      } catch (error) {
        console.log("profile error: " + error);
      }
    },
  },
});
