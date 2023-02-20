<template>
  <ion-item :href="item.link">
    <font-awesome-icon :icon="item.icon" pull="left" />
    <ion-label>{{ item.name }}</ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from "@ionic/vue";

export default {
  name: "SidebarItem",
  components: {
    IonItem,
    IonLabel,
  },
  props: {
    item: Object,
  },
};
</script>
