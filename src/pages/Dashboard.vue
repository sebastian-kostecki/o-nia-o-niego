<template>
  <base-layout title="Ona & On">
    <img src="../assets/rosary.png" alt="rosary" />
    <ion-card>
      <ion-card-header>
        <ion-card-title color="primary">{{ mysteryOfRosary }}</ion-card-title>
        <ion-card-subtitle
          >{{ dateNow }}<br />Do końca pozostało 245 dni.</ion-card-subtitle
        >
      </ion-card-header>
    </ion-card>
    <ion-card id="reflections">
      <ion-card-header>
        <ion-card-title color="primary">Rozważania</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in ex
        doloremque inventore, possimus quam eaque laboriosam aut nulla ipsa non
        nisi nesciunt doloribus, sapiente est facere porro expedita dolor?
      </ion-card-content>
    </ion-card>
    <ion-card id="reading">
      <ion-card-header>
        <ion-card-title color="primary">Ewangelia na dziś</ion-card-title>
        <ion-card-subtitle>{{ gospelTitle }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content> {{ gospel }} </ion-card-content>
    </ion-card>
    <ion-button size="large" expand="block" fill="outline" @click="getGospel"
      >Pomodliłem się</ion-button
    >
  </base-layout>
</template>

<script>
import { IonButton } from "@ionic/vue";
import BaseLayout from "../components/BaseLayout.vue";
import axios from "axios";
export default {
  name: "dash-board",
  components: {
    IonButton,
    BaseLayout,
  },
  data() {
    return {
      gospel: "",
      gospelTitle: "",
    };
  },
  computed: {
    dateNow() {
      const date = new Date();
      const day = date.getDate().toString();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear().toString();
      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
    },
    mysteryOfRosary() {
      return "Tajemnica Światła";
    },
  },
  ionViewDidEnter() {
    this.getGospel();
  },
  methods: {
    getGospel() {
      axios
        .get("https://publication.evangelizo.ws/PL/days/2023-02-21")
        .then((response) => {
          console.log(response);
          this.gospel = response.data.data.readings[2].text;
          this.gospelTitle = response.data.data.readings[2].title;
        })
        .catch(function () {
          // handle error
        })
        .finally(function () {
          // always executed
        });
    },
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: transparent no-repeat fixed center;
  --color: white;
  font-style: bold;
  position: absolute;
  top: 0;
}

ion-content {
  --background: #6c51aa;
}

img {
  opacity: 0.1;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

ion-card {
  margin-top: 64px;
  margin-left: 16px;
  margin-right: 16px;
}

#reflections,
#reading {
  margin: 16px;
}

ion-button {
  --padding-top: 10px;
  --padding-bottom: 10px;
  margin: 16px;
  color: white;
  --border-color: white;
}
</style>
