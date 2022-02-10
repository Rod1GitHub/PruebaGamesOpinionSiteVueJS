<template>
  <div class="home">
    <input v-model="miOpinion" />
    <button @click="agregarMiOpinion">Agregar Opinion</button>
    <ul>
      <li v-for="(miOpinion, index) in misOpiniones" :key="index">
        {{ miOpinion }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      miOpinion: "",
    };
  },
  computed: { ...mapState(["misOpiniones"]) },
  methods: {
    ...mapActions(["agregar_Mi_Opinion"]),
    agregarMiOpinion() {
      const { miOpinion } = this;
      this.agregar_Mi_Opinion(miOpinion);
      this.miOpinion = "";
    },
  },
};
</script>

<style></style>
