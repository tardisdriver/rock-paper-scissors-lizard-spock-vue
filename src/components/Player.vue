<script>
import store from "../../store/store";
export default {
  name: "HumanPlayer",
  props: ["weapons"],
  data() {
    return {
      showPlayerChoice: false,
      showWeapons: true,
      icon: "",
    };
  },
  methods: {
    handleAttack(choice) {
      let weapons = ["rock", "paper", "scissors", "lizard", "spock"];
      let random = Math.floor(Math.random() * 5);
      store.commit("setComputerWeapon", weapons[random]);
      store.commit("setPlayerWeapon", choice);
      let weapon = this.weapons.find((weapon) => weapon.name === choice);
      this.icon = weapon.icon;
      this.showWeapons = false;
      // timeout for more elegant transitions
      setTimeout(() => {
        this.showPlayerChoice = true;
      }, 200);
    },
  },
  watch: {
    showPlayerChoice: function (visible) {
      if (visible) {
        // timeout for more elegant transitions
        setTimeout(() => {
          this.showPlayerChoice = false;
          this.showWeapons = true;
        }, 2500);
      }
    },
  },
};
</script>
<template>
  <div id="player" class="opponent-box">
    <div class="box-contents">
      <h2>You</h2>
      <h3 v-if="showPlayerChoice">You Chose:</h3>
      <h3 v-else>Choose Your Weapon:</h3>
    </div>
    <div v-if="showPlayerChoice" class="selection">
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
#weapons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.weapon-button {
  background-color: #7f66e6;
  color: white;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  font-size: 1em;
  width: 30%;
  min-width: 110px;
  border: none;
  height: 50px;
}
.weapon-pic {
  font-size: 1.3em;
  padding-right: 10px;
}
.fadeIn-enter-active {
  transition: opacity 0.5s;
}
.fadeIn-enter {
  opacity: 0;
}

@media screen and (min-width: 800px) {
  #weapons {
    flex-direction: column;
  }
  .weapon-button {
    width: 85%;
  }
}
</style>
