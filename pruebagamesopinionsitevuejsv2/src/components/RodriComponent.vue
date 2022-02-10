<template>
  <div>
    <section>
      <button @click="incrementAction">Click to increment</button>
      <div>{{ countComputed }}</div>
      <div>{{ countAliasComputed }}</div>
    </section>
    <section>
      <p>{{ getAllGames[0] }}</p>
      <p>{{ getAllOpinions[0] }}</p>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      countComputed: (state) => state.countKey, // one way
      countAliasComputed: "countKey", // another way of writing it
    }),
    ...mapGetters(["getAllGames", "getAllOpinions"]),
  },
  methods: {
    ...mapMutations(["incrementMutation"]),
    ...mapActions(["incrementAction"]),
  },
};
</script>
<style scoped>
div {
  background-color: red;
}
</style>
