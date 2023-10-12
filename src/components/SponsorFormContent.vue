<template>
  <div class="SponsorForm-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Sponsor-content-header">
      <div class="content-image-container">
        <img
          src="../assets/group-of-students-looking-at-computer-monitor.jpg"
          class="sponsor-content-background"
        />
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
              Please complete one copy of this form per capstone project
              proposal.
            </div>
            <div class="left-paragraph">
              The deadline for Spring 2024 projects is Jan 15th, 2024. Note that
              every project lasts two semesters.
            </div>
            <div class="left-paragraph">
              For more information about CS/CSE Capstones, click here:
              <a
                href="https://sites.google.com/asu.edu/cidse-capstone"
                target="_blank"
                >https://sites.google.com/asu.edu/cidse-capstone</a
              >
            </div>
          </div>
          <el-divider border-style="double" />
          <div class="additional-info">
            <p>Email: <strong>example@example.com</strong></p>
            <el-button type="text" @click="switchAccount">Switch Account</el-button>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Interested in sponsoring a project for cohort:
            </div>
          </div>
          <div class="checkbox-group">
            <div>
              <el-checkbox
                v-model="checked1"
                label="Spring 2024 to Fall 2024 (students do not work over summer break)"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked2"
                label="Summer 2024 to Fall 2024"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked3"
                label="Fall 2024 to Spring 2024"
                size="large"
              />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              How would you classify your company or organization? (Check all
              that apply)
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
              <el-checkbox
                v-model="checked3"
                label="Sole Proprietorship"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked4"
                label="Social Enterprise"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked5"
                label="Sole Proprietorship"
                size="large"
              />
            </div>
            <div>
              <el-checkbox v-model="checked6" label="Non-Profit" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked7"
                label="Small to Medium Enterprise"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked8"
                label="Large Enterprise"
                size="large"
              />
            </div>
            <!-- <div>
          <el-checkbox v-model="checked9" label="other" size="large" />
          <el-input v-model="otherInput" placeholder="" />
        </div>  -->
            <div class="other-checkbox-container">
              <el-checkbox v-model="checked9" label="other" size="large" />
              <el-input
                v-model="otherInput"
                placeholder="Other (please specify)"
                class="input-with-space"
              />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              If Intellectual property is a concern, you are able provide an IP
              waiver and/or NDA agreement for the students to sign.
            </div>
          </div>
          <div class="checkbox-group">
            <div>
              <el-checkbox v-model="checked10" label="Yes" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked11" label="No" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked12"
                label="IP is not a concern"
                size="large"
              />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              You are able to provide any specialized resources (software,
              services, hardware) that are needed to complete the project (ASU
              provides basic development environments and tools, but no
              funding).
            </div>
          </div>
          <div class="checkbox-group">
            <div>
              <el-checkbox v-model="checked13" label="Yes" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked14" label="No" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked15"
                label="No extra resources needed"
                size="large"
              />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Provide a dedicated contact who is available to answer periodic
              emails or phone calls over the duration of the project to address
              students' questions within 1 business day, and to meet with the
              team for approximately 1 hour every 2 weeks (at least).
            </div>
          </div>
          <div class="checkbox-group">
            <div>
              <el-checkbox v-model="checked16" label="Yes" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked17" label="No" size="large" />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="inline-header" style="font-size: 1em">
              Contact Information
            </div>
            <div class="left-paragraph">
              Provide a dedicated contact who is available to answer periodic
              emails or phone calls over the duration of the project to address
              students' questions within 1 business day, and to meet with the
              team for approximately 1 hour every 2 weeks (at least).
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Proposer Organization (Company or Department Name)
            </div>
          </div>
          <div class="input-field">
            <el-input
              v-model="organization"
              placeholder="Your answer"
            ></el-input>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              test here
            </div>
          </div>
          <div class="underline-input">
            <input placeholder="Enter text"/>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organization: "",
      checked: false,
    };
  },
  methods:{
    switchAccount(){
      window.open('https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSeXiCKRfBdKgLI0JTBdKE09PHWIVIh8p9suybNX1LdyZD8plg%2Fviewform%3Fembedded%3Dtrue&service=wise&theme=glif&flowName=GlifWebSignIn&flowEntry=AccountChooser', '_blank');
    }
  }
};
</script>

<script setup>
import LandingPage from "../components/LandingPage.vue";
const otherInput = "";
const organization = "";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
.content-image-container {
  position: relative;
}

.other-checkbox-container {
  display: flex;
  align-items: center; /* Align items vertically */
}
.input-with-space {
  margin-left: 10px;
}

.checkbox-group {
  text-align: left;
  padding: 0 20px;
  margin-top: 1rem;
}


.additional-info {
  display: flex;
  align-items: center; /* Vertically align content */
}

.additional-info p {
  margin-right: 20px; /* Adjust the margin as needed to control the spacing */
}
.checkbox-group div {
  margin-bottom: 0.5rem; /* Adjust the margin as needed to control the spacing between checkboxes */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
}

.inline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1em;
}

.sponsor-content-background {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}

.Sponsor-content {
  margin-top: 1rem;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.left-paragraph {
  text-align: left;
  line-height: 1.2;
  word-wrap: break-word;
  padding: 0 20px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: -1rem;
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

.underline-input input {
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  width: 100%;
}
</style>
