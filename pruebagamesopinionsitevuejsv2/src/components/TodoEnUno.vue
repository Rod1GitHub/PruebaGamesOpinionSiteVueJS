<template>
  <div>
    <h1>barra global para testeo manual</h1>
    <input v-model="opinion" />
    <button @click="agregarOpinion">Agregar opinión</button>
    <!-- <input v-model="busqueda" /> -->
    <ul>
      <h5>Listado de opiniones</h5>
      <li v-for="({ opinion, id }, i) in opiniones" :key="i">
        {{ opinion }}
        <button @click="editOpinion(opinion, id)">Editar</button>
        <button @click="delete_Opinion(id)">Eliminar</button>
      </li>
    </ul>

    <!--     <input v-model="opinion" />
    <button @click="agregarOpinion">Agregar opinión</button> -->
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
      busqueda: "",
      opinion: "",
    };
  },
  components: {},
  computed: {
    opiniones() {
      const { busqueda } = this;
      return this.opinionesEncontradas(busqueda);
    },
    ...mapGetters([
      "getterAllGames",
      "getterAllOpinions",
      "opinionesEncontradas",
    ]),
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
