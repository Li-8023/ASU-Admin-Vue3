<template>
  <div class="SponsorForm-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Sponsor-content-header">
      <div class="content-image-container">
        <img src="../assets/group-of-students-looking-at-computer-monitor.jpg" class="sponsor-content-background" />
        <div class="centered-text">PROPOSE A PROJECT</div>
      </div>
    </div>
    <div class="Sponsor-content"> 
      <div class="box-card-container">
      <el-card class="box-card">
        
      <div class="card-header">
        <span>ASU CS / CSE Capstone Project Proposal Form</span>
      </div>
      <div class="card-paragraph">
        <div class="left-paragraph">
          Please complete one copy of this form per capstone project proposal.
        </div>
        <div class="left-paragraph">
          The deadline for Spring 2024 projects is Jan 15th, 2024. Note that every project lasts two semesters.
          
        </div>
        <div class="left-paragraph">
          For more information about CS/CSE Capstones, click here: 
          <a href="https://sites.google.com/asu.edu/cidse-capstone" target="_blank">https://sites.google.com/asu.edu/cidse-capstone</a>
        </div>
      </div>
      <hr class="divider" />
          <div class="additional-info">
            <p>Email: example@example.com</p>
            <el-button type="primary">Contact Us</el-button>
          </div>
     </el-card>
    </div>

    <div class="box-card-container" style="margin-top: 20px;">
      <el-card class="box-card">
      <div class="card-paragraph">
        <div class="left-paragraph">
          Interested in sponsoring a project for cohort:
        </div>
      </div>
      <div class="checkbox-group">
       <div>
            <el-checkbox v-model="checked1" label="Spring 2024 to Fall 2024 (students do not work over summer break)" size="large" />
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Summer 2024 to Fall 2024" size="large" />
        </div> 
        <div>
          <el-checkbox v-model="checked3" label="Fall 2024 to Spring 2024" size="large" />
        </div> 
      </div>
      </el-card>
    </div>


    <div class="box-card-container" style="margin-top: 20px;">
      <el-card class="box-card">
      <div class="card-paragraph">
        <div class="left-paragraph">
          How would you classify your company or organization? (Check all that apply)
        </div>
      </div>
      <div class="checkbox-group">
       <div>
            <el-checkbox v-model="checked1" label="Startup" size="large" />
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Incubator" size="large" />
        </div> 
        <div>
          <el-checkbox v-model="checked3" label="Sole Proprietorship" size="large" />
        </div> 
      </div>
      </el-card>
    </div>

    </div>
  </div>
</template>


<script setup>
import LandingPage from "../components/LandingPage.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
.content-image-container {
  position: relative;
}


.checkbox-group {
  text-align: left;
  padding: 0 20px;
  margin-top: 1rem;
}

.checkbox-group div {
  margin-bottom: 0.5rem; /* Adjust the margin as needed to control the spacing between checkboxes */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5em;
}

.sponsor-content-background {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}

.Sponsor-content{
  margin-top: 1rem;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.left-paragraph{
  text-align: left;
  line-height: 1.2;
  word-wrap: break-word;
  padding: 0 20px;
  margin-bottom: 1rem;
  margin-top: 1rem;

}

.box-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure the container takes up the full height of the parent */
}

.box-card {
  width: 600px;
}

.centered-text {
  font-weight: bold;
  font-family: "Noto Serif", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black; /* Change text color as needed */
  font-size: 3em; /* Change font size as needed */
}
</style>