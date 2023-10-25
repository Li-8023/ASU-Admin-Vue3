import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import Student from "../components/StudentPageContent.vue";
import Sponsor from "../components/SponsorPageContent.vue";
import Seminars from "../components/SeminarsPageContent.vue"
import SponsorForm from "../components/SponsorFormContent.vue"
import StudentForm from "../components/StudentFormContent.vue";
import PickProject from "../components/PickProject.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
  },
  {
    path: "/sponsor",
    name: "Sponsor",
    component: Sponsor,
  },
  {
    path: "/sponsorForm",
    name: "SponsorForm",
    component: SponsorForm,
  },
  {
    path:"/studentForm",
    name:"StudentForm",
    component: StudentForm,
  },
  {
    path: "/pickProject",
    name: "PickProject",
    component: PickProject,
  },
  {
    path:"/Seminars",
    name: "Seminars",
    component: Seminars,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
