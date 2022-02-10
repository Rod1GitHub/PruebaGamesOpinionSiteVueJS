<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <div class="container alert alert-danger move-left" role="alert">
      No existen opiniones por MOSTRAR
    </div>

    <div class="container">
      <div
        v-for="opinion in getterAllOpinions"
        v-bind:key="opinion.id"
        class="card move-left"
      >
        <div class="card-header">
          <span>
            Opinión creada por: {{ opinion.personName }}. Para el juego
            {{ opinion.gameName }}
          </span>
          <a
            class="move-right"
            data-bs-toggle="collapse"
            :href="`#collapse-${opinion.id}`"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            ><i class="fas fa-angle-down"></i>
          </a>
        </div>
        <div class="collapse" :id="`collapse-${opinion.id}`">
          <div class="card-body">
            <p>{{ opinion.opinion }}</p>
          </div>
        </div>
      </div>
    </div>
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
.alert {
  text-align: start;
}

.move-left {
  text-align: start;
}

.move-right {
  text-align: end;
}
</style>
