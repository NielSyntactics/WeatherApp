<template>
  <div class="weather-container">
    <form>
      <input
        type="text"
        id="input-place"
        v-model="location"
        placeholder="Location"
        @input="findWeatherLocation"
      />
    </form>
    <div class="country-info">
      <h3>{{ this.$store.getters.getLocation }}</h3>
      <p>{{ this.$store.getters.getDate }}</p>
    </div>
    <div class="temperature-container">
      <h1>{{ this.$store.getters.getTemp }}&#8451;</h1>
    </div>
    <h2>{{ this.$store.getters.getCondition }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
export default {
  name: "WeatherComponent",
  setup() {
    const location = ref("");
    // Calling the action `loadWeatherDataApi` and passing the value of the input field.
    const findWeatherLocation = async () => {
      store.dispatch("loadWeatherDataApi", location.value);
    };
    return {
      location,
      findWeatherLocation,
    };
  },
};
</script>

<style scoped>
.weather-container {
  border: 1px black solid;
  border-radius: 10px;
  max-width: 500px;
  height: 80vh;
  margin: auto;
  padding: 10px;
  background-image: url("https://wallpaperaccess.com/full/2979509.jpg");
  overflow: auto;
  background-repeat: no-repeat;
  background-size: cover;
}
#input-place {
  margin-top: 30px;
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 5px #999;
  font-weight: bold;
  font-size: 16px;
}

#input-place:focus {
  outline: none;
}

h3 {
  margin-bottom: 1px;
  font-size: 26px;
}

p {
  margin-top: 1px;
}

h1 {
  font-size: 75px;
  font-weight: bolder;
  margin: 10px;
}

.country-info {
  margin-top: 50px;
}

.temperature-container {
  margin: auto;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 5px #999;
  width: fit-content;
  padding: 10px 15px 10px 15px;
  /* background: transparent; */
  background: rgba(204, 204, 204, 0.5);
}

h2 {
  font-size: 50px;
  font-weight: bolder;
  margin-top: 10px;
}

@media only screen and (max-width: 600px) {
  #input-place {
    width: 100%;
  }
  .weather-container {
    border-radius: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
  }
  .temperature-container {
    margin-bottom: 50px;
    margin-top: 50px;
  }
}

@media only screen and (max-width: 280px) {
  #input-place {
    width: 90%;
  }
}
/* @media only screen and (device-width: 375px) and (device-height: 667px) {
  #input-place {
    width: 100%;
  }
  .weather-container {
    border-radius: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .temperature-container {
    margin-bottom: 50px;
    margin-top: 50px;
  }
}

@media only screen and (device-width: 414px) and (device-height: 896px) {
  #input-place {
    width: 100%;
  }
  .weather-container {
    border-radius: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
  }
  .temperature-container {
    margin-bottom: 50px;
    margin-top: 50px;
  }
} */
</style>
