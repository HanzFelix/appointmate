import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppointments = defineStore("appointments", {
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
    loggedInUser: userId,
  }),
  getters: {
    hostedAppointments(state, user_id) {
      return state.appointments.filter(
        (appointment) => appointment.host_id == user_id
      );
    },
  },
  actions: {},
});
