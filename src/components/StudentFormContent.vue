<template>
  <div class="Student-Page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Student-content-header">
      <div class="student-content-image-container">
        <img
          src="../assets/studentForm.jpg"
          class="student-content-background"
        />
        <div class="centered-text-student">STUDENTS</div>
      </div>
    </div>

    <div class="student-content">

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-header-special">
            <span>ASU CS / CSE Capstone Student Project Proposal Form</span>
          </div>
          <div class="card-paragraph">
            <div class="left-paragraph">
              Please complete one copy of this form per capstone project
              proposal.
            </div>
            <div class="left-paragraph">
              The deadline for Spring projects is Jan 15th 2024. Note that every
              project lasts two semesters.
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
          <div class="additional-info">
            <p>Email: <strong>example@example.com</strong></p>
            <el-button type="text" @click="switchAccount"
              >Switch Account</el-button
            >
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-header">
            <span>Contact Information</span>
          </div>
          <div class="card-paragraph">
            <div class="left-paragraph">
              Please include the contact information of YOURSELF as the person
              proposing the capstone project.
            </div>
            <div class="left-paragraph">
              All student capstone projects, even when proposed for a student,
              must have an industry or faculty sponsor that can meet with the
              team every 2 weeks, and provide feedback on team progress. You
              need to find the sponsor before submitting your proposal.
            </div>
            <div class="left-paragraph">
              You must propose a list of teammates that have agreed to work on
              this project. If all information provided is correct, you will
              automatically be assigned to this team.
            </div>
            <div class="left-paragraph">
              If, after you view the industry project list, you decide you would
              rather work on an industry project, you must email the capstone
              coordinator ( sdosburn@asu.edu ) and request removal of this
              proposal. If you do not notify before the project preferences
              deadline, you will be assigned to this student team.
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Proposer Name:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Proposer Email Address:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Sponsor Contact Name:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Sponsor Contact Email:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              <strong>Full names of Proposed Team:</strong>
            </div>
          </div>
          <div class="left-paragraph">
            Please include the FULL NAME of all the students, separated by
            commas. Include yourself.
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              <strong>Email Addresses of Proposed Team:</strong>
            </div>
          </div>
          <div class="left-paragraph">
            Please include the ASU Email addresses of the students, separated by
            semicolons. Include your own email here as well.
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-header-special">
            <span>Project Description</span>
          </div>
          <div class="card-paragraph">
            <div class="left-paragraph">
              Please give a short title to identify the project, and provide a
              description which would provide the proposal reviewers and the
              students enough detail to understand the problem to be solved and
              the challenges of the project.
            </div>
            <div class="left-paragraph">
              Describe the student learning experience. Provide insight into
              what the students would learn by working on this project. Also
              provide a description of the expected frequency of meetings,
              meeting modalities/locations, and level of sponsor involvement in
              the project.
            </div>
            <div class="left-paragraph">
              Detail the project deliverables. Provide a list of what artifacts
              the students must deliver by the end of the two semester sequence.
            </div>
            <div class="left-paragraph">
              Describe desired background. Describe the expected knowledge of
              specific programming languages, operating systems, or technologies
              for the project. Also, is the project strictly software-based or
              will the students need to have an understanding embedded systems
              or other hardware knowledge?
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Project Title:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Project Description:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Student Learning Experience:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Expected Deliverables:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Desired Background:</div>
          </div>
          <div class="underline-input">
            <input placeholder="Your answer" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Project Focus:</div>
          </div>
          <div class="checkbox-group">
            <div>
              <el-checkbox
                v-model="checked28"
                label="Significant Software Development (for CS students)"
                size="large"
              />
              <el-checkbox
                v-model="checked29"
                label="Significant Hardware / Embedded Software Development (for CSE Students)"
                size="large"
              />
              <el-checkbox
                v-model="checked29"
                label="Both Significant Software and Embedded Systems Development"
                size="large"
              />
              <el-checkbox
                v-model="checked29"
                label="Interdisciplinary project that may work with majors outside of CS and CSE"
                size="large"
              />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            Maximum Team Size:
            <el-select
              v-model="selectedTeamSize"
              placeholder="Choose"
              @change="updateTeamSize"
            >
              <el-option label="2" value="2" />
              <el-option label="3" value="3" />
              <el-option label="4" value="4" />
              <el-option label="5" value="5" />
            </el-select>
          </div>
        </el-card>
      </div>
    </div>

    <div class="button" style="margin-top: 20px; display: flex; justify-content: flex-end; width: 925px;">
        <el-button :color="bg" plain>Submit</el-button>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'var(--moon-color)', // Set the background color to a CSS variable
    };
  },
};
</script>

<script setup>
import LandingPage from "../components/LandingPage.vue";
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
.student-content-image-container {
  position: relative;
}

.student-content-background {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}

.centered-text-student {
  font-weight: bold;
  font-family: "Noto Serif", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black; /* Change text color as needed */
  font-size: 3em; /* Change font size as needed */
}

.centered-text-student::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Adjust the distance between text and underline as needed */
  left: -10%; /* Extend to the left */
  right: -10%; /* Extend to the right */
  border-bottom: 10px solid gold; /* You can adjust the color and style as needed */
}

.student-content {
  justify-content: left;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
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

.box-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure the container takes up the full height of the parent */
}

.box-card {
  width: 600px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
}

.card-header-special {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3em;
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

.checkbox-group {
  text-align: left;
  padding: 0 20px;
  margin-top: 1rem;
}

.checkbox-group div {
  margin-bottom: 0.5rem; /* Adjust the margin as needed to control the spacing between checkboxes */
}

.button {
  --moon-color: moon; /* Define a CSS variable with the 'moon' color */
}

.el-button {
  background: var(--bg-color); /* Use the CSS variable for the background color */
  /* Other button styles go here */
}
</style>
