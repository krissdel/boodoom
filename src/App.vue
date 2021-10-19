<template>
  <div id="app">
    <Logo />

    <MainPage msg="L'union fait la force... Faisons la ! " />
    <!-- <router-view></router-view> -->
    <Footer />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import Footer from "./components/Footer.vue";
import Logo from "@/components/Logo";
export default {
  name: "App",
  components: {
    MainPage,
    Footer,
    Logo,
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
