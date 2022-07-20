import moment from "moment";

/* This is the API key that is used to access the weather API. */
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "367ad25709msh7dcaffee531a5b2p1820bajsn83333382314f",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const state = {
  data: {},
};

const getters = {
  /* A getter that is used to get the data. */
  getData: (state) => state.data,
  /* This is a getter that is used to get the temperature. */
  getTemp: (state) =>
    Object.entries(state.data).length === 0 ? 0 : state.data.current.temp_c,
  /* This is a getter that is used to get the location. */
  getLocation: (state) =>
    Object.entries(state.data).length === 0
      ? ""
      : state.data.location.name + ", " + state.data.location.country,
  /* This is a getter that is used to get the condition. */
  getCondition: (state) =>
    Object.entries(state.data).length === 0
      ? ""
      : state.data.current.condition.text,
  /* This is a getter that is used to get the date. */
  getDate: (state) =>
    Object.entries(state.data).length === 0
      ? ""
      : moment(new Date(state.data.location.localtime)).format("LLLL"),
};

const mutations = {
  /* A mutation that is used to set the data. */
  Load_Weather_Data_API(state, data) {
    state.data = data;
  },
};

const actions = {
  /* This is an action that is used to load the weather data from the API. */
  async loadWeatherDataApi({ commit }, location) {
    try {
      const res = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
        options
      );
      if (res.status == 200) {
        const data = await res.json();
        commit("Load_Weather_Data_API", data);
      } else {
        commit("Load_Weather_Data_API", {});
      }
    } catch (error) {
      // console.log("Error Here:");
      // console.log(error);
    }
  },
};

export const weather = {
  state,
  getters,
  mutations,
  actions,
};
