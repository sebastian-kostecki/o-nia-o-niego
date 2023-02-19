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
          <ion-item class="ion-margin-horizontal">
            <ion-label position="stacked">Nazwa róży</ion-label>
            <ion-input placeholder="Wpisz nazwę róży"></ion-input>
          </ion-item>
          <ion-item class="ion-margin-horizontal">
            <ion-label position="stacked">Początek modlitwy</ion-label>
            <ion-input type="date"></ion-input>
          </ion-item>
          <ion-item class="ion-margin-horizontal">
            <ion-label position="stacked">Pierwsza tajemnica</ion-label>
            <ion-select
              interface="popover"
              placeholder="Wybierz tajemnicę różańca"
            >
              <ion-select-option value="apples">Apples</ion-select-option>
              <ion-select-option value="oranges">Oranges</ion-select-option>
              <ion-select-option value="bananas">Bananas</ion-select-option>
              <ion-select-option value="apples">Apples</ion-select-option>
              <ion-select-option value="oranges">Oranges</ion-select-option>
              <ion-select-option value="bananas">Bananas</ion-select-option>
              <ion-select-option value="apples">Apples</ion-select-option>
              <ion-select-option value="oranges">Oranges</ion-select-option>
              <ion-select-option value="bananas">Bananas</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item class="ion-margin-horizontal">
            <ion-label position="stacked">Płeć</ion-label>
            <ion-select interface="popover" placeholder="Wybierz płeć">
              <ion-select-option value="women">Kobieta</ion-select-option>
              <ion-select-option value="men">Mężczyzna</ion-select-option>
            </ion-select>
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
  IonLabel,
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

    IonLabel,
  },
};
</script>

<style scoped>
ion-segment {
  --background: primary;
}
</style>
