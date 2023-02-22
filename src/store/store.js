import {createStore} from 'vuex';
import axios from "axios";

const store = createStore({
  state() {
    return {
      gospel: "",
      gospelTitle: "",
      dateDisplayed: "",
      liturgicTitle: ""
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
    },
    setDisplayedDate(state, payload) {
      state.dateDisplayed = payload;
    },
    setLiturgicTitle(state, payload) {
      state.liturgicTitle = payload;
    }
  },
  actions: {
    getLiturgyOfDay(context) {
      axios
        .get(`https://publication.evangelizo.ws/PL/days/${getDate()}`)
        .then((response) => {
          let readings = response.data.data.readings;
          let gospel = readings.at(-1);
          context.commit('setGospel', gospel.text);
          context.commit('setGospelTitle', gospel.title);
          context.commit('setDisplayedDate', response.data.data.date_displayed);
          context.commit('setLiturgicTitle', response.data.data.liturgic_title);
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
    },
    getDateDisplayed(state) {
      return state.dateDisplayed;
    },
    getLiturgicTitle(state) {
      return state.liturgicTitle;
    }
  }
})

let getDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, '0');
  let day = today.getDate().toString().padStart(2, '0');
  let date = `${year}-${month}-${day}`;
  return date;
}

export default store;