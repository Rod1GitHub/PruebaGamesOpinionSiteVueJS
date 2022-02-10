<template>
  <div>
    <input v-model="opinion" />
    <button @click="agregarOpinion">Agregar opinión</button>
    <br />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "TodoEnUno",
  data() {
    return {
      opinion: "",
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getterAllGames", "getterAllOpinions"]),
    ...mapState({
      stateCount: (state) => state.countKey, // one way
      countAliasComputed: "countKey", // another way of writing it
    }),
  },
  methods: {
    ...mapMutations([
      "INCREMENT",
      "INCREMENT_BY",
      "AGREGAR_OPINION",
      "SET_OPINIONS",
    ]),
    ...mapActions([
      "increment",
      "increment_By",
      "agregar_Opinion",
      "edit_Opinion",
      "delete_Opinion",
    ]),
    editOpinion(opinion, id) {
      const nuevaOpinion = prompt("Ingrese la nueva opinion", opinion);
      this.edit_Opinion({ opinion: nuevaOpinion, id });
    },
    agregarOpinion() {
      const { opinion } = this;
      this.agregar_Opinion(opinion);
      this.opinion = "";
    },
  },
};
</script>

<style scoped>
div {
  background-color: gray;
}
</style>
