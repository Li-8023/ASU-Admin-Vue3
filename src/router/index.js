import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import Student from "../components/StudentPageContent.vue";
import Sponsor from "../components/SponsorPageContent.vue";
import SponsorForm from "../components/SponsorFormContent.vue"
import StudentForm from "../components/StudentFormContent.vue"

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
  },
  {
    path:"/sponsorForm",
    name:"SponsorForm",
    component: SponsorForm,
  },
  {
    path:"/studentForm",
    name:"StudentForm",
    component: StudentForm,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
