<template>
  <ion-menu contentId="main-content">
    <sidebar-content></sidebar-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <slot></slot>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from "@ionic/vue";
import SidebarContent from "./sidebar/Sidebar.vue";

export default {
  name: "BaseLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    SidebarContent,
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
/*ion-toolbar {*/
/*  --background: transparent no-repeat fixed center;*/
/*  --color: var(--ion-color-primary);*/
/*}*/

ion-toolbar {
  --background: var(--ion-color-primary);
  --color: white;
  font-weight: bold;
  position: absolute;
  top: 0;
}
ion-title,
ion-menu-button {
  color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
}

</style>
