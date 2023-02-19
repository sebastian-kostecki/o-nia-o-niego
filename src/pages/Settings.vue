<template>
  <ion-page>
    <menu-app></menu-app>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>O Nią & O Niego</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content> </ion-content>
    </div>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonButtons,
} from "@ionic/vue";
import MenuApp from "../components/MenuApp.vue";
export default {
  name: "SettingsApp",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonButtons,
    MenuApp,
  },
};
</script>
