<template>
  <ion-page>
    <menu-app></menu-app>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Ustawienia</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="none">
          <ion-item>
            <ion-label position="floating">Nazwa róży</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Początek modlitwy</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Pierwsza tajemnica</ion-label>
            <ion-input placeholder="Enter text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Płeć</ion-label>
            <ion-input></ion-input>
          </ion-item>
        </ion-list>
      </ion-content>
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
  IonList,
  IonItem,
  IonInput,
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
    IonList,
    IonItem,
    IonInput,
  },
};
</script>

<style scoped>
ion-segment {
  --background: primary;
}
</style>
