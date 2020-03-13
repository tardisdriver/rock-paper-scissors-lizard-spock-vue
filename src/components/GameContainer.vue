<script>
import Player from "./Player";
import Computer from "./Computer";
import store from "../../store/store";

export default {
  name: "GameContainer",
  components: { Player, Computer },
  data() {
    return {
      result: "",
      weapons: [
        { name: "rock", icon: "far fa-hand-rock" },
        { name: "paper", icon: "far fa-hand-paper" },
        { name: "scissors", icon: "far fa-hand-scissors" },
        { name: "lizard", icon: "far fa-hand-lizard" },
        { name: "spock", icon: "far fa-hand-spock" }
      ]
    };
  },
  computed: {
    playerChoice() {
      return store.state.playerChoice;
    },
    computerChoice() {
      return store.state.computerChoice;
    },
    playerScore() {
      return store.state.player;
    },
    computerScore() {
      return store.state.computer;
    }
  },
  watch: {
    computerChoice: function(newChoice) {
      if (newChoice !== "") {
        this.result = "";
        let player = this.playerChoice;
        let computer = this.computerChoice;
        if (player === computer) {
          setTimeout(() => {
            this.result = "It's a tie";
          }, 700);
        } else if (
          (player == "rock" && computer == "scissors") ||
          (player == "rock" && computer == "lizard") ||
          (player == "paper" && computer == "rock") ||
          (player == "paper" && computer == "spock") ||
          (player == "scissors" && computer == "lizard") ||
          (player == "scissors" && computer == "paper") ||
          (player == "lizard" && computer == "paper") ||
          (player == "lizard" && computer == "spock") ||
          (player == "spock" && computer == "rock") ||
          (player == "spock" && computer == "scissors")
        ) {
          setTimeout(() => {
            this.result = "You Win!";
            store.commit("incrementScore", "player");
          }, 700);
        } else {
          setTimeout(() => {
            this.result = "Computer Wins!";
            store.commit("incrementScore", "computer");
          }, 700);
        }
      }
    },
    result: function() {
      if (this.result !== "") {
        setTimeout(() => {
          store.commit("setComputerWeapon", "");
          this.result = "";
        }, 2000);
      }
    }
  }
};
</script>
<template>
  <div id="spock-container">
    <h1>Rock Paper Scissors Lizard Spock</h1>
    <div id="scoreboard">
      <h3>Your Score: {{ playerScore }}</h3>
      <h3>Computer's Score: {{ computerScore }}</h3>
    </div>
    <div id="play-area">
      <Player :weapons="weapons" />
      <Computer :weapons="weapons" />
    </div>
    <transition name="fade">
      <h2 v-if="result" id="result">{{ result }}</h2>
    </transition>
  </div>
</template>

<style scoped>
#result {
  font-size: 3.1em;
  color: white;
}
#play-area {
  display: flex;
  justify-content: center;
}
#scoreboard {
  display: flex;
  color: white;
  justify-content: space-around;
  font-size: 1.3em;
}
</style>
