<script>
import HumanPlayer from "./Player";
import ComputerPlayer from "./Computer";
import store from "../../store/store";
import winner from '../helpers/winner'

export default {
  name: "GameContainer",
  components: { HumanPlayer, ComputerPlayer },
  data() {
    return {
      result: "",
      weapons: [
        { name: "rock", icon: "far fa-hand-rock" },
        { name: "paper", icon: "far fa-hand-paper" },
        { name: "scissors", icon: "far fa-hand-scissors" },
        { name: "lizard", icon: "far fa-hand-lizard" },
        { name: "spock", icon: "far fa-hand-spock" },
      ],
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
    },
  },
  watch: {
    computerChoice: function (newChoice) {
      if (newChoice !== "") {
        this.result = "";
        let player = this.playerChoice;
        let computer = this.computerChoice;
        const playerWins = winner(`${player}${computer}`) 
        if (player === computer) {
          setTimeout(() => {
            this.result = "It's a tie";
          }, 700);
        } else {
            const whoWon = playerWins ? "player" : "computer"
            setTimeout(() => {
              this.result = playerWins ? "You Win!" : "Computer Wins!";
              store.commit("incrementScore", whoWon);
            }, 700);
        }
      }
    },
    result: function () {
      if (this.result !== "") {
        // clear computer's choice and result after 2 seconds to reset game
        setTimeout(() => {
          store.commit("setComputerWeapon", "");
          this.result = "";
        }, 2000);
      }
    },
  },
};
</script>
<template>
  <div id="spock-container">
    <h1>Rock Paper Scissors Lizard Spock</h1>
    <div class="result-container">
        <transition name="fade">
          <h2 v-if="result" id="result">{{ result }}</h2>
        </transition>
      </div>
    <div id="game-area">
      <div id="scoreboard">
      <div class="score-container">
        <h3>Your Score: {{ playerScore }}</h3>
      </div>
      <div class="score-container">
        <h3>Computer's Score: {{ computerScore }}</h3>
      </div>
    </div>
    <div id="play-area">
      <HumanPlayer :weapons="weapons" />
      <ComputerPlayer :weapons="weapons" />
    </div>
    </div>
    
  </div>
</template>

<style scoped>
#spock-container h1 {
  font-size: 2.6rem;
  margin-top: 1.2rem;
}
#result {
  font-size: 1.3em;
  color: white;
  max-width:300px;
  text-shadow: 2px 2px 6px #999999;
}
.result-container {
  height: 30px;
  display:flex;
  justify-content: center;
  margin-bottom: 20px;
}
.score-container {
  width:250px;
}
#play-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#game-area {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
#scoreboard {
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  font-size: 1.3em;
  max-width:90%;
}
@media screen and (min-width: 800px){
  #spock-container h1 {
    font-size: 4rem;
  }
  #play-area {
    flex-direction: row;
  }
  #scoreboard {
    justify-content: space-between;
  }
  #result {
    font-size:2rem;
  }
}
</style>
