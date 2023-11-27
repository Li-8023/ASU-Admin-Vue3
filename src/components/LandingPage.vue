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
        <router-link to="/admin">
          <el-menu-item index="4">Administrators</el-menu-item>
        </router-link>
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
      <el-tabs v-model="role" type="border-card">
        <el-tab-pane label="Admin" name="admin">
          <el-form-item label="Email:">
            <el-input
              v-model="adminEmail"
              id="email"
              type="email"
              required
              placeholder="Please input email"
              style="margin-bottom: 10px"
            />
          </el-form-item>
          <el-form-item label="Password:">
            <el-input
              v-model="adminPassword"
              required
              type="password"
              placeholder="Please enter your password"
              show-password
            />
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="Student" name="user">
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
              placeholder="Please enter your ASUID as password"
              show-password
            />
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="logout">Log Out</el-button>
          <el-button
            type="primary"
            @click="
              login();
              centerDialogVisible = false;
            "
            class="dialog-signin-button"
          >
            Sign In
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
</script>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      activeIndex: "1",
      username: "Log In",
      centerDialogVisible: ref(false),
      password: ref(""),
      id: ref(""),
      studentId: ref(null),
      adminEmail: ref(""),
      adminPassword: ref(""),
      role: "",
    };
  },
  created() {
    let storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      this.username = storedUsername;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      if (
        sessionStorage.getItem("adminId") ||
        sessionStorage.getItem("studentId")
      ) {
        ElMessage({
          showClose: true,
          message: "You need to log out first.",
          type: "error",
        });
        return;
      }

      // Admin login
      if (this.role == "admin") {
        fetch(
          `http://localhost:8080/adminLogin/${this.adminEmail}/${this.adminPassword}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.length !== 2) {
              ElMessage({
                showClose: true,
                message: "Admin not found.",
                type: "error",
              });
            } else {
              sessionStorage.setItem("adminId", data[0]);
              // Assuming the data[1] is the admin's first name.
              this.username = data[1];
              sessionStorage.setItem("username", this.username); // Store the username
              ElMessage({
                showClose: true,
                message: "Successful login",
                type: "success",
              });
            }
          })
          .catch((error) => {
            ElMessage({
              showClose: true,
              message: "An error occurred.",
              type: "error",
            });
            console.log(error);
          });
      }
      // Student login
      else {
        fetch(
          `http://localhost:8080/studentLogin/${this.id}/${this.password}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.length !== 2) {
              ElMessage({
                showClose: true,
                message:
                  "Student not found. If this is a mistake please reach out to your capstone professor to get access to the site.",
                type: "error",
              });
            } else {
              sessionStorage.setItem("studentId", data[0]);
              this.username = data[1];
              sessionStorage.setItem("username", this.username); // Store the username
              ElMessage({
                showClose: true,
                message: "Successful login",
                type: "success",
              });
            }
          })
          .catch((error) => {
            ElMessage({
              showClose: true,
              message: "An error occurred.",
              type: "error",
            });
            console.log(error);
          });
      }
    },
    logout() {
      sessionStorage.removeItem("studentId");
      sessionStorage.removeItem("adminId");
      sessionStorage.removeItem("username"); 
      this.username = "Log In";
      this.centerDialogVisible = false;
    },
  },
};
</script>

<style scoped>
.dialog-signin-button {
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
