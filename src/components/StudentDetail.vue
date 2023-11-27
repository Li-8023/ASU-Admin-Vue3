<template>
  <div class="Student-Detail-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="students-list">
      <div v-if="adminId">
        <div class="student" v-for="student in students" :key="student.id">
          <h2 class="student-name">
            {{ student.firstName }} {{ student.lastName }}
          </h2>
          <div class="student-details">
            <p><strong>Asurite ID: </strong> {{ student.asuriteID }}</p>
            <p>
              <strong>Email: </strong>
              <a :href="`mailto:${student.email}`">{{ student.email }}</a>
            </p>
            <p>
              <strong>Assigned Project id: </strong>
              {{ student.assignedProject }}
            </p>
            <p>
              <strong>Project Preferences id: </strong>
              {{ student.projectPreferences.join(", ") }}
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="error-message">
          You don't have the permission to view this content. If you are an
          administrator, please login first.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LandingPage from "../components/LandingPage.vue";

export default {
  components: {
    LandingPage,
  },
  data() {
    return {
      students: [],
      adminId: sessionStorage.getItem("adminId"),
    };
  },
  async created() {
    if (this.adminId) {
      try {
        const response = await axios.get("http://localhost:8080/allStudents");
        this.students = response.data;
      } catch (e) {
        console.error(e);
      }
    }
  },
};
</script>

<style scoped>
.students-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.student {
  border: 2px solid maroon;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.student-name {
  text-align: center;
  color: maroon;
}

.student-details {
  text-align: left;
}
.error-message {
  color: red;
}
</style>
