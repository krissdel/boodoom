<template>
  <div id="app">
    <div class="img">
      <img alt="Vue logo" src="./assets/images/boodoom-logo.png" />
    </div>
    <MainPage msg="L'union fait la force... Faisons la ! " />
    <!-- <router-view></router-view> -->
    <Footer />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
// import footer from "@/components/footer";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    MainPage,
    Footer,
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
