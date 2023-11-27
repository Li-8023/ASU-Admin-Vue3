<template>
  <div class="Project-Detail-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="projects-list">
      <div class="project" v-for="project in projects" :key="project.id">
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="project-details">
          <p>
            <strong>Proposer: </strong> {{ project.proposerName }}
            <a class="email-link" :href="`mailto:${project.proposerEmail}`">{{
              project.proposerEmail
            }}</a>
          </p>
          <p>
            <strong>Project Contact: </strong> {{ project.projectContactName }}
          </p>
          <p class="project-description">
            <strong>Project Description: </strong> {{ project.description }}
          </p>
          <p class="project-description">
            <strong>Student Learn Goals: </strong>
            {{ project.studentLearningExperience }}
          </p>
          <p class="project-description">
            <strong>Deliverables: </strong> {{ project.expectedDeliverables }}
          </p>
          <p class="project-description">
            <strong>Desired Background: </strong>
            {{ project.desiredBackground }}
          </p>
          <p class="project-description">
            <strong>Required Agreements: </strong>
            {{ project.requiredAgreements }}
          </p>
          <p class="project-description">
            <strong>Additional Materials: </strong>
            <a :href="project.projectLinks" target="_blank">{{
              project.projectLinks
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LandingPage from "../components/LandingPage.vue";
import axios from "axios";
</script>

<script>
export default {
  components: {
    LandingPage,
  },
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:8080/allProjects");
      this.projects = response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.project-title {
  text-align: center;
  color: maroon; 
}
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project {
  border: 2px solid maroon;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px; 
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
  width: 80%; 
  margin-left: auto; 
  margin-right: auto;
  margin-top: 20px;
  
}

.project-title {
  text-align: center;
}

.project-details {
  text-align: left;
}

.email-link {
  color: blue;
  text-decoration: underline;
}

.project-description {
  white-space: pre-line;
}
</style>
