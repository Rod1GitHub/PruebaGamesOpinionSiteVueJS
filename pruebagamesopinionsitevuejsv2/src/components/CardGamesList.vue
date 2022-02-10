<template>
  <div>
    <h1>Lista de juegos disponibles</h1>
    <section v-for="(game, index) in getterAllGames" v-bind:key="index">
      <div class="card" style="width: 18rem">
        <img
          v-bind:src="game.background_image"
          class="card-img-top"
          alt="game image"
        />
        <div class="card-body to-left">
          <h1>Array index: {{ index }}</h1>
          <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush to-left">
          <li class="list-group-item">Rating: {{ game.rating }}</li>
          <li class="list-group-item">Released: {{ game.released }}</li>
          <li class="list-group-item">Updated: {{ game.updated }}</li>
        </ul>
        <div class="card-body">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="`#modal-${index}`"
          >
            Opinar Index {{ index }}
          </button>
          <div>
            <!-- Modal -->
            <div
              class="modal fade"
              :id="`modal-${index}`"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title {{ index }} Escribe tu opinion para el juego:
                      {{ game.name }}
                    </h5>

                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div>
                      <label for="inputName" class="form-label">Nombre:</label>
                      <input
                        type="text"
                        placeholder="Tu nombre aquí"
                        id="inputName"
                        class="form-control"
                        aria-describedby="inputYourName"
                      />

                      <label for="textarea" class="form-label"
                        >Opiniones:</label
                      >

                      <textarea
                        v-model="opinion"
                        class="form-control"
                        placeholder="Tu opinión debe ir aquí"
                        id="textarea"
                        style="height: 100px"
                      ></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      @click="agregarOpinion"
                      type="button"
                      class="btn btn-primary"
                    >
                      Guardar Opinion {{ index }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--     This is the way of passing an index into the key and into the value    
      <div> 
      <b-button variant="primary" v-b-modal:[`modal-${index}`]
        >Open modal {{ index }} : {{ game.name }}</b-button
      >
      <b-modal v-bind:id="`modal-${index}`" title="BootstrapVue">
        <p class="my-4">Hello from modal {{ index }} : {{ game.name }}</p>
      </b-modal>
    </div>  -->
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

<style>
.to-left {
  text-align: start;
}
.to-center {
  text-align: center;
}
</style>
