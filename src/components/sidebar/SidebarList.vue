<template>
  <ion-list :inset="true">
    <slot></slot>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";

export default {
  name: "SidebarList",
  components: {
    IonList,
  },
};
</script>
