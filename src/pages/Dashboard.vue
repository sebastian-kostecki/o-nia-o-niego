<template>
  <base-layout title="O Nią & O Niego">
    <ion-content>
      <dashboard-panel></dashboard-panel>
      <dashboard-card
          :is-showed="true"
          title="Tajemnica różańca"
          :subtitle="mysteryOfRosary.name"
          :content="mysteryOfRosary.text"
          icon="fa-solid fa-cross"
      ></dashboard-card>
      <dashboard-card
          is-showed="true"
          title="Modlitwa do patrona"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in ex
          doloremque inventore, possimus quam eaque laboriosam aut nulla ipsa non
          nisi nesciunt doloribus, sapiente est facere porro expedita dolor?"
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
          :subtitle="gospelTitle"
          :is-showed-subtitle="false"
      ></dashboard-card>
    </ion-content>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import DashboardPanel from "@/components/dashboard/DashboardPanel.vue";

export default {
  name: "dash-board",
  components: {
    BaseLayout,
    DashboardCard,
    DashboardPanel
  },
  data() {
    return {
      mysteryOfRosary: {
        name: "Zwiastowanie NMP",
        text: "Oto ja służebnica Pańska, niech mi się stanie według słowa twego"
      },
      timeToEnd: "Do końca pozostało 20 dni"
    };
  },
  computed: {
    gospel() {
      return this.$store.getters.getGospel;
    },
    gospelTitle() {
      return this.$store.getters.getGospelTitle;
    },
    date() {
      return this.$store.getters.getDateDisplayed;
    },
    liturgicTitle() {
      return this.$store.getters.getLiturgicTitle;
    }
  },
};
</script>

<style scoped>
ion-content {
  --background: var(--ion-color-primary);
}
</style>
