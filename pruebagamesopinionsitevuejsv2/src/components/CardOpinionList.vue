<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <div class="container alert alert-danger move-left" role="alert">
      No existen opiniones por MOSTRAR
    </div>

    <div class="container">
      <div
        v-for="opinion in getAllOpinions"
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
            <p>{{ opinion.opinionText }}</p>
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
  name: "CardOpinionList",
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
