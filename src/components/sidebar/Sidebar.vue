<template>
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
</template>

<script>
import { IonHeader, IonTitle, IonContent, IonToolbar } from "@ionic/vue";
import SidebarList from "@/components/sidebar/SidebarList.vue";
import SidebarItem from "@/components/sidebar/SidebarItem.vue";

export default {
  name: "SidebarContent",
  components: {
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    SidebarList,
    SidebarItem
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
  },
};
</script>

<style scoped>
ion-title {
  color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
}
</style>
