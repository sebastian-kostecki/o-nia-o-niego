<template>
  <base-layout title="O Nią & O Niego">
    <ion-content>

      <dashboard-card
          class="ion-margin-top"
          :is-showed="true"
          :title="mysteryOfRosary"
          :subtitle="mysteryOfRosaryGroup"
          :content="timeToEnd"
          icon="fa-solid fa-hands-praying"
      ></dashboard-card>

      <dashboard-card
          :is-showed="true"
          title="Rozważanie"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in ex
          doloremque inventore, possimus quam eaque laboriosam aut nulla ipsa non
          nisi nesciunt doloribus, sapiente est facere porro expedita dolor?"
          icon="fa-solid fa-book-open"
      ></dashboard-card>

      <dashboard-card
          :is-showed="true"
          title="Ewangelia na dziś"
          icon="fa-solid fa-bible"
          :content="gospel"
      ></dashboard-card>
    </ion-content>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import axios from "axios";

export default {
  name: "dash-board",
  components: {
    BaseLayout,
    DashboardCard,
  },
  data() {
    return {
      gospel: "",
      gospelTitle: "",
      mysteryOfRosary: "Tajemnica różańca",
      mysteryOfRosaryGroup: "Zwiastowanie NMP",
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

ion-card {
  top: 50px;
}
</style>
