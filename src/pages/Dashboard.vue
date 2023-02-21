<template>
  <base-layout title="O Nią & O Niego">
    <ion-content>
      <img src="../assets/rosary.png" alt="rosary"/>
      <dashboard-card
          class="ion-margin-top"
          :title="mysteryOfRosary"
          :subtitle="mysteryOfRosaryGroup"
          :content="timeToEnd"
          icon="fa-solid fa-hands-praying"
      ></dashboard-card>

      <dashboard-card
          title="Rozważanie"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in ex
          doloremque inventore, possimus quam eaque laboriosam aut nulla ipsa non
          nisi nesciunt doloribus, sapiente est facere porro expedita dolor?"
          icon="fa-solid fa-book-open"
      ></dashboard-card>

      <dashboard-card
        title="Ewangelia na dziś"
        icon="fa-solid fa-bible"
        :subtitle="gospelTitle"
        :content="gospel"
      ></dashboard-card>

      <ion-button class="ion-margin-top" size="large" expand="block" fill="outline" @click="getGospel"
      >Pomodliłem się
      </ion-button
      >
    </ion-content>
  </base-layout>
</template>

<script>
import {IonButton,} from "@ionic/vue";
import BaseLayout from "../components/BaseLayout.vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import axios from "axios";

export default {
  name: "dash-board",
  components: {
    IonButton,
    BaseLayout,
    DashboardCard
  },
  data() {
    return {
      gospel: "",
      gospelTitle: "",
      mysteryOfRosary: "Zwiastowanie NMP",
      mysteryOfRosaryGroup: "Tajemnice Radosne",
      timeToEnd: "Do końca pozostało 20 dni"
    };
  },
  computed: {
    dateNow() {
      const date = new Date();
      const day = date.getDate().toString();
      const month = date.toLocaleString("default", {month: "long"});
      const year = date.getFullYear().toString();
      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
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

ion-content {
  --background: var(--ion-color-primary);
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
  top: 50px;
  margin-left: 16px;
  margin-right: 16px;
}

/*#reflections,*/
/*#reading {*/
/*  margin: 16px;*/
/*}*/

ion-button {
  --padding-top: 10px;
  --padding-bottom: 10px;
  margin: 16px;
  color: white;
  --border-color: white;
}
</style>
