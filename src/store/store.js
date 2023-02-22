import {createStore} from 'vuex';
import axios from "axios";

const store = createStore({
  state() {
    return {
      gospel: "",
      gospelTitle: ""
    }
  },
  mutations: {
    setGospel(state, payload) {
      let gospelAfter = payload.replace(/\[[^\]]*\]/g, '');
      gospelAfter = gospelAfter.replaceAll(']', '');
      state.gospel = gospelAfter;
    },
    setGospelTitle(state, payload) {
      state.gospelTitle = payload;
    }
  },
  actions: {
    setGospel(context) {
      let today = new Date();
      let year = today.getFullYear();
      let month = (today.getMonth() + 1).toString().padStart(2, '0');
      let day = today.getDate().toString().padStart(2, '0');
      let data = `${year}-${month}-${day}`;

      axios
        .get(`https://publication.evangelizo.ws/PL/days/${data}`)
        .then((response) => {
          let readings = response.data.data.readings;
          let gospel = readings.at(-1);
          context.commit('setGospel', gospel.text);
          context.commit('setGospelTitle', gospel.title)
        })
        .catch(function () {
          // handle error
        })
        .finally(function () {
          // always executed
        });
    }
  },
  getters: {
    getGospel(state) {
      return state.gospel;
    },
    getGospelTitle(state) {
      return state.gospelTitle;
    }
  }
})

export default store;