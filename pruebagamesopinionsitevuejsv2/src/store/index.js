import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countKey: 0,
    gamesArray: [
      {
        name: "Grand Theft Auto V",
        rating: 4.48,
        released: "2013-09-17",
        updated: "2020-09-23",
        background_image:
          "https://cdn.forbes.com.mx/2020/05/Grand-Theft-Auto-V-640x360.jpg",
      },
      {
        name: "Portal 2",
        rating: 4.62,
        released: "2011-04-18",
        updated: "2020-08-03",
        background_image:
          "https://pivigames.blog/wp-content/uploads/2018/07/portal-2-mac-2844-0-min.jpg",
      },
    ],

    opiniones: [
      {
        id: 1,
        personName: "Rodrigo Zuniga",
        gameName: "GTA V",
        opinion: "Ahí nomás la gráfica",
      },
      {
        id: 2,
        personName: "Gary Medel",
        gameName: "Portal 2",
        opinion: "Que sucede",
      },
    ],
  },
  mutations: {
    AGREGAR_OPINION(state, opinion) {
      const id = Date.now();
      const personName = "personNamePlaceHolder";
      const gameName = "gameNamePlaceHolder";
      state.opiniones.push({ id, personName, gameName, opinion });
    },
    SET_OPINIONS(state, opiniones) {
      state.opiniones = opiniones;
    },

    INCREMENT(state) {
      state.countKey++;
      console.log(state.countKey);
    },

    INCREMENT_BY(state, payload) {
      state.countKey += payload.amount;
    },
  },
  actions: {
    agregar_Opinion({ commit }, opinion) {
      commit("AGREGAR_OPINION", opinion);
    },
    edit_Opinion({ commit, state }, nuevaOpinion) {
      const { id } = nuevaOpinion;
      let { opiniones } = state;
      opiniones = opiniones.map((opinion) => {
        if (opinion.id === id) {
          const personName = "personNamePlaceHolderEditado";
          const gameName = "gameNamePlaceHolderEditado";
          return { opinion: nuevaOpinion.opinion, id, personName, gameName };
        } else return opinion;
      });

      commit("SET_OPINIONS", opiniones);
    },
    delete_Opinion({ commit, state }, id) {
      // Tomo las opiniones del estado
      const { opiniones } = state;
      // Busco el índice de la opinionID que recibí en mis opiniones
      const indiceDeLaOpinionAEliminar = opiniones.findIndex(
        (opinion) => opinion.id === id
      );
      // Uso el splice para eliminar el elemento del arreglo
      opiniones.splice(indiceDeLaOpinionAEliminar, 1);
      // Sobrescribo con la mutación, el nuevo arreglo de opiniones
      commit("SET_OPINIONS", opiniones);
    },
    increment(context) {
      context.commit("INCREMENT");
    },
    increment_By(context) {
      context.commit("INCREMENT_BY", { amount: 29 });
    },
  },
  getters: {
    opinionesEncontradas: (state) => (busqueda) => {
      const { opiniones } = state;
      const opinionesEncontradas = opiniones.filter(({ opinion }) => {
        return opinion.includes(busqueda);
      });
      return opinionesEncontradas;
    },
    getterAllGames: (state) => state.gamesArray,
    getterAllOpinions(state) {
      return state.opiniones;
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
