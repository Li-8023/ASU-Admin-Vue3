<template>
  <div class="page-home">
    <div class="heading-home">
      <LandingPage />
    </div>
    <div class="content-home">
      <HomeContent />
      <!-- <Component1 />
      <Component2 /> -->
    </div>
  </div>
</template>

<script setup>
import HomeContent from "../components/HomePageContent.vue";
// import { Component1, Component2 } from "../components/HomePageContent.vue";
import LandingPage from "../components/LandingPage.vue";
</script>

<style>
</style>
