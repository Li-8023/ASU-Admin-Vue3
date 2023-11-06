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
        <router-link to="/">
          <el-menu-item index="1">Home</el-menu-item>
        </router-link>
        <router-link to="/student">
          /* login component */
          <el-menu-item index="2">Students</el-menu-item>
        </router-link>
        <router-link to="/sponsor">
          <el-menu-item index="3">Sponsors</el-menu-item>
        </router-link>
        <router-link to="/Seminars">
          <el-menu-item index="4">Seminars</el-menu-item>
        </router-link>
        <div class="flex-grow" />
        <el-menu-item>
          <img src="../assets/asu_fulton_logo.png" class="navigation-image" />
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script></script>

<style scoped>
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
