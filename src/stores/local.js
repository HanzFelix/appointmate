import { defineStore } from "pinia";

const emptyProfile = {
  id: "",
  avatar: "",
  username: "user",
};

export const useLocalStore = defineStore("local", {
  state: () => ({
    myUserId: "",
    myProfileId: localStorage.getItem("user-profile")
      ? JSON.parse(localStorage.getItem("user-profile")).id
      : "",
    myProfile: localStorage.getItem("user-profile")
      ? JSON.parse(localStorage.getItem("user-profile"))
      : emptyProfile,
    loadedProfileId: "",
    loadedAppointmentId: "",
    loggedIn: localStorage.getItem("user-profile") ? true : false,
  }),
  getters: {
    loadedProfileIsMine(state) {
      return state.myProfileId == state.loadedProfileId;
    },
  },
  actions: {},
});
