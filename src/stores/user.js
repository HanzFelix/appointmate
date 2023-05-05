// Obsolete store, refer to local.js instead
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
const profilesRef = collection(appointmateDB, "profiles");
const emptyProfile = {
  id: "not_logged_in",
  avatar: "./img/avatar_tree.png",
  username: "not_logged_in",
};

export const useUserStore = defineStore("user", {
  state: () => ({
    userId: localStorage.getItem("login-token")
      ? localStorage.getItem("login-token")
      : "",
    myUserProfile: localStorage.getItem("login-token")
      ? JSON.parse(localStorage.getItem("user-profile"))
      : emptyProfile,
    tempUserProfile: emptyProfile,
  }),
  getters: {
    isLoggedIn() {
      return this.userId.length > 0;
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
        this.myUserProfile = await this.loadProfileFromUserId(this.userId);
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
      this.myUserProfile = emptyProfile;
      localStorage.removeItem("login-token");
      localStorage.removeItem("user-profile");
    },

    async loadProfileFromUserId(user_id) {
      const profileQuery = query(profilesRef, where("user_id", "==", user_id));
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
      this.tempUserProfile = profiles[0];
      return profiles[0];
    },

    async loadProfileFromProfileId(profile_id) {
      const profileRef = doc(appointmateDB, "profiles", profile_id);
      const profileSnap = await getDoc(profileRef);

      return profileSnap.data();

      /*
      const profileQuery = query(profilesRef, where("user_id", "==", user_id));
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
      this.tempUserProfile = profiles[0];
      return profiles[0];*/
    },

    async loadProfileFromUsername(username) {
      const profileQuery = query(
        profilesRef,
        where("username", "==", username)
      );
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
      this.tempUserProfile = profiles[0];
      return profiles[0];
    },
  },
});
