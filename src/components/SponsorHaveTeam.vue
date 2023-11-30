<template>
  <div class="SponsorForm-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Sponsor-content-header">
      <div class="content-image-container">
        <img
          src="../assets/sponsor_have_team.jpg"
          class="sponsor-content-background"
        />
        <div class="centered-text-sponsor">PROPOSE A PROJECT</div>
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
          <!-- <el-divider border-style="double" />
          <div class="additional-info">
            <p>Email: <strong>example@example.com</strong></p>
            <el-button type="text" @click="switchAccount"
              >Switch Account</el-button
            >
          </div> -->
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
              <el-checkbox v-model="checked4" label="Startup" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked5" label="Incubator" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked6"
                label="Sole Proprietorship"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked7"
                label="Social Enterprise"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked8"
                label="Sole Proprietorship"
                size="large"
              />
            </div>
            <div>
              <el-checkbox v-model="checked9" label="Non-Profit" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked10"
                label="Small to Medium Enterprise"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked11"
                label="Large Enterprise"
                size="large"
              />
            </div>
            <div class="other-checkbox-container">
              <el-checkbox v-model="checked12" label="other" size="large" />
              <el-input
                v-model="otherInput"
                placeholder=""
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
              <el-checkbox v-model="checked13" label="Yes" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked14" label="No" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked15"
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
              <el-checkbox v-model="checked16" label="Yes" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked17" label="No" size="large" />
            </div>
            <div>
              <el-checkbox
                v-model="checked18"
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
              <el-checkbox v-model="checked19" label="Yes" size="large" />
            </div>
            <div>
              <el-checkbox v-model="checked20" label="No" size="large" />
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
          <div class="underline-input">
            <input v-model="projectProposerOrganization" placeholder="" id="projectProposerOrganization">
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Proposer Name:</div>
          </div>
          <div class="underline-input">
            <input v-model="projectProposerName" placeholder="Your answer" id="projectProposerName"/>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Proposer Email Address:</div>
          </div>
          <div class="underline-input">
            <input v-model="projectProposerEmail" placeholder="Your answer" id="projectProposerEmail"/>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Project Contact Name (if different from proposer):
            </div>
          </div>
          <div class="underline-input">
            <input v-model= "projectProjectContactName" placeholder="Your answer" id="projectProjectContactName" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Project Contact Email (if different from proposer):
            </div>
          </div>
          <div class="underline-input">
            <input v-model= "projectProjectContactEmail" placeholder="Your answer" id="projectProjectContactEmail"/>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="inline-header" style="font-size: 1em">
              Project Description
            </div>
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
            <input v-model ="projectTitle" placeholder="Your answer" id="projectTitle" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Project Description:</div>
          </div>
          <div class="underline-input">
            <input v-model = "projectDescription" placeholder="Your answer" id="projectDescription"/>
          </div>
        </el-card>
      </div>

      <!--different part-->
      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Students who already in your team(divide by ;)
            </div>
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
            <input v-model = "projectStudentLearningExperience" placeholder="Your answer" id = "projectStudentLearningExperience" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Expected Deliverables:</div>
          </div>
          <div class="underline-input">
            <input v-model = "projectExpectedDeliverables" placeholder="Your answer" id="projectExpectedDeliverables" />
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">Desired Background:</div>
          </div>
          <div class="underline-input">
            <input v-model = "projectDesiredBackground" placeholder="Your answer" id="projectDesiredBackground"/>
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
                v-model="checked21"
                label="Significant Software Development (for CS students)"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked22"
                label="Significant Hardware / Embedded Software Development (for CSE Students)"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked23"
                label="Both Significant Software and Embedded Systems Development"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked24"
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

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="inline-header" style="font-size: 1em">
              Required Agreements
            </div>
            <div class="left-paragraph">
              Please note any non-disclosure agreement and/or intellectual
              property agreement that the students would be required to sign, or
              any US Citizenship requirements. Any agreements must be provided
              by the proposer.
            </div>
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
                v-model="checked25"
                label="Non-Disclosure Agreement"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked26"
                label="Intellectual Property Agreement"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked27"
                label="Ability to Obtain US Security Clearance"
                size="large"
              />
            </div>
            <div>
              <el-checkbox
                v-model="checked28"
                label="No Agreements are required"
                size="large"
              />
            </div>

            <div>
              <el-checkbox
                v-model="checked29"
                label="US Citizenship Required"
                size="large"
              />
            </div>
            <div>
              <el-checkbox v-model="checked30" label="Other" size="large" />
              <el-input
                v-model="otherInput1"
                placeholder=""
                class="input-with-space"
              />
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="inline-header" style="font-size: 1em">
              Project Description
            </div>
            <div class="left-paragraph">
              Feel free to include any other information or support material
              that will provide insight into the project for the proposal
              reviewers and students. The more information you can provide the
              students to help them understand the problem and be motivated to
              work on the project, the more likely your project will be selected
              by the students.
            </div>
          </div>
        </el-card>
      </div>

      <div class="box-card-container" style="margin-top: 20px">
        <el-card class="box-card">
          <div class="card-paragraph">
            <div class="left-paragraph">
              Please inlcude links to any additional materials (presentations,
              additional documentation, etc) that you would like the students to
              view.
            </div>
          </div>
          <div class="underline-input">
            <input v-model = "projectProjectLinks" placeholder="Your answer" id="projectProjectLinks"/>
          </div>
        </el-card>
      </div>
    </div>
    <div
      class="button"
      style="
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        width: 925px;
      "
    >
      <el-button :color="bg" plain @click="submitData">Submit</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organization: "",
      projectTitle:"",
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
      otherInput: "",
      checked13: false,
      checked14: false,
      checked15: false,
      checked16: false,
      checked17: false,
      checked18: false,
      checked19: false,
      checked20: false,
      projectProposerOrganization: "",
      projectProposerName:"",
      projectProposerEmail:"",
      projectProjectContactName:"",
      projectDescription:"",
      projectStudentLearningExperience:"",
      projectExpectedDeliverables:"",
      projectDesiredBackground:"",
      checked21: false,
      checked22: false,
      checked23: false,
      checked24: false,
      checked25: false,
      checked26: false,
      checked27: false,
      checked28: false,
      checked29: false,
      checked30: false,
      otherInput1: "",
      projectLinks:"",
      selectedTeamSize: null,
      projectProjectContactEmail:"",


    };
  },
  methods: {
    switchAccount() {
      window.open(
        "https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSeXiCKRfBdKgLI0JTBdKE09PHWIVIh8p9suybNX1LdyZD8plg%2Fviewform%3Fembedded%3Dtrue&service=wise&theme=glif&flowName=GlifWebSignIn&flowEntry=AccountChooser",
        "_blank"
      );
    },

    submitData(){

      let selectedCohort = "";
      if (this.checked1) {
        selectedCohort +=
          " Spring 2024 to Fall 2024 (students do not work over summer break) ";
      }
      if (this.checked2) {
        selectedCohort += " Summer 2024 to Fall 2024 ";
      }
      if (this.checked3) {
        selectedCohort += " Fall 2024 to Spring 2024 ";
      }
      //2
      let selectedClassifications = "";
      if (this.checked4) {
        selectedClassifications += "Startup, ";
      }
      if (this.checked5) {
        selectedClassifications += "Incubator, ";
      }
      if (this.checked6) {
        selectedClassifications += "Sole Proprietorship, ";
      }
      if (this.checked7) {
        selectedClassifications += "Social Enterprise, ";
      }
      if (this.checked8) {
        selectedClassifications += "Sole Proprietorship, ";
      }
      if (this.checked9) {
        selectedClassifications += "Non-Profit, ";
      }
      if (this.checked10) {
        selectedClassifications += "Small to Medium Enterprise, ";
      }
      if (this.checked11) {
        selectedClassifications += "Large Enterprise, ";
      }
      if (this.checked12) {
        selectedClassifications += this.otherInput;
      }
      //3
      let selectedintellectualPropertyConcerns = "";
      if (this.checked13) {
        selectedintellectualPropertyConcerns += " Yes ";
      }
      if (this.checked14) {
        selectedintellectualPropertyConcerns += " No ";
      }
      if (this.checked15) {
        selectedintellectualPropertyConcerns += " IP is not a concern";
      }
      //4
      let selectedprojectResourcesProvided = "";
      if (this.checked16) {
        selectedprojectResourcesProvided += " Yes ";
      }
      if (this.checked17) {
        selectedprojectResourcesProvided += " No ";
      }
      if (this.checked18) {
        selectedprojectResourcesProvided += " No extra resources needed";
      }
      //5
      let selecteddedicatedContact = "";
      if (this.checked19) {
        selecteddedicatedContact += " Yes ";
      }
      if (this.checked20) {
        selecteddedicatedContact += " No";
      }
      //6
      let selectedProjectFocus = "";
      if (this.checked21) {
        selectedProjectFocus += "Significant Software Development (for CS students)";
      }
      if (this.checked22) {
        selectedProjectFocus += " Significant Hardware / Embedded Software Development (for CSE Students)";
      }
      if (this.checked23) {
        selectedProjectFocus += " Both Significant Software and Embedded Systems Development";
      }
      if (this.checked24) {
        selectedProjectFocus += " Interdisciplinary project that may work with majors outside of CS and CSE";
      }
      //7
      let selectedRequiredAgreements = "";
      if (this.checked25) {
        selectedRequiredAgreements +="Non-Disclosure Agreement";
      }
      if (this.checked26) {
        selectedRequiredAgreements += " Intellectual Property Agreement";
      }
      if (this.checked27) {
        selectedRequiredAgreements += " Ability to Obtain US Security Clearance";
      }
      if (this.checked28) {
        selectedRequiredAgreements += " No Agreements are required";
      }
      if (this.checked29) {
        selectedRequiredAgreements += " US Citizenship Required ";
      }
      if (this.checked30) {
        selectedRequiredAgreements += this.otherInput1;
      }

      const currentTimeStamp = new Date();
      const formattedTimestamp = currentTimeStamp.toISOString();

      const projectData = {
        cohort: selectedCohort,
        title: this.projectTitle,
        timestamp: formattedTimestamp,
        organizationClassification: selectedClassifications,
        intellectualPropertyConcerns: selectedintellectualPropertyConcerns,
        projectResourcesProvided: selectedprojectResourcesProvided,
        dedicatedContact: selecteddedicatedContact,
        projectFocus: selectedProjectFocus,
        proposerOrganization: this.projectProposerOrganization,
        proposerName: this.projectProposerName,
        proposerEmail: this.projectProposerEmail,
        projectContactName: this.projectProjectContactName,
        description: this.projectDescription,
        studentLearningExperience: this.projectStudentLearningExperience,
        expectedDeliverables: this.projectExpectedDeliverables,
        desiredBackground: this.projectDesiredBackground,
        projectLinks: this.projectProjectLinks,
        requiredAgreements: selectedRequiredAgreements,
        maxTeamSize: this.selectedTeamSize,
        projectContactEmail: this.projectProjectContactEmail,

      };



      fetch('http://localhost:8080/addProject', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      })
      .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data sent successfully:", data);

          // Optionally, you can reset the checkboxes after successful submission
          this.checked1 = false;
          this.checked2 = false;
          this.checked3 = false;
          this.checked4 = false;
          this.checked5 = false;
          this.checked6 = false;
          this.checked7 = false;
          this.checked8 = false;
          this.checked9 = false;
          this.checked10 = false;
          this.checked11 = false;
          this.checked12 = false;
          this.otherInput = "";
          this.checked13 = false;
          this.checked14 = false;
          this.checked15 = false;
          this.checked16 = false;
          this.checked17 = false;
          this.checked18 = false;
          this.checked19 = false;
          this.checked20 = false;
          this.checked21 = false;
          this.checked22 = false;
          this.checked23 = false;
          this.checked24 = false;
          this.checked25 = false;
          this.checked26 = false;
          this.checked27 = false;
          this.checked28 = false;
          this.checked29 = false;
          this.checked30 = false;
          this.otherInput1 = "";
          
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    }
  },
};
</script>

<script setup>
import LandingPage from "../components/LandingPage.vue";

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

.centered-text-sponsor {
  font-weight: bold;
  font-family: "Noto Serif", serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; 
  font-size: 3em; 
}

.centered-text-sponsor::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Adjust the distance between text and underline as needed */
  left: -10%; /* Extend to the left */
  right: -10%; /* Extend to the right */
  border-bottom: 10px solid gold; /* You can adjust the color and style as needed */
}

.underline-input input {
  border: none;
  border-bottom: 0.5px solid black;
  outline: none;
  width: 100%;
}
</style>
