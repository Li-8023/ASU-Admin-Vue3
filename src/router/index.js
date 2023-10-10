import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import Student from "../components/StudentPageContent.vue";
import Sponsor from "../components/SponsorPageContent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path:"/student",
    name:"Student",
    component: Student,
  },
  {
    path:"/sponsor",
    name:"Sponsor",
    component: Sponsor,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
