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
        <el-menu-item index="4">Seminars</el-menu-item>
        <el-menu-item class="right-menu-item">
          <img src="../assets/asu_fulton_logo.png" class="navigation-image" />
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script></script>

<style scoped>

.landing-page{
    margin-top:-4rem;
}
.navigation {
  height: 60px; /* Adjust this to your preferred height */
}

.navigation-image {
  height: 100%;
  width: 200px;
}

.right-menu-item{
    margin-left: auto;
}
</style>
