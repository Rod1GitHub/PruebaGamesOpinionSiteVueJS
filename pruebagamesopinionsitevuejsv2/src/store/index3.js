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
        opinionText: "Ahí nomás la gráfica",
        done: false,
      },
      {
        id: 2,
        personName: "Gary Medel",
        gameName: "Portal 2",
        opinionText: "Que sucede",
        done: false,
      },
    ],
  },

  mutations: {
    addOpinion: function (state, opinionText) {
      state.opinionsArray.push({
        id: state.opinionsArray.slice(-1)[0].id + 1,
        opinionText: opinionText,
        done: false,
      });
      console.log(state.opinionsArray);
    },
    deleteOpinion: function (state, opinionId) {
      let opinionIndex = state.opinionsArray.indexOf(
        store.getters.thisOpinion(opinionId)
      );
      state.opinionsArray.splice(opinionIndex, 1);
      delete state.opinionsArray[opinionIndex].text;
      console.log(state.opinionsArray[opinionIndex]);
    },
  },

  actions: {},

  getters: {
    getAllGames: (state) => state.gamesArray,
    getAllOpinions: (state) => state.opinionsArray,
    getCurrentOpinion: (state) => state.opinionsArray,
    thisOpinion: (state) => (opinionId) => {
      return state.opinionsArray.find((opinion) => opinion.id === opinionId);
    },
  },
  modules: {},
});

//
// https://www.youtube.com/watch?v=oxUyIzDbZts
//
