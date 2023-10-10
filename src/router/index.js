import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HelloWorld.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
