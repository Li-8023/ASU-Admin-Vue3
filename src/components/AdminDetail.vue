<template>
  <div class="Student-Detail-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="admin-list">
      <div v-if="adminId">
        <div class="admin" v-for="admin in admins" :key="admin.id">
          <h2 class="admin-name">{{ admin.firstName }} {{ admin.lastName }}</h2>
          <div class="admin-details">
            <p><strong>First name: </strong> {{ admin.firstName }}</p>
            <p><strong>Last name: </strong> {{ admin.lastName }}</p>
            <p><strong>Email: </strong> {{ admin.asuEmail }}</p>
            <p><strong>Password: </strong> {{ admin.password }}</p>
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
      admins: [],
      adminId: sessionStorage.getItem("adminId"),
    };
  },
  async created() {
    if (this.adminId) {
      try {
        const response = await axios.get("http://localhost:8080/allAdmins");
        this.admins = response.data;
      } catch (e) {
        console.error(e);
      }
    }
  },
};
</script>

<style scoped>
.admin-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.admin {
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

.admin-name {
  text-align: center;
  color: maroon;
}

.admin-details {
  text-align: left;
}

.error-message {
  color: red;
}
</style>
