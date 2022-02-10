import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  /*   mutations: {
    setCurrentOpinion(state, payload) {
      state.currentOpinion = payload;
      state.allOpinions.push(payload);
    },
  }, */
  actions: {},
  modules: {},
  getters: {
    getAllGames: (state) => state.gamesArray,
    getAllOpinions: (state) => state.opinionsArray,
    getCurrentOpinion: (state) => state.opinionsArray,
  },
});

//
// https://www.youtube.com/watch?v=oxUyIzDbZts
//
