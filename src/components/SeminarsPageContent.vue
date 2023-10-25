<template>
  <div class="Seminars-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Seminars-header">
      <div class="image-container">
        <img
          src="../assets/seminars.jpg"
          class="Seminars-background"
        />
        <div class="centered-text">SEMINARS</div>
      </div>
    </div>

    <div class="seminars-content">
      <div class="seminars-title">Interested in hosting a seminar?</div>
      <div class="seminars-content-body">
        ASU CIDSE would like to invite you to present a seminar to our senior
        students as part of the
        <strong>CIDSE Capstone Seminar Series.</strong> This series of
        presentations and panels brings industry representative onto the Tempe
        ASU campus to talk to students about the skills they need to
        successfully transition from the academic world to the professional
        world. This is a great opportunity for employers to connect directly
        with students to give advice and build the skills they'll need for their
        careers.
      </div>
      <div class="seminars-content-body">
        Seminar events are approximately 1 hour in duration, held during the
        afternoons throughout the semester, either in-person or remotely.
      </div>
      <div class="seminars-content-body">
        <strong> Topics may include (but are not limited to):</strong>
      </div>
      <ul class="dot-list">
        <li>Job search advice (resume & cover letter)</li>
        <li>Interviewing</li>
        <li>What to expect during the first year?</li>
        <li>Graduate School</li>
        <li>Personal Finance</li>
      </ul>
      <div class="seminars-content-body">
        Students are interested in the technologies and processes that you're 
        using!  Please feel free to propose a seminar on a technical or 
        career topic not mentioned here. 
      </div>
      <div class="seminars-content-body">
        Please share this with anyone that might be interested.  
      </div>
      <div class="home-info">
        If you are interested in hosting an event, please contact
      <strong><a href="mailto:sdosburn@asu.edu">sdosburn@asu.edu</a></strong>
      to setup a seminar for your organization.
    </div>
      


    </div>
  </div>
</template>

<script setup>
import LandingPage from "../components/LandingPage.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
.Seminars-background {
  height: 15rem;
  width: 100%;
  object-fit: cover;
  justify-content: center;
}
.seminars-title {
  font-weight: bold;
  font-size: 17px;
  text-align: left;
  margin-top: 2rem;
}

.seminars-content {
  justify-content: left;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.seminars-content-body {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
}
.dot-list {
  list-style: disc;
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
  margin-left: 20px;
}
.home-info a {
  color: black;
}
</style>
