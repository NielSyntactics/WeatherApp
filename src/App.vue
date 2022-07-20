<template>
  <div id="app">
    <WeatherComponent />
  </div>
</template>

<script>
import WeatherComponent from "./components/Weather.vue";
export default {
  name: "App",
  components: {
    WeatherComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: #fff;
}

@media only screen and (max-width: 600px) {
  #app {
    margin-top: 0;
  }
}
</style>
