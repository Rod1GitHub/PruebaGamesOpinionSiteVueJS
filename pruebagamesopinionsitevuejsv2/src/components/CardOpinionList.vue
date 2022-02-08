<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <div class="container alert alert-danger move-left" role="alert">
      No existen opiniones por MOSTRAR
    </div>

    <div class="container">
      <div
        v-for="opinion in allOpinions"
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
export default {
  name: "Opinions",
  data: () => ({
    allOpinions: "",
  }),

  mounted() {
    this.allOpinions = this.$store.getters.getAllOpinions;
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
