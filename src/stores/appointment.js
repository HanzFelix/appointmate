// Obsolete store, refer to local.js instead
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
const schedulesRef = collection(appointmateDB, "schedules");

export const useAppointmentStore = defineStore("appointments", {
  state: () => ({
    appointments: [
      {
        id: 0,
        title: "Appointment title",
        description: "Appointment description",
        image: "./img/sample.jpg",
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
    openedAppointmentid: "",
  }),
  getters: {
    hostedAppointments(state, profile_id) {
      return state.appointments.filter(
        (appointment) => appointment.host_id == profile_id
      );
    },
  },
  actions: {
    async addAppointment(appointment, schedules) {
      console.log("appointment ready. sending...");
      const docRef = await addDoc(appointmentsRef, appointment);
      this.openedAppointmentid = docRef.id;
      console.log(schedules);

      console.log("created appointment with id: " + this.openedAppointmentid);
      const list = parseSchedules(schedules, docRef.id);
      for (const schedule in list) {
        await this.addSchedule(schedule);
      }
      return true;
    },
    async getAppointment(appointment_id) {
      const appointmentRef = doc(appointmateDB, "appointments", appointment_id);
      const appointmentSnap = await getDoc(appointmentRef);

      return appointmentSnap.data();
    },

    async updateAppointment(appointment_id, updatedAppointment) {
      await updateDoc(doc(appointmentsRef, appointment_id), updatedAppointment);
      return;
    },

    async deleteAppointment(appointment_id) {
      await deleteDoc(doc(appointmentsRef, appointment_id));
      return true;
    },

    async addSchedule(schedule) {
      await addDoc(schedulesRef, schedule);
      return;
    },
  },
});
function parseSchedules(schedules, appointmentId) {
  const scheduleList = [];
  for (const sched in schedules) {
    if (sched.date == "") continue;
    for (const times in sched.times) {
      if (times.starttime == "") continue;
      if (times.endtime == "") continue;

      scheduleList.push({
        appointee_id: "",
        appointment_id: appointmentId,
        timestart: stringToDatetime(times.starttime),
        timeend: stringToDatetime(times.endtime),
      });
    }
  }
  return scheduleList;
}
function stringToDatetime(day, time) {
  const [y, m, d] = day.split("-");
  const [hh, mm] = time.split(":");

  return new Date(+y, m - 1, +d, hh, mm);
}
