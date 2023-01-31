import { ref } from "vue";
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
} from "firebase/firestore";
import { useUserStore } from "./user";

const appointmentsRef = collection(appointmateDB, "appointments");

export const useAppointmentStore = defineStore("appoiintments", {
  state: (userId) => ({
    appointments: [
      {
        appointment_id: 0,
        title: "Appointment title",
        description: "Appointment description",
        image: "/img/sample.jpg",
        host_id: "abcde1ff",
      },
    ],
    nextId: 0,
  }),
  getters: {
    hostedAppointments(state, user_id) {
      return state.appointments.filter(
        (appointment) => appointment.host_id == user_id
      );
    },
  },
  actions: {
    async addAppointment(appointment) {
      console.log("appointment ready. sending...");
      await addDoc(appointmentsRef, {
        title: appointment.title,
        description: appointment.description,
        image_path: appointment.image_path,
        host_id: appointment.host_id,
      });
      return true;
    },
  },
});
