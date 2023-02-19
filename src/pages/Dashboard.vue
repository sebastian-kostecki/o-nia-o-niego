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
        <img src="../assets/rosary.png" alt="rosary" />
        <ion-card>
          <ion-card-header>
            <ion-card-title color="primary">{{
              mysteryOfRosary
            }}</ion-card-title>
            <ion-card-subtitle
              >{{ dateNow }}<br />Do końca pozostało 245 dni.</ion-card-subtitle
            >
          </ion-card-header>
        </ion-card>
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
      const date = new Date();
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

ion-content {
  --background: #6c51aa;
}

img {
  opacity: 0.1;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

ion-card {
  top: 64px;
  margin-left: 16px;
  margin-right: 16px;
}
</style>
