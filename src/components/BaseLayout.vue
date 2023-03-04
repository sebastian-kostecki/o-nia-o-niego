<template>
  <ion-menu contentId="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title class="ion-margin">O Nią & O Niego</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <sidebar-list>
        <sidebar-item v-for="item in items" :key="item.name" :item="item"></sidebar-item>
      </sidebar-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
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
import SidebarList from "@/components/sidebar/SidebarList.vue";
import SidebarItem from "@/components/sidebar/SidebarItem.vue";

export default {
  name: "BaseLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    SidebarList,
    SidebarItem
  },
  props: {
    title: String,
  },
  data() {
    return {
      items: [
        {
          link: "/dashboard",
          name: "Start",
          icon: "fa-solid fa-house",
        },
        {
          link: "/settings",
          name: "Ustawienia",
          icon: "fa-solid fa-gear",
        },
        {
          link: "/info",
          name: "O Aplikacji",
          icon: "fa-solid fa-circle-info",
        },
      ],
    };
  }
}
</script>

<style scoped>
ion-title,
ion-menu-button {
  color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
}
</style>
