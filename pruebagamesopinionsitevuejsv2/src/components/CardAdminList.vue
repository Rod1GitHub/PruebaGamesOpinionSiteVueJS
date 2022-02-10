<template>
  <div>
    <h1>Administrando la Lista de Opiniones</h1>
    <h1>{{ getAllOpinions[0].personName }}</h1>

    <div class="container alert alert-danger move-left" role="alert">
      No existen opiniones por ADMINISTRAR
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table">
              <thead class="thead-dark">
                <tr class="move-left">
                  <th scope="col">#</th>
                  <th scope="col">Persona</th>
                  <th scope="col">Juego</th>
                  <th scope="col">Opinion</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="move-left"
                  v-for="opinion in getAllOpinions"
                  v-bind:key="opinion.id"
                >
                  <th scope="row">{{ opinion.id }}</th>
                  <td>{{ opinion.personName }}</td>
                  <td>{{ opinion.gameName }}</td>
                  <td>{{ opinion.opinionText }}</td>
                  <td>
                    <button type="button" class="btn btn-danger">
                      Eliminar {{ opinion.id }}
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-info">
                      Editar {{ opinion.id }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Editando la opinión de {{ getAllOpinions.gameName }}</h1>
      <p>{{ getAllOpinions }}</p>

      <div><InteractFormInput /></div>
    </div>
    <button type="button" class="btn btn-primary">Regresar</button>
    <button type="button" class="btn btn-info">Guardar</button>
  </div>
</template>

<script>
import InteractFormInput from "./InteractFormInput.vue";

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "CardAdminList",
  components: {
    InteractFormInput,
  },
  computed: {
    ...mapGetters(["getAllGames", "getAllOpinions"]),
    ...mapState({
      countComputed: (state) => state.countKey, // one way
      countAliasComputed: "countKey", // another way of writing it
    }),
  },
  methods: {
    ...mapMutations(["incrementMutation"]),
    ...mapActions(["incrementAction"]),
  },
};
</script>

<style scoped>
.move-left {
  text-align: start;
}
</style>
