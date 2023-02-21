<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title class="ion-margin">O Nią & O Niego</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <sidebar-list :items="items"></sidebar-list>
  </ion-content>
</template>

<script>
import { IonHeader, IonTitle, IonContent, IonToolbar } from "@ionic/vue";
import SidebarList from "./SidebarList.vue";

export default {
  name: "SidebarContent",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    SidebarList,
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
          name: "Informacje",
          icon: "fa-solid fa-circle-info",
        },
      ],
    };
  },
};
</script>
