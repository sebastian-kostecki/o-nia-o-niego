<template>
  <base-layout title="O Nią & O Niego">
    <ion-content v-if="!loading">
      <dashboard-panel
          :date="dateToDisplay"
          :liturgicDay="liturgicDayTitle"
      ></dashboard-panel>
      <dashboard-card
          is-showed="true"
          title="Tajemnica różańca"
          :subtitle="mystery.text"
          :content="mystery.text"
          icon="fa-solid fa-cross"
      ></dashboard-card>
      <dashboard-card
          :is-showed="isPatronPrayerView"
          title="Modlitwa do patrona"
          :subtitle="patron.text"
          :content="patron.prayer"
          icon="fa-solid fa-hands-praying"
      ></dashboard-card>
      <dashboard-card
          :is-showed="isReflectionsView"
          title="Rozważanie"
          :content="mystery.reflection"
          icon="fa-solid fa-book-open"
      ></dashboard-card>
      <dashboard-card
          :is-showed="isGospelView"
          title="Ewangelia na dziś"
          icon="fa-solid fa-bible"
          :content="gospelText"
          :subtitle="gospel.title"
          :is-showed-subtitle="false"
      ></dashboard-card>
    </ion-content>
  </base-layout>
</template>

<script>
import axios from "axios";
import BaseLayout from "../components/BaseLayout.vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import DashboardPanel from "@/components/dashboard/DashboardPanel.vue";
import DatabaseService from "@/services/database";
import SettingsVariablesMixins from "@/mixins/settingsVariablesMixins";

const Api = axios.create();

export default {
  name: "dash-board",
  components: {
    BaseLayout,
    DashboardCard,
    DashboardPanel,
  },
  mixins: [SettingsVariablesMixins],
  data() {
    return {
      gospel: null,
      dateToDisplay: "",
      liturgicDayTitle: "",
      firstMystery: null,
      mystery: null,
      patron: null,
      beginningDate: "",
      timeToEnd: "Do końca pozostało 20 dni",
      isGospelView: true,
      isReflectionsView: true,
      isPatronPrayerView: true,
      loading: true
    };
  },
  computed: {
    gospelText() {
      let gospelAfter = this.gospel.text.replace(/\[[^\]]*\]/g, '');
      gospelAfter = gospelAfter.replaceAll(']', '');
      return gospelAfter;
    }
  },
  created() {
    DatabaseService.initDatabase();
  },
  mounted() {
    this.getViews();
  },
  methods: {
    async getViews() {
      await this.setLoading(true);
      await this.getLiturgyOfDay();
      await this.getIsGospelView();
      await this.getIsReflectionsView();
      await this.getIsPatronPrayerView();
      await this.getMysteryOfRosary();
      await this.getPatronPrayer();
      await this.getBeginningDate();
      await this.setLoading(false)
    },
    async getIsGospelView() {
      this.isGospelView = await DatabaseService.getData('is_gospel_view');
    },
    async getIsReflectionsView() {
      this.isReflectionsView = await DatabaseService.getData('is_reflections_view');
    },
    async getIsPatronPrayerView() {
      this.isPatronPrayerView = await DatabaseService.getData('is_patron_prayer_view');
    },
    async getMysteryOfRosary() {
      const now = new Date();
      const beginning = await this.getBeginningDate();
      const difference = this.monthsDiff(beginning, now);
      const mysteryOfRosaryId = await DatabaseService.getData('first_mystery');
      this.mystery = await this.getMystery(mysteryOfRosaryId + difference + 1);
    },
    getMystery(id) {
      return this.mysteryOfRosary.find(item => item.id === id)
    },
    async getPatronPrayer() {
      const patronId = await DatabaseService.getData('patron');
      this.patron = await this.getPatron(patronId);
    },
    getPatron(id) {
      return this.patrons.find(item => item.id === id);
    },
    async getBeginningDate() {
      const date = await DatabaseService.getData('beginning_date');
      return new Date(date);
    },
    monthsDiff(date1, date2) {
      let diff = (date2.getFullYear() - date1.getFullYear()) * 12;
      diff -= date1.getMonth() + 1;
      diff += date2.getMonth();
      return diff;
    },
    setLoading(value) {
      this.loading = value;
    },
    getLiturgyOfDay() {
      Api.get(`https://publication.evangelizo.ws/PL/days/${this.getDate()}`)
        .then((response) => {
          let readings = response.data.data.readings;
          this.gospel = readings.at(-1);
          this.dateToDisplay = response.data.data.date_displayed;
          this.liturgicDayTitle = response.data.data.liturgic_title;
        })
        .catch(function () {
          // handle error
        })
    },
    getDate() {
      let today = new Date();
      let year = today.getFullYear();
      let month = (today.getMonth() + 1).toString().padStart(2, '0');
      let day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  }
};
</script>

<style scoped>
ion-content {
  --background: var(--ion-color-primary);
}
</style>
