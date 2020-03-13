import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    player: 0,
    computer: 0,
    playerChoice: "",
    computerChoice: ""
  },
  mutations: {
    incrementScore(state, player) {
      state[player]++;
    },
    setPlayerWeapon(state, payload) {
      state.playerChoice = payload;
    },
    setComputerWeapon(state, payload) {
      state.computerChoice = payload;
    }
  }
});

export default store;
