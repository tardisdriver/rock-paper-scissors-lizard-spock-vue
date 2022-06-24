<script>
import store from "../../store/store";

export default {
  name: "ComputerPlayer",
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
      // timeout for more elegant transitions
      setTimeout(() => {
        this.showComputerChoice = true;
      }, 300);
    }
  }
};
</script>
<template>
  <div id="computer" class="opponent-box">
    <div class="box-contents">
      <h2>Computer</h2>
      <h3 v-if="computerChoice">Computer Chooses:</h3>
      <h3 v-else>Computer is waiting...</h3>
    </div>
    <transition name="fade">
      <span class="selection" v-if="showComputerChoice" key="chosen"
        ><i :class="icon"></i
      ></span>
    </transition>
  </div>
</template>
