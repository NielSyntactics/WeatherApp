import { createStore } from "vuex";
import { weather } from "./modules/Weather";

/* Exporting the store. */
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    weather,
  },
});
