<script>
import GameContainer from "./components/GameContainer";

export default {
  name: "App",
  components: {
    GameContainer
  }
};
</script>

<template>
  <div id="app">
    <GameContainer />
  </div>
</template>

<style>
@font-face {
  font-family: "Star Trek Future";
  src: url("./assets/Star Trek_future.ttf");
}
body {
  background-image: url("./assets/tenforward.jpg");
}
h1 {
  font-family: "Star Trek Future";
  color: white;
  font-size: 4.5em;
  text-shadow: 3px 3px 8px white;
  margin-bottom: 15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.opponent-box {
  color: white;
  width: 90%;
  height:200px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #f8c260;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
}
.box-contents {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.selection {
  font-size: 5.5rem;
}
@media screen and (min-width: 800px){
  .opponent-box {
    width: 33%;
    min-height: 450px;
  }
  .box-contents {
    flex-direction: column;
  }
  .selection {
  font-size: 10rem;
}
}
</style>
