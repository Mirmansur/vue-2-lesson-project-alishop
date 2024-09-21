import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/single/:id",
    name: "Single",
    component: () => import("../components/single/Single.vue"),
  },
  {
    path: "/like",
    name: "Like",
    component: () => import("../components/like/Like.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/cart/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
