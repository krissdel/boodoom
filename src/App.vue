<template>
  <div id="app">
    <div class="img">
      <img alt="Vue logo" src="./assets/boodoom-logo.png" />
      <img src="./assets/pub.png" class="card-img-top" alt="image pub" />
    </div>
    <MainPage msg="L'union fait la force... Faisons la ! " />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  height: 800px;
}

body {
  background-color: #0e1822;
  height: 800px;
}
img {
  display: flex;
  height: 100px;
}
</style>
