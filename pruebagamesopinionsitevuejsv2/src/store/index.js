import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countKey: 0,
    misOpiniones: [],
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

    opinionsArray: [
      {
        id: 1,
        personName: "Rodrigo Zuniga",
        gameName: "GTA V",
        opinionText: "Ahí nomás la gráfica",
      },
      {
        id: 2,
        personName: "Gary Medel",
        gameName: "Portal 2",
        opinionText: "Que sucede",
      },
    ],
  },

  getters: {
    getAllGames: (state) => state.gamesArray, // Arrow function
    getAllOpinions(state) {
      // Normal Function needs return
      return state.opinionsArray;
    },
  },
  mutations: {
    AGREGAR_MI_OPINION(state, miOpinion) {
      state.misOpiniones.push(miOpinion);
    },
    incrementMutation(state) {
      state.countKey++;
      console.log(state.countKey);
    },

    incrementByMutation(state, payload) {
      state.countKey += payload.amount;
    },
  },
  actions: {
    agregar_Mi_Opinion({ commit }, miOpinion) {
      alert("Se está ejecutando una acción");
      commit("AGREGAR_MI_OPINION", miOpinion);
    },
    incrementAction(context) {
      context.commit("incrementByMutation", { amount: 29 });
    },
  },
  plugins: [createPersistedState()],
  modules: {},
});
