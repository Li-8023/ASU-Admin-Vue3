<template>
  <div class="landing-page">
    <div class="navigation">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">Students</el-menu-item>
        <el-menu-item index="3">Sponsors</el-menu-item>
        <el-menu-item index="2">Seminars</el-menu-item>
        <img src="../assets/asu_fulton_logo.png" class="navigation-image" />
      </el-menu>
    </div>
  </div>
</template>

<script></script>

<style>
.landing-page {
}

.navigation {
  margin-top: -3rem;
}

.navigation-image {
  width: 100%;
  display: block;
}
</style>
