<template>
  <ion-list lines="full">
    <ion-list-header>
      <ion-label>Dashboard</ion-label>
    </ion-list-header>
    <ion-item class="ion-margin-horizontal">
      <toggle-default
          title="Modlitwa do patrona"
          v-model:item="isPatronPrayerView"
      ></toggle-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <toggle-default
          title="Rozważania"
          v-model:item="isReflectionsView"
      ></toggle-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <toggle-default
          title="Ewangelia z dnia"
          v-model:item="isGospelView"
      ></toggle-default>
    </ion-item>
  </ion-list>
</template>

<script>
import {IonList, IonItem, IonLabel, IonListHeader} from "@ionic/vue";
import ToggleDefault from "@/components/form/ToggleDefault.vue";
import DatabaseService from "@/services/database";

export default {
  name: "InterfaceList",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    ToggleDefault
  },
  data() {
    return {
      isReflectionsView: false,
      isGospelView: false,
      isPatronPrayerView: false
    }
  },
  created () {
    DatabaseService.initDatabase();
  },
  mounted() {
    this.getInterfaceSettings();
  },
  methods: {
    getInterfaceSettings() {
      this.getIsReflectionsView();
      this.getIsGospelView();
      this.getIsPatronPrayerView();
    },
    async getIsReflectionsView() {
      this.isReflectionsView = await DatabaseService.getData('is_reflections_view');
    },
    async getIsGospelView() {
      this.isGospelView = await DatabaseService.getData('is_gospel_view');
    },
    async getIsPatronPrayerView() {
      this.isPatronPrayerView = await DatabaseService.getData('is_patron_prayer_view');
    },
    async setIsReflectionsView(value) {
      await DatabaseService.setData('is_reflections_view', value);
    },
    async setIsGospelView(value) {
      await DatabaseService.setData('is_gospel_view', value);
    },
    async setIsPatronPrayerView(value) {
      await DatabaseService.setData('is_patron_prayer_view', value);
    },
  },
  watch: {
    isGospelView(value) {
      this.setIsGospelView(value);
    },
    isReflectionsView(value) {
      this.setIsReflectionsView(value);
    },
    isPatronPrayerView(value) {
      this.setIsPatronPrayerView(value);
    }
  }
}
</script>