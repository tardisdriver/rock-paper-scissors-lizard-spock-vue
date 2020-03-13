<script>
import store from "../../store/store";

export default {
  name: "Computer",
  props: ["weapons"],
  data() {
    return {
      icon: "",
      showComputerChoice: false
    };
  },
  computed: {
    computerChoice() {
      return store.state.computerChoice;
    }
  },
  watch: {
    computerChoice: function(choice) {
      this.showComputerChoice = false;
      let weapon = this.weapons.find(weapon => weapon.name === choice);
      this.icon = weapon.icon;
      setTimeout(() => {
        this.showComputerChoice = true;
      }, 300);
    }
  }
};
</script>
<template>
  <div id="computer">
    <h2>Computer</h2>
    <h3 v-if="computerChoice">Computer Chooses:</h3>
    <h3 v-else>Computer is waiting...</h3>
    <transition name="fade">
      <span class="computer-choice" v-if="showComputerChoice" key="chosen"
        ><i :class="icon"></i
      ></span>
    </transition>
  </div>
</template>
<style scoped>
#computer {
  color: white;
  width: 33%;
  min-height: 430px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #f8c260;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
}
.computer-choice {
  font-size: 10em;
}
</style>
