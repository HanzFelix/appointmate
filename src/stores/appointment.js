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
  getDoc,
} from "firebase/firestore";

const appointmentsRef = collection(appointmateDB, "appointments");

export const useAppointmentStore = defineStore("appoiintments", {
  state: () => ({
    appointments: [
      {
        id: 0,
        title: "Appointment title",
        description: "Appointment description",
        image: "/img/sample.jpg",
        host_id: "abcde1ff",
      },
    ],
    nextId: 0,
    tempAppointment: {
      id: 0,
      title: "Appointment title",
      description:
        "No appointment loaded. Please wait a moment, or refresh the page instead",
      image_path: "/img/sample.jpg",
      host_id: "asd",
    },
  }),
  getters: {
    hostedAppointments(state, profile_id) {
      return state.appointments.filter(
        (appointment) => appointment.host_id == profile_id
      );
    },
  },
  actions: {
    async addAppointment(appointment) {
      console.log("appointment ready. sending...");
      await addDoc(appointmentsRef, appointment);
      return true;
    },
    async getAppointment(appointment_id) {
      // TODO need testing
      const appointmentRef = doc(appointmateDB, "appointments", appointment_id);
      const appointmentSnap = await getDoc(appointmentRef);

      return appointmentSnap.data();
    },
    async updateAppointment(appointment_id, updatedAppointment) {
      updateDoc(doc(appointmentsRef, appointment_id), updatedAppointment);
      return;
    },
    async deleteAppointment(appointment_id) {
      deleteDoc(doc(appointmentsRef, appointment_id));
      return;
    },
  },
});
