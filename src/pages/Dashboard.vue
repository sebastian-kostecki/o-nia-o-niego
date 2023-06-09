<template>
    <base-layout title="O Nią & O Niego">
        <ion-content v-if="!loading" class="ion-padding">
            <dashboard-panel
                    v-if="dateToDisplay && dateToDisplay"
                    :date="dateToDisplay"
                    :liturgicDay="liturgicDayTitle"
            ></dashboard-panel>
            <dashboard-card
                    v-if="mystery"
                    :is-showed="true"
                    title="Tajemnica różańca"
                    :subtitle="mystery.text"
                    :content="mystery.bible"
                    icon="fa-solid fa-cross"
            ></dashboard-card>
            <dashboard-card
                    v-if="patron"
                    :is-showed="isPatronPrayerView"
                    title="Modlitwa do patrona"
                    :subtitle="patron.text"
                    :content="patron.prayer"
                    icon="fa-solid fa-hands-praying"
            ></dashboard-card>
            <dashboard-card
                    v-if="mystery"
                    :is-showed="isReflectionsView"
                    title="Rozważanie"
                    :content="mystery.reflection"
                    icon="fa-solid fa-book-open"
            ></dashboard-card>
            <dashboard-card
                    v-if="gospel"
                    :is-showed="isGospelView"
                    title="Ewangelia na dziś"
                    icon="fa-solid fa-bible"
                    :content="gospelText"
                    :subtitle="gospel.title"
                    :is-showed-subtitle="false"
            ></dashboard-card>
           <prayed-button
                   v-if="!isPrayedToday"
                   :gender="gender"
                   @prayed="checkPrayedToday"
           />
        </ion-content>
        <loading-layout v-else></loading-layout>
    </base-layout>
</template>

<script>
import axios from "axios";
import {IonContent} from "@ionic/vue";
import BaseLayout from "../components/layout/BaseLayout.vue";
import LoadingLayout from "@/components/layout/LoadingLayout.vue";
import DashboardCard from "@/components/dashboard/DashboardCard.vue";
import DashboardPanel from "@/components/dashboard/DashboardPanel.vue";
import PrayedButton from "@/components/dashboard/PrayedButton.vue";
import DatabaseService from "@/services/database";
import SettingsVariablesMixins from "@/mixins/settingsVariablesMixins";

const Api = axios.create();

export default {
  name: "dash-board",
  components: {
    BaseLayout,
    LoadingLayout,
    DashboardCard,
    DashboardPanel,
    IonContent,
    PrayedButton
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
      gender: "",
      prayedDates: [],
      isGospelView: true,
      isReflectionsView: true,
      isPatronPrayerView: true,
      loading: true,
    };
  },
  computed: {
    gospelText() {
      let gospelAfter = this.gospel.text.replace(/\[[^\]]*\]/g, '');
      gospelAfter = gospelAfter.replaceAll(']', '');
      return gospelAfter;
    },
    isPrayedToday() {
      const today = this.getTodayInFormat();
      return this.prayedDates.includes(today);
    }
  },
  created() {
    DatabaseService.initDatabase();
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
      await this.getGender();
      await this.getPrayedDates();
      await this.delayedExecution();
      await this.setLoading(false)
      await this.checkIsDataExists();
    },
    async delayedExecution() {
      await new Promise(resolve => setTimeout(resolve, 1000));
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
      const firstMysteryId = await DatabaseService.getData('first_mystery');
      let currentMysteryId = firstMysteryId + difference + 1;
      if (currentMysteryId > 20) {
          currentMysteryId = currentMysteryId - 20;
      }
      this.mystery = await this.getMystery(currentMysteryId);
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
    async getGender() {
      this.gender = await DatabaseService.getData('gender');
    },
    async getPrayedDates() {
      this.prayedDates = await DatabaseService.getData('prayed_dates');
      if (!this.prayedDates) {
        this.prayedDates = [];
      }
    },
    monthsDiff(date1, date2) {
      let diff = (date2.getFullYear() - date1.getFullYear()) * 12;
      diff -= date1.getMonth() + 1;
      diff += date2.getMonth();
      return diff;
    },
    async setLoading(value) {
      this.loading = value;
    },
    getLiturgyOfDay() {
      Api.get(`https://publication.evangelizo.ws/PL/days/${this.getTodayInFormat()}`)
        .then((response) => {
          let readings = response.data.data.readings;
          this.gospel = readings.at(-1);
          this.dateToDisplay = response.data.data.date_displayed;
          this.liturgicDayTitle = response.data.data.liturgic_title;
        })
        .catch(function () {
          this.isGospelView = false;
        })
    },
    getTodayInFormat() {
      let today = new Date();
      let year = today.getFullYear();
      let month = (today.getMonth() + 1).toString().padStart(2, '0');
      let day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    checkIsDataExists() {
      if (!this.mystery && !this.patron && !this.beginningDate) {
        this.$router.push('/settings');
      }
    },
    async checkPrayedToday() {
      const today = this.getTodayInFormat();
      this.prayedDates.push(today);
      await DatabaseService.setData('prayed_dates', this.prayedDates);
      this.isPrayedToday = true;
    }
  },
};
</script>

<style scoped>
ion-content {
    --background: var(--ion-color-primary);
}

ion-button {
    font-weight: bold;
}
</style>
