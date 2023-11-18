<template>
  <div class="Pick-Project-page">
    <div class="Landing-page">
      <LandingPage />
    </div>

    <div class="Pick-main-content">
      <div class="pick-container">
        <div class="Pick-title">PICK YOUR TOP 10 PROJECTS</div>
        <div class="button-container">
          <el-button color="maroon" plain @click="submit">Submit</el-button>
        </div>
        <div class="pools-container">
          <div>
            <h3>CS / CSE Capstone Proposal Catalog</h3>
            <el-input
              type="text"
              v-model="searchQuery"
              placeholder="Search projects"
              class="search-bar"
              clearable
            />
            <vue-draggable-next
              v-model="filteredChoicePool"
              group="people"
              class="list-container"
            >
              <div
                v-for="item in filteredChoicePool"
                :key="item.id"
                class="choicePool-item"
                @click="showProjectDescription(item.id)"
              >
                {{ item.name }}
              </div>
            </vue-draggable-next>
          </div>
          <div>
            <h3>Top 10 Projects</h3>
            <div class="user-choice-container">
              <vue-draggable-next
                v-model="userPool"
                group="people"
                class="list-container"
                @change="handleChange"
              >
                <div
                  v-for="(item, index) in userPool"
                  :key="item.id"
                  class="userPool-item"
                  @click="showProjectDescription(item.id)"
                >
                  <span class="item-tag">{{ index + 1 }}</span>
                  <span class="item-name">{{ item.name }}</span>
                </div>
              </vue-draggable-next>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watchEffect } from "vue";
import LandingPage from "../components/LandingPage.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  components: {
    LandingPage,
    VueDraggableNext,
  },
  setup() {
    const userPool = ref([]);
    const choicePool = ref([]);
    const searchQuery = ref("");
    const initialChoicePool = ref([]);
    watchEffect(() => {
      initialChoicePool.value = [...choicePool.value];
    });

    const fetchProjects = async () => {
      const response = await fetch("http://localhost:8080/allProjects");
      const data = await response.json();

      if (data) {
        data.forEach((project) => {
          choicePool.value.push({ id: project.id, name: project.title });
        });
      } else {
        console.error("Data is undefined");
      }
    };

    onMounted(fetchProjects);

    const handleChange = () => {
      if (userPool.value.length > 10) {
        ElMessage.error("You can only have up to ten items in the user pool.");

        const removedItem = userPool.value.pop();
        choicePool.value.push(removedItem);
      }
    };

    const filteredChoicePool = computed(() => {
      return initialChoicePool.value.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const submit = async () => {
      const studentId = sessionStorage.getItem("studentId");

      if (!studentId) {
        ElMessage.error(
          "If you are a student, please log in. If you are not a student, you don't have permission to submit."
        );
        return;
      }

      const projectIds = userPool.value.map((item) => item.id);
      if (projectIds.length !== 10) {
        ElMessage.error("Please choose exactly 10 projects.");
        return;
      }

      const response = await fetch(
        `http://localhost:8080/projectSignup/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectIds),
        }
      );
      if (!response.ok) {
        console.error("Error submitting projects:", await response.text());
      } else {
        console.log(" Successfully submitted" + JSON.stringify(projectIds));

        ElMessage({
          message: "Congrats, projects submitted successfully.",
          type: "success",
        });
        userPool.value = [];
      }
    };

    const showProjectDescription = async (projectId) => {
      try {
        const response = await fetch(
          `http://localhost:8080/findProject/${projectId}`
        );
        const data = await response.json();

        if (data && data.description) {
          showPopup(data.description);
        } else {
          ElMessage.error("There is no description for this project.");
        }
      } catch (error) {
        console.error("Error fetching project description:", error);
        ElMessage({
          message: "Something went wrong",
          type: "error",
        });
      }
    };

    const showPopup = (description) => {
      ElMessageBox.alert(description, "Project Description", {
        confirmButtonText: "OK",
        customClass: "project-description-popup",
      }).catch(() => {});
    };

    return {
      choicePool,
      userPool,
      searchQuery,
      filteredChoicePool,
      handleChange,
      submit,
      showProjectDescription,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");

.Pick-title {
  font-family: "Noto Serif", serif;
  color: black;
  font-size: 2em;
  margin-bottom: 20px;
}
.pools-container {
  display: flex;
  justify-content: space-between;
}
.list-container {
  display: flex;
  flex-direction: column; /* Display items vertically */
  gap: 10px;
  flex-wrap: nowrap; /* Prevent items from wrapping to the next row */
  width: 500px; /* Set the width to your desired value */
  max-height: 700px; /* Set the maximum height to control the scroll if needed */
  overflow-y: auto; /* Add vertical scroll if items exceed max-height */
}

.choicePool-item,
.userPool-item {
  margin: 5px;
  padding: 10px;
  border: 1px solid gold;
  background-color: gold;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.user-choice-container {
  min-height: 150px;
  border: 2px dashed #888;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
  align-content: flex-start;
  width: 500px; /* Set the width to your desired value */
  max-height: 700px; /* Set the maximum height to control the scroll if needed */
  overflow-y: auto; /* Add vertical scroll if items exceed max-height */
}

.item-wrap {
  display: flex;
  align-items: center;
}

.item-tag {
  margin-right: 10px;
  background-color: gold;
  padding: 5px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: maroon;
  display: inline-block;
  flex-shrink: 0;
  border: 2px solid maroon;
}

.item-name {
  flex-grow: 1;
}

.project-description-popup {
  max-width: 600px;
}
</style>
