<template>
  <div>
    <h1>Administrando la Lista de Opiniones</h1>

    <div
      v-if="!opiniones.length"
      class="container alert alert-danger move-left"
      role="alert"
    >
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
                  v-for="(
                    { opinion, id, personName, gameName }, i
                  ) in opiniones"
                  :key="i"
                >
                  <th scope="row">{{ id }}</th>
                  <td>{{ personName }}</td>
                  <td>{{ gameName }}</td>
                  <td>{{ opinion }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="delete_Opinion(id)"
                    >
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info"
                      @click="editOpinion(opinion, id)"
                    >
                      Editar
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
      <h1>Editando la opinión de {{ getterAllOpinions[0].gameName }}</h1>

      <div>
        <label for="inputName" class="form-label">Nombre:</label>
        <input
          type="text"
          :placeholder="`${getterAllOpinions[0].personName}`"
          id="inputName"
          class="form-control"
          aria-describedby="inputYourName"
        />

        <label for="textarea" class="form-label">Opiniones:</label>
        <textarea
          class="form-control"
          :placeholder="`${getterAllOpinions[0].opinion}`"
          id="textarea"
          style="height: 100px"
        ></textarea>
      </div>
    </div>
    <button type="button" class="btn btn-primary">Regresar</button>
    <button type="button" class="btn btn-info">Guardar</button>
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
.move-left {
  text-align: start;
}
</style>
