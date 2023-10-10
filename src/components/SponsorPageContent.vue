<template>
  <div class="Sponsor-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Sponsor-header">
      <div class="image-container">
        <img src="../assets/Sponsor_background.jpg" class="sponsor-background" />
        <div class="centered-text">Sponsor</div>
      </div>
    </div>
    <div class="Sponsor-links"></div>
    <div class="Sponsor-content"></div>
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

.sponsor-background {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}

.centered-text {
  font-family: "Noto Serif", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Change text color as needed */
  font-size: 5em; /* Change font size as needed */
}
</style>