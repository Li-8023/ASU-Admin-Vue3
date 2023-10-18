<template>
  <div class="student-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="student-header">
      <div class="image-container">
        <img
          src="../assets/Student_background.jpg"
          class="student-background"
        />
        <div class="centered-text">STUDENTS</div>
      </div>
    </div>
    <div class="student-links">
      <router-link to="/studentform" class="student-link-format">
        Submit a Proposal!
      </router-link>
      <router-link to="/pickProject" class="student-link-format">
        Pick Your Favorite Projects!
      </router-link>
    </div>
    <div class="student-content">
      <div class="student-content-body">
        The main purpose of this course sequence is to give you the tools you
        need to transition from the academic environment of ASU to your careers.
        The primary mechanism we use for this is a capstone project that you
        will complete as part of a team over the next two semesters. The
        capstone project is intended to apply and showcase the skills you've
        learned over your time at ASU.
      </div>
      <div class="student-content-body">
        Here are some
        <a
          href="https://sites.google.com/asu.edu/fse-capstone-sp20/computer-systems-engineering-teams"
          target="_blank"
        >
          <strong> examples of projects from the Spring 2020 Semester.</strong>
        </a>
      </div>
      <div class="student-content-body">
        <strong>You'll have a choice of capstone projects</strong> - many are supported by
        faculty or industry partners, and those will be published during the
        first week of class. However, you also have the option of proposing a
        capstone project of your own design.
      </div>
      <div class="student-content-body">
        Capstone projects should be appropriate to your major (software
        development for CS, hardware and software for CSE), and scoped to be
        challenging for a team of approximately 4 students to complete over the
        course of 9 months, each student contributing 8-10 hours per week to the
        project. You must also locate a faculty or industry sponsor that is
        willing to meet with your team every 2 weeks, and provide evaluations of
        your progress.
      </div>
      <div class="student-content-body">
        When completing the form, If you would like to specify your own team of
        students, please add their names and ASU email addresses to the
        description field. If you do not specify a team, the project will be
        open for other students to choose.
      </div>
    </div>
    <div class="home-info">
      If you have questions or would like more information, please contact
      <strong><a href="mailto:sdosburn@asu.edu">sdosburn@asu.edu</a></strong>
    </div>
  </div>
</template>

<script setup>
import LandingPage from "../components/LandingPage.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
.image-container {
  position: relative;
}

.student-background {
  height: 15rem;
  width: 100%;
  object-fit: cover;
  justify-content: center;
}

.centered-text {
  font-family: "Noto Serif", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5em;
}

.centered-text::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: -10%;
  right: -10%;
  border-bottom: 10px solid gold;
}

.student-links {
  display: flex;
  gap: 20rem;
  margin-top: 1rem;
  justify-content: center;
}

.student-link-format {
  font-family: "Noto Serif", serif;
  font-size: 20px;
  color: black;
  font-weight: bold;
}

.student-link-format:hover {
  color: maroon; /* Change text color to maroon when hovering */
}

.student-content {
  justify-content: left;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.student-content-header {
  font-weight: bold;
  font-size: 17px;
  text-align: left;
  margin-top: 2rem;
}

.student-content-body {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
}
.student-content-body a,
.home-info a {
  color: black;
}
.student-content-subtext {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
  margin-left: 1rem;
}

.student-content-subtext-list {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
  margin-left: 3rem;
}
</style>
