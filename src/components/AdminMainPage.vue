<template>
  <div class="home-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="home-image">
      <el-carousel height="200px" class="demonstration">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <img :src="image.url" :alt="image.alt" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-body">
      <div class="top-links">
        <div class="link-container">
          <router-link to="/projectDetail" class="link-format">
            PROJECT INFO
          </router-link>
          <br />
          <br />
          <div class="sub-text">Get all projects information.</div>
        </div>
        <div class="link-container">
          <router-link to="/studentDetail" class="link-format">
            STUDENT INFO
          </router-link>
          <br />
          <br />
          <div class="sub-text">Get all students information.</div>
        </div>
      </div>
      <div class="top-links">
        <div class="link-container">
          <router-link to="/adminDetail" class="link-format">
            ADMIN INFO
          </router-link>
          <br />
          <br />
          <div class="sub-text">Get all administrators information.</div>
        </div>
        <div class="link-container">
          <button class="link-format" @click="openAssignProjectDialog">
            ASSIGN PROJECT
          </button>
          <br />
          <br />
          <div class="sub-text">Assign students out to projects.</div>
        </div>
      </div>
    </div>
    <div class="home-info">
      If you have questions or would like more information, please contact
      <strong><a href="mailto:sdosburn@asu.edu">sdosburn@asu.edu</a></strong>
    </div>
  </div>
</template>

<script>
import {
  ElCarousel,
  ElCarouselItem,
  ElMessageBox,
  ElMessage,
} from "element-plus";
import LandingPage from "../components/LandingPage.vue";
import axios from "axios";

export default {
  components: {
    ElCarousel,
    ElCarouselItem,
    LandingPage,
  },
  data() {
    return {
      images: [
        { url: require("@/assets/LandingImage3.jpg"), alt: "Image 1" },
        { url: require("@/assets/LandingImage2.jpg"), alt: "Image 2" },
        { url: require("@/assets/Student_background.jpg"), alt: "Image 3" },
      ],
    };
  },
  methods: {
    async assignProjects() {
      // Check if there's an adminId in the session storage
      if (!sessionStorage.getItem("adminId")) {
        ElMessage.error(
          "You don't have the permission to view this content. If you are an administrator, please login first."
        );
        return;
      }

      try {
        const response = await axios.put(
          "http://localhost:8080/assignProjects"
        );
        if (response.status === 200) {
          ElMessage({
            message: "Assign successful.",
            type: "success",
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        ElMessage.error("Something went wrong.");
      }
    },
    openAssignProjectDialog() {
      ElMessageBox.confirm(
        "Do you want to Assign students out to projects?",
        "Assign Projects",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning",
        }
      )
        .then(() => {
          this.assignProjects();
        })
        .catch(() => {
          // Handle rejected (cancelled) promise here if needed
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
@import url("https://fonts.google.com/specimen/Tilt+Neon?icon.style=Outlined");
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home-description {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
}

.home-body {
  background-color: rgb(255, 198, 39);
  display: flex;
  height: 20rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.top-links {
  display: flex;
  gap: 20rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.link {
  color: white;
  text-decoration: none;
}

.link-format {
  font-family: "Noto Serif", serif;
  font-size: 35px;
  color: black;
  font-weight: bold;
}

.link-format:hover {
  color: maroon;
}
.sub-text {
  font-size: 15px;
}

.link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-info {
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-family: "Tilt Neon", cursive;
}
.carousel-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.link-format {
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: underline;
}
</style>
