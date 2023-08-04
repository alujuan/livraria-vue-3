import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimalView from "../views/AnimalView.vue";
import ClienteView from "../views/ClienteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/animais",
      name: "animais",
      component: AnimalView,
    },
    {
      path: "/clientes",
      name: "clientes",
      component: ClienteView,
    },
  ],
});

export default router;
