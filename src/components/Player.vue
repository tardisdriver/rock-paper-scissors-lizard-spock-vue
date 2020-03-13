<script>
import store from "../../store/store";
export default {
  name: "Player",
  props: ["weapons"],
  data() {
    return {
      showPlayerChoice: false,
      showWeapons: true,
      icon: ""
    };
  },
  methods: {
    handleAttack(choice) {
      let weapons = ["rock", "paper", "scissors", "lizard", "spock"];
      let random = Math.floor(Math.random() * 5);
      store.commit("setComputerWeapon", weapons[random]);
      store.commit("setPlayerWeapon", choice);
      let weapon = this.weapons.find(weapon => weapon.name === choice);
      this.icon = weapon.icon;
      this.showWeapons = false;
      setTimeout(() => {
        this.showPlayerChoice = true;
      }, 200);
    }
  },
  watch: {
    showPlayerChoice: function(visible) {
      if (visible) {
        setTimeout(() => {
          this.showPlayerChoice = false;
          this.showWeapons = true;
        }, 2500);
      }
    }
  }
};
</script>
<template>
  <div id="player">
    <h2>You</h2>
    <h3 v-if="showPlayerChoice">You Chose:</h3>
    <h3 v-else>Choose Your Weapon:</h3>
    <div v-if="showPlayerChoice" class="player-choice">
      <i :class="icon"></i>
    </div>
    <transition name="fadeIn">
      <div v-if="showWeapons" id="weapons">
        <button
          class="weapon-button"
          v-for="weapon in weapons"
          :key="weapon.ID"
          @click="handleAttack(weapon.name)"
        >
          <i class="weapon-pic" :class="weapon.icon"></i> {{ weapon.name }}
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
#player {
  color: white;
  width: 33%;
  min-height: 430px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #f8c260;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
}
#weapons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weapon-button {
  background-color: #7f66e6;
  color: white;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  font-size: 1em;
  width: 50%;
  min-width: 110px;
  border: none;
}
.weapon-pic {
  font-size: 2em;
  padding-right: 10px;
}
.player-choice {
  font-size: 10em;
}
.fadeIn-enter-active {
  transition: opacity 0.5s;
}
.fadeIn-enter {
  opacity: 0;
}
</style>
