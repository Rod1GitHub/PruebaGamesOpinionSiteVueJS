<template>
  <div>
    <ul class="opinionsArray-list">
      <li v-for="opinion in opinionsArray" :key="opinion.id">
        <span
          class="opinion-content"
          :class="{ done: opinion.done }"
          @click="markItDone(opinion)"
          >{{ opinion.opinionText }}</span
        >
        <span @click="deleteOpinion(opinion)">Delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InteractArrayList",
  data() {
    return {
      opinionsArray: this.$store.state.opinionsArray,
    };
  },

  methods: {
    markItDone(opinion) {
      this.$store.commit("missionCompleted", opinion.id);
    },
    deleteOpinion(opinion) {
      this.$store.commit("deleteOpinion", opinion.id);
    },
  },
  computed: {
    ...mapGetters(["doneOpinions", "activeOpinions"]),
  },
};
</script>

<style></style>
