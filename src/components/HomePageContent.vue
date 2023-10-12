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
        <div class="link-container">
          <router-link to="/student" class="link-format">
            FOR STUDENTS
          </router-link>
          <br />
          <br />
          <div class="sub-text">
            Learn about the class and maybe propose a project of your own!
          </div>
        </div>
        <div class="link-container">
          <router-link to="/sponsor" class="link-format">
            FOR SPONSORS
          </router-link>
          <br />
          <br />
          <div class="sub-text">
            Find out more about the program and propose a project to start
            working with students.
          </div>
        </div>
      </div>
      <div class="link-container">
        <router-link to="/" class="link-format"> HOST A SEMINAR </router-link>
        <br />
        <br />
        <div class="sub-text">
          Share your knowledge and advice with students that are about to
          graduate!
        </div>
      </div>
    </div>
    <div class="home-info">
      If you have questions or would like more information, please contact
      <strong><a href="mailto:sdosburn@asu.edu">sdosburn@asu.edu</a></strong>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
@import url("https://fonts.google.com/specimen/Tilt+Neon?icon.style=Outlined");
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
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
}

.home-body {
  background-color: rgb(255, 198, 39);
  display: flex;
  height: 20rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.top-links {
  display: flex;
  gap: 20rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.link {
  color: white;
  text-decoration: none;
}

.link-format {
  font-family: "Noto Serif", serif;
  font-size: 35px;
  color: black;
  font-weight: bold;
}

.link-format:hover{
  color:maroon;
}
.sub-text {
  font-size: 15px;
}

.link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-info {
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-family: "Tilt Neon", cursive;
}
</style>
