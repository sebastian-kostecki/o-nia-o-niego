<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list lines="none">
      <ion-item href="/dashboard">
        <ion-icon :icon="home" slot="start"></ion-icon>
        <ion-label>Start</ion-label>
      </ion-item>
      <ion-item href="/settings">
        <ion-icon :icon="settings" slot="start"></ion-icon>
        <ion-label>Ustawienia</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon :icon="informationCircle" slot="start"></ion-icon>
        <ion-label>Informacje</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { home, settings, informationCircle } from "ionicons/icons";

export default {
  name: "SidebarContent",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
  },
  data() {
    return {
      home,
      settings,
      informationCircle,
    };
  },
};
</script>
