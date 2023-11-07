<template>
  <div class="landing-page">
    <div class="navigation">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item>
          <img src="../assets/asu_fulton_logo.png" class="navigation-image" />
        </el-menu-item>
        <router-link to="/">
          <el-menu-item index="1">Home</el-menu-item>
        </router-link>
        <router-link to="/student">
          <el-menu-item index="2">Students</el-menu-item>
        </router-link>
        <router-link to="/sponsor">
          <el-menu-item index="3">Sponsors</el-menu-item>
        </router-link>
        <router-link to="/Seminars">
          <el-menu-item index="4">Seminars</el-menu-item>
        </router-link>
        <el-menu-item>
          <el-input
            v-model="searchQuery"
            placeholder="Search..."
            @keyup.enter="search"
          >
            <template #prepend>
              <span class="material-symbols-outlined"> search </span>
            </template>
          </el-input>
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item>
          <el-button text @click="centerDialogVisible = true">
            <span class="material-symbols-outlined"> account_circle </span>
            <span class="text">{{ this.username }}</span>
          </el-button>
        </el-menu-item>
      </el-menu>
    </div>
    <el-dialog
      v-model="centerDialogVisible"
      title="Sign In"
      width="30%"
      align-center
    >
      <div class="dialog-content">
        <el-form-item label="ASURITE User ID:">
          <el-input
            v-model="id"
            id="id"
            type="text"
            required
            placeholder="Please input ASURITE"
            style="margin-bottom: 10px"
          />
        </el-form-item>
        <el-form-item label="Password:">
          <el-input
            v-model="password"
            required
            type="password"
            placeholder="Please input password"
            show-password
          />
        </el-form-item>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false" class="dialog-signin-button">
            Sign In
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      activeIndex: "1",
      username: "Login",
      centerDialogVisible: ref(false),
      password: ref(""),
      id: ref(""),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    search() {
      console.log("Searching for:", this.searchQuery);
      fetch(`https://search.asu.edu/search/?q=${encodeURIComponent(this.searchQuery)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Here you can process the search results
      })
      .catch(err => console.error("Error searching:", err));
    },
  },
};
</script>

<style scoped>
.dialog-signin-button{
  background-color: maroon !important;
  border-color: maroon !important;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.landing-page {
  margin-top: -4rem;
}
.navigation {
  height: 60px; /* Adjust this to your preferred height */
}

.navigation a {
  text-decoration: none;
}

.navigation-image {
  height: 100%;
  width: 200px;
}
.el-menu-demo::before {
  content: "";
  flex: 1 1 auto;
}
.el-menu-item:hover {
  transform: scale(1.1);
  color: maroon !important;
  font-weight: bold !important;
}


.flex-grow {
  flex-grow: 50;
}
</style>
