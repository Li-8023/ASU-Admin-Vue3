<template>
  <div class="home-page">
    <div class="home-image">
      <el-carousel height="200px" class="demonstration">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-description">
      <el-text class="home-text" size="large"
        >The ASU CS and CSE Capstone programs pair Computer Science (CS) and
        Computer</el-text
      >
      <br />
      <el-text class="home-text" size="large"
        >Systems Engineering (CSE) students with Industry and Faculty sponsored
        projects to</el-text
      >
      <br />
      <el-text class="home-text" size="large"
        >prepare students for the professional world.</el-text
      >
      <br />
      <br />
      <el-text class="home-text" size="large"
        >Learn more about our programs by clicking the links below.</el-text
      >
    </div>
    <div class="home-body">
      <div class="top-links">
        <router-link to="/student">
            FOR STUDENTS
        </router-link>
        <router-link to="/sponsor">
            FOR SPONSORS
        </router-link>
        <!-- <a href="#" class="link">Link 1</a>
        <a href="#" class="link">Link 2</a> -->
      </div>
      <router-link to="/">
        HOST A SEMINAR
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
}

.home-body {
  background-color: rgb(255, 198, 39);
  display: flex;
  height:10rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.top-links {
  display: flex;
  gap: 1rem;
}

.link {
  color: white;
  text-decoration: none;
}
</style>
