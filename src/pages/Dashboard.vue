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
        <ion-card color="light">
          <ion-card-header class="ion-text-center">
            <ion-card-title>{{ dateNow }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-chip>{{ mysteryOfRosary }}</ion-chip>
          </ion-card-content>
        </ion-card>
        <div id="footer">asa</div>
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
  IonChip,
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
    IonChip,
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
    mysteryOfRosary() {
      return "Tajemnica Światła";
    },
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
ion-card {
  top: 15vh;
  margin: 16px;
  position: absolute;
}

ion-chip {
  --background: #6c51aa;
  --color: white;
  font-size: large;
}

#footer {
  background-color: #f3f2f7;
  bottom: 0;
  position: absolute;
  height: 50vh;
  width: 100vw;
}
</style>
