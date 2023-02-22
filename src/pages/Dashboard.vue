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
          :subtitle="gospelTitle"
          :is-showed-subtitle="false"
      ></dashboard-card>
    </ion-content>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";

export default {
  name: "dash-board",
  components: {
    BaseLayout,
    DashboardCard,
  },
  data() {
    return {
      mysteryOfRosary: "Tajemnica różańca",
      mysteryOfRosaryGroup: "Zwiastowanie NMP",
      timeToEnd: "Do końca pozostało 20 dni"
    };
  },
  computed: {
    gospel() {
      return this.$store.getters.getGospel;
    },
    gospelTitle() {
      return this.$store.getters.getGospelTitle;
    }
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
