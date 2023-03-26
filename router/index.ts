// config vue router with home and about page   vuejs vue-router
import { createRouter, createWebHistory, Router } from "vue-router";
import HomePage from "../views/Home.vue";
import AboutPage from "../views/About.vue";
import SwimsuitPage from "../views/Swimsuit.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/swimsuit", name: "Swimsuit", component: SwimsuitPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
