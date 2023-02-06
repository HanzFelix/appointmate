// Obsolete store, refer to local.js instead
import { defineStore } from "pinia";
import { appointmateDB } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  getDoc,
} from "firebase/firestore";

const schedulesRef = collection(appointmateDB, "schedules");

export const useScheduleStore = defineStore("schedules", {
  state: (xd) => ({}),
  getters: {},
  actions: {
    async getAppointmentSchedules(appointment_id) {
      console.log("here are the appointment schedules");
    },
  },
});
