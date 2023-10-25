<template>
  <div class="Pick-Project-page">
    <div class="Landing-page">
      <LandingPage />
    </div>

    <div class="Pick-main-content">
      <div class="pick-container">
        <div class="Pick-title">PICK YOUR TOP 10 PROJECTS</div>
        <div class="pools-container">
          <div>
            <h3>CS / CSE Capstone Proposal Catalog</h3>
            <vue-draggable-next
              v-model="choicePool"
              group="people"
              class="list-container"
            >
              <div
                v-for="item in choicePool"
                :key="item.id"
                class="choicePool-item"
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
                >
                 <span class="item-tag">{{  index + 1 }}</span> 
                 <span class="item-name">{{  item.name }}</span>
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
import { ref } from "vue";
import LandingPage from "../components/LandingPage.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { ElMessage } from "element-plus";

export default {
  components: {
    LandingPage,
    VueDraggableNext,
  },
  setup() {
    const choicePool = ref([
      { id: 1, name: "GenTech - Employee Scheduling Software" },
      { id: 2, name: "ASU SCAI - Deterministic Fuzzing Replay and Debugging" },
      {
        id: 3,
        name: "Lotus Addiction Therapy Inc - Lotus Addiction Therapy Mobile Application Development",
      },
      {id: 4, name:"DigiClips - DigiClips Media Search Engine"},
      {id: 5, name:"The Big Leaf - KnowQuest Inc."},
      {id: 6, name:"Performance Software - Airport Mapping Maintenance Automation"}
    ]);

    const userPool = ref([]);

    const handleChange = () => {
      // Check if the user pool has more than two items
      if (userPool.value.length > 5) {
        // Display an error message
        ElMessage.error("You can only have up to two items in the user pool.");

        // Move the last item added back to the choice pool
        const removedItem = userPool.value.pop();
        choicePool.value.push(removedItem);
      }
    };

    return {
      choicePool,
      userPool,
      handleChange,
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
</style>
