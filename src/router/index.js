import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/single",
    name: "Single",
    component: () => import("../components/single/Single.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
