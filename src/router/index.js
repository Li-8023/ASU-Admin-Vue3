import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import Student from "../components/StudentPageContent.vue";
import Sponsor from "../components/SponsorPageContent.vue";
import SponsorForm from "../components/SponsorFormContent.vue"
<<<<<<< HEAD
import StudentForm from "../components/StudentFormContent.vue"
=======
import PickProject from "../components/PickProject.vue";
>>>>>>> 6b2397d82da018421ea4cc408b7bd40791273da7

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
<<<<<<< HEAD
    path:"/studentForm",
    name:"StudentForm",
    component: StudentForm,
  }
=======
    path: "/pickProject",
    name: "PickProject",
    component: PickProject,
  },
>>>>>>> 6b2397d82da018421ea4cc408b7bd40791273da7
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
