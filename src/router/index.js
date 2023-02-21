import { createRouter, createWebHistory } from "@ionic/vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Settings from "../pages/Settings.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
