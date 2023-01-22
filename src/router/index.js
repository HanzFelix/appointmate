import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import AppointmentFormView from "../views/AppointmentFormView.vue";
import AppointmentDetailsView from "../views/AppointmentDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
      redirect: "/home",
      children: [
        {
          path: "/profile",
          name: "profile",
          component: ProfileView /*
          children: [
            {
              path: "hosted",
              name: "hosted",
              component: AppointmentCardsView,
              props: { filter: "Card Title Hosted" },
            },
            {
              path: "booked",
              name: "booked",
              component: AppointmentCardsView,
              props: { filter: "Card Title Booked" },
            },
          ],*/,
        },
        {
          path: "/home",
          name: "home",
          component: HomeView,
        },
        {
          path: "/appointmentform",
          name: "appointmentform",
          component: AppointmentFormView,
        },
        {
          path: "/appointmentdetails",
          name: "appointmentdetails",
          component: AppointmentDetailsView,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
