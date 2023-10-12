<template>
  <div class="Sponsor-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Sponsor-header">
      <div class="image-container">
        <img
          src="../assets/Sponsor_background.jpg"
          class="sponsor-background"
        />
        <div class="centered-text">SPONSORS</div>
      </div>
    </div>
    <div class="Sponsor-links">
      <router-link to="/sponsorform" class="sponsor-link-format">
        Already Have a Team!
      </router-link>
      <router-link to="/sponsorform" class="sponsor-link-format">
        Don't Have a Team!
      </router-link>
    </div>
    <div class="Sponsor-content">
      <div class="sponsor-content-header">
        What are CS and CSE capstone projects?
      </div>
      <div class="sponsor-content-body">
        Capstone is a senior design course for Computer Science (focused on
        software development) and Computer Systems Engineering (focused on
        embedded systems development) undergraduate students. This course serves
        as a showcase of their skills and educates them on the transition from
        the academic world to the professional world.
      </div>
      <div class="sponsor-content-body">
        Students work in teams of 4-5 on an industry sponsored project for 2
        semesters. This provides a real-world experience to undergraduate
        students, and develops their professional skills in a low-risk
        environment.
      </div>
      <div class="sponsor-content-body">
        This department does not charge a fee to participate in the capstone
        program, we only ask for your time and support of our students in their
        capstone learning experience.
      </div>
      <div class="sponsor-content-body">
        Projects must meet requirements for
        <a
          href="https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships"
          target="_blank"
        >
          Unpaid Internships under the Fair Labor Standards Act.
        </a>
      </div>
      <div class="sponsor-content-body">
        Here are some
        <a
          href="https://sites.google.com/asu.edu/fse-capstone-sp20/computer-systems-engineering-teams"
          target="_blank"
        >
          <strong>examples of projects from the Spring 2020 Semester.</strong>
        </a>
      </div>
      <div class="sponsor-content-header">
        Why should I sponsor a capstone project?
      </div>
      <div class="sponsor-content-body">
        <em>Recruitment</em> - promote your company and attract the best
        students!
      </div>
      <div class="sponsor-content-body">
        <em>Extended Interview</em> - capstone projects allow you to evaluate
        candidates for employment over 2 semesters, at very low risk and minimal
        cost (only your time!)
      </div>
      <div class="sponsor-content-body">
        <em>Develop your management experience</em> - project contacts can
        develop their management skills by working with student teams in a
        low-risk environment.
      </div>
      <div class="sponsor-content-body">
        <em>Work product</em> - get some of those "nice to have" projects
        finished that you never seem to have time for! This is an educational
        experience for the students first, so completed projects are not
        guaranteed, and a capstone team should not be used to augment your staff
        or contribute to time or business critical development efforts.
      </div>
      <div class="sponsor-content-header">
        I have a sensitive project idea, what about NDAs and Intellectual
        Property?
      </div>
      <div class="sponsor-content-body">
        The Arizona Board of Regents policy on Intellectual Property (Policy
        6-908) states that student-created works are the property of the
        student. You can require Non-Disclosure Agreements and Intellectual
        Property waivers as part of the project, but these must be noted and
        included in your proposal. ASU will not provide the agreement forms, and
        these agreements will be between your organization and the students, not
        between your organization and ASU.
      </div>
      <div class="sponsor-content-body">
        A non-compete agreement is not appropriate for an academic experience
        and students will not be asked to sign such agreements.
      </div>
      <div class="sponsor-content-header">
        What will I be expected to contribute?
      </div>
      <div class="sponsor-content-body">
        - Present a clear vision for project goals and deliverables.
      </div>
      <div class="sponsor-content-body">
        - Provide necessary hardware or software to accomplish the project.
      </div>
      <div class="sponsor-content-body">
        - Be responsive to student questions within 1 business day.
      </div>
      <div class="sponsor-content-body">
        - Participate in regular progress reviews with the student team (every 2
        weeks).
      </div>
      <div class="sponsor-content-body">
        - Complete feedback and team evaluations (every 8 weeks).
        <a
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQiq6xNiqSXbzQim-xI3PfhpR7CgaNLYAePfda_z0OTi-2xdxBUX2nWzIHqbExHWN_FJnxbOrStpRzp/pubhtml"
          target="_blank"
        >
          <strong>Please reference this evaluation rubric.</strong></a
        >
      </div>
      <div class="sponsor-content-header">
        What should I expect from the student team?
      </div>
      <div class="sponsor-content-body">
        - Each student should contribute 8-10 hours per week on the project.
      </div>
      <div class="sponsor-content-body">
        - The team should organize a status meeting with every 2 weeks and
        maintain open channels of communication.
      </div>
      <div class="sponsor-content-body">
        - The team should be mostly self-managed by setting goals, asking
        questions, and completing tasks in a timely manner.
      </div>
      <div class="sponsor-content-header">How do I apply?</div>
      <div class="sponsor-content-body">
        To submit a project proposal for the capstone course, complete this
        form:
        <a href="./sponsorform" target="_blank">
          <strong>Project Proposal Submission</strong></a
        >
      </div>
      <div class="sponsor-content-body">
        The deadline for submission is the
        <a href="https://students.asu.edu/academic-calendar" target="_blank">
          first day of classes for each semester</a
        >
        (including Summer C session).
      </div>
      <div class="sponsor-content-body">
        Before starting the online form, you should prepare the following
        information:
      </div>
      <div class="sponsor-content-subtext">
        Contact information for proposer and project contact.
      </div>
      <div class="sponsor-content-subtext">Project Description including:</div>
      <div class="sponsor-content-subtext-list">
        - Please give a short title to identify the project, and provide a
        description which would provide the proposal reviewers and the students
        enough detail to understand the problem to be solved and the challenges
        of the project.
      </div>
      <div class="sponsor-content-subtext-list">
        - Describe the student learning experience. Provide insight into what
        the students would learn by working on this project. Also provide a
        description of the expected frequency of meetings, meeting
        modalities/locations, and level of sponsor involvement in the project.
      </div>
      <div class="sponsor-content-subtext-list">
        - Detail the project deliverables. Provide a list of what artifacts the
        students must deliver by the end of the two semester sequence. If
        possible specify the deliverables for each semester (1 semester = ~15
        weeks)
      </div>
      <div class="sponsor-content-subtext-list">
        - Describe desired background. Describe the expected knowledge of
        specific programming languages, operating systems, or technologies for
        the project. Provide the minimum background as well as those skills that
        will be a plus to have. Also, is the project strictly software-based or
        will the students need to have an understanding embedded systems or
        other hardware knowledge?
      </div>
      <div class="sponsor-content-subtext-list">
        - Maximum team size. Ideally teams are no larger than 5. Please let us
        know if you require a smaller team of students.
      </div>
      <div class="sponsor-content-subtext">Required Agreements</div>
      <div class="sponsor-content-subtext-list">
        - Provide a copy of any non-disclosure agreement and/or intellectual
        property agreement that the students would be required to sign. Any
        agreements must be provided by the proposer.
      </div>
      <div class="sponsor-content-subtext">Extra Information</div>
      <div class="sponsor-content-subtext-list">
        - Feel free to include any other information or support material that
        will provide insight into the project for the proposal reviewers and
        students. The more information you can provide the students to help them
        understand the problem and be motivated to work on the project, the more
        likely your project will be selected by the students.
      </div>
      <div class="sponsor-content-header">
        Can I see some examples of proposals?
      </div>
      <div class="sponsor-content-body">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRM8chDQPChCFl26fumxpNhr8MPwTvVCmX4bXfaPD6s_o0XbOodAWo6do9bAZWXqw/pub"
          target="_blank"
        >
          Click here to view the catalog of proposals from Spring 2019.</a
        >
      </div>
      <div class="sponsor-content-body">
        Here are some
        <a
          href="https://sites.google.com/asu.edu/fse-capstone-sp20/computer-systems-engineering-teams"
          target="_blank"
        >
          <strong
            >examples of completed projects from the Spring 2020
            Semester.</strong
          ></a
        >
      </div>
      <div class="sponsor-content-header">What happens after I apply?</div>
      <div class="sponsor-content-body">
        First week of the semester - students review project proposals and
        choose their favorites.
      </div>
      <div class="sponsor-content-body">
        Second week of semester - Faculty assign teams based on student
        preferences. After assignment is complete, the coordinator will notify
        you of your team assignment, or if your project was not chosen.
      </div>
      <div class="sponsor-content-body">
        Third week - Student teams should contact you to setup the first meeting
        and recurring bi-weekly progress meetings throughout the semester.
      </div>
      <div class="sponsor-content-header">
        If you have any questions, please feel free to reach out!
      </div>
      <div class="sponsor-content-body">
        Contact Steven Osburn at
        <strong><a href="mailto:sdosburn@asu.edu">sdosburn@asu.edu</a></strong>
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

.sponsor-background {
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
  color: white; /* Change text color as needed */
  font-size: 5em; /* Change font size as needed */
}

.Sponsor-links {
  display: flex;
  gap: 20rem;
  margin-top: 1rem;
  justify-content: center;
}

.sponsor-link-format {
  font-family: "Noto Serif", serif;
  font-size: 20px;
  color: black;
  font-weight: bold;
}
.Sponsor-content {
  justify-content: left;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.sponsor-content-header {
  font-weight: bold;
  font-size: 17px;
  text-align: left;
  margin-top: 2rem;
}

.sponsor-content-body {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
}
.sponsor-content-body a,
.home-info a {
  color: black;
}
.sponsor-content-subtext {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
  margin-left: 1rem;
}

.sponsor-content-subtext-list {
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 20px; /* Adjust as needed */
  text-align: justify;
  margin-top: 1rem;
  margin-left: 3rem;
}
</style>
