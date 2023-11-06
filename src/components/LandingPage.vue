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
          <span class="material-symbols-outlined"> account_circle </span>
          <span class="text">{{ this.username }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      activeIndex: "1",
      username:'username',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    search() {
      console.log("Searching for:", this.searchQuery);
      // Here you would typically call a search API or search function
      // For now, we just log the search query to the console
    },
  },
};
</script>

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
