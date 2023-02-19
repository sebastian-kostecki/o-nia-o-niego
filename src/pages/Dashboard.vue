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
        <p>{{ mysteryOfRosary }}</p>
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
  dateNow() {
    const date = new Date("November 13, 2023");
    const day = date.getDate().toString();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear().toString();
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  },
  mysteryOfRosary() {
    return "Tajemnica Światła";
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: transparent no-repeat fixed center;
  --color: white;
  font-style: bold;
  position: absolute;
  top: 0;
}
</style>
