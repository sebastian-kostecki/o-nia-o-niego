<template>
  <ion-list lines="full">
    <ion-list-header>
      <ion-label>Dashboard</ion-label>
    </ion-list-header>
    <ion-item class="ion-margin-horizontal">
      <toggle-default
          title="Rozważania"
          @set-value="setIsReflectionsView"
      ></toggle-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <toggle-default
          title="Ewangelia z dnia"
          @set-value="setIsGospelView"
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
  methods: {
    async setIsReflectionsView(value) {
      await DatabaseService.setData('is_reflections_view', value);
    },
    async setIsGospelView(value) {
      await DatabaseService.setData('is_gospel_view', value);
    },
  }
}
</script>