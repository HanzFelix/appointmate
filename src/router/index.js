import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import AppointmentFormView from "../views/AppointmentFormView.vue";
import AppointmentDetailsView from "../views/AppointmentDetailsView.vue";
import LoginMiniView from "../views/LoginMiniView.vue";
import RegisterMiniView from "../views/RegisterMiniView.vue";
import { useLocalStore } from "../stores/local";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
      redirect: "/home",
      meta: { requiresAuth: true },
      children: [
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
          path: "/appointment/:id",
          name: "appointmentdetails",
          component: AppointmentDetailsView,
          props: true,
        },
        {
          path: "/profile",
          name: "myProfile",
          component: ProfileView,
          props: true /*
          // undecided on how to make this work
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
          path: "/profile/:username",
          name: "profile",
          component: ProfileView,
          props: true,
        },
      ],
    },
    {
      path: "/login",
      component: LoginView,
      meta: { requiresAuth: false },
      children: [
        { path: "", name: "login", component: LoginMiniView },
        { path: "/register", name: "register", component: RegisterMiniView },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const localStore = useLocalStore();
  if (!to.meta.requiresAuth && localStore.loggedIn) {
    next({ name: "home" });
  } else if (to.meta.requiresAuth && !localStore.loggedIn) {
    next({ name: "login" });
  } else {
    next();
  } /*
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!userStore.loggedIn) {
      next({ name: "login" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }*/
});

export default router;

router.be;
