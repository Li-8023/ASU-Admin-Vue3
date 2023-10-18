<template>
  <div class="Pick-Project-page">
    <div class="Landing-page">
      <LandingPage />
    </div>
    <div class="Pick-main-content">
      <h3>CS / CSE Capstone Proposal Catalog</h3>
      <vue-draggable-next
        v-model="choicePool"
        group="people"
        class="list-container"
      >
        <div v-for="item in choicePool" :key="item.id" class="choicePool-item">
          {{ item.name }}
        </div>
      </vue-draggable-next>

      <h3>Top 10 Projects</h3>
      <div class="user-choice-container">
        <vue-draggable-next
          v-model="userPool"
          group="people"
          class="list-container"
          @change="handleChange"
        >
          <div v-for="item in userPool" :key="item.id" class="userPool-item">
            {{ item.name }}
          </div>
        </vue-draggable-next>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LandingPage from "../components/LandingPage.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { ElMessage } from 'element-plus'

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
    ]);

    const userPool = ref([]);

    const handleChange = (evt) => {
      // Check if an item was added to `userPool`
      if (evt.added && userPool.value.length > 2) {
        // Get the item that was added
        const addedItem = evt.added.element;

        // Find and remove the added item from `userPool`
        const index = userPool.value.findIndex(
          (item) => item.id === addedItem.id
        );
        if (index !== -1) {
          userPool.value.splice(index, 1);
        }

        // Add the removed item back to `choicePool`
        choicePool.value.push(addedItem);

        // Display alert or another form of notification
        ElMessage.error('You can only choose two projects')
        // alert("You can only choose two");
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
.list-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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
}
</style>
