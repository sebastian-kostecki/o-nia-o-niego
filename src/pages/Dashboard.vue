<template>
  <ion-page>
    <menu-list></menu-list>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Ona & On</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        Tap the button in the toolbar to open the menu.
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
} from "@ionic/vue";
import MenuList from "../components/MenuApp.vue";
export default {
  name: "dash-board",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonButtons,
    MenuList,
  },
};
</script>
