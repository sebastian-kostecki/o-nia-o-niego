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
      <ion-content>
        <p>{{ dateNow }}</p>
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
import MenuApp from "../components/MenuApp.vue";
export default {
  name: "dash-board",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonButtons,
    MenuApp,
  },
  computed: {
    dateNow() {
      const date = new Date("November 13, 2023");
      const day = date.getDate().toString();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear().toString();
      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
    },
  },
};
</script>

<style scoped></style>
