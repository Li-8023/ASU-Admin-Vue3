import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import Student from "../components/StudentPageContent.vue";
import Sponsor from "../components/SponsorPageContent.vue";
import Seminars from "../components/SeminarsPageContent.vue"
import SponsorForm from "../components/SponsorFormContent.vue"
import StudentForm from "../components/StudentFormContent.vue";
import PickProject from "../components/PickProject.vue";
import SponsorHaveTeam from "../components/SponsorHaveTeam.vue";
import ProjectDetail from "../components/ProjectDetail.vue";
import StudentDetail from "../components/StudentDetail.vue";
import AdminDetail from "../components/AdminDetail.vue";
import AdminPage from "../components/AdminMainPage.vue";

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
    path: "/admin",
    name:"Admin",
    component: AdminPage,
  },
  {
    path: "/sponsorForm",
    name: "SponsorForm",
    component: SponsorForm,
  },
  {
    path:"/haveTeam",
    name:"HaveTeam",
    component:SponsorHaveTeam
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
  {
    path:"/projectDetail",
    name:"ProjectDetail",
    component: ProjectDetail,
  },
  {
    path:"/studentDetail",
    name:"StudentDetail",
    component: StudentDetail,
  },
  {
    path:"/adminDetail",
    name:"AdminDetail",
    component: AdminDetail,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
