import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/Home.vue";
import SwimSuitManPage from "../views/SwimsuitMan.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/swimsuitman", name: "SwimSuitMan", component: SwimSuitManPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
