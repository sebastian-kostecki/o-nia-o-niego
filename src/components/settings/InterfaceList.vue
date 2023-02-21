<template>
  <ion-list lines="full">
    <ion-list-header>
      <ion-label>Dashboard</ion-label>
    </ion-list-header>
    <ion-item class="ion-margin-horizontal">
      <ion-label>Rozważania</ion-label>
      <ion-toggle slot="end"></ion-toggle>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <ion-label>Ewangelia z dnia</ion-label>
      <ion-toggle slot="end"></ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script>
import {IonList, IonItem, IonLabel, IonListHeader} from "@ionic/vue";
export default {
  name: "InterfaceList",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonListHeader
  },
}
</script>