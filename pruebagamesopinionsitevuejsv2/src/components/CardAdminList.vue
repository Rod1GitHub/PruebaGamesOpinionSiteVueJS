<template>
  <div>
    <h1>Administrando la Lista de Opiniones</h1>

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
                  v-for="opinion in allOpinions"
                  v-bind:key="opinion.id"
                >
                  <th scope="row">{{ opinion.id }}</th>
                  <td>{{ opinion.personName }}</td>
                  <td>{{ opinion.gameName }}</td>
                  <td>{{ opinion.opinion }}</td>
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
      <h1>Editando la opinión de {{ currentOpinion.gameName }}</h1>
      <p>{{ currentOpinion }}</p>

      <label for="inputName" class="form-label">Nombre:</label>
      <input
        type="text"
        placeholder="pasar el parámetro personName aquí"
        id="inputName"
        class="form-control"
        aria-describedby="inputYourName"
      />

      <label for="textarea" class="form-label">Opiniones:</label>
      <textarea
        class="form-control"
        placeholder="Pasar el parámetro opinion aquí"
        id="textarea"
        style="height: 100px"
      ></textarea>
    </div>
    <button type="button" class="btn btn-primary">Regresar</button>
    <button type="button" class="btn btn-info">Guardar</button>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data: () => ({
    allOpinions: "",
    currentOpinion: "",
    textForm: "",
  }),

  mounted() {
    this.allOpinions = this.$store.getters.getAllOpinions;
    this.currentOpinion = this.$store.getters.getCurrentOpinion[0];
  },
};
</script>

<style scoped>
.move-left {
  text-align: start;
}
</style>
