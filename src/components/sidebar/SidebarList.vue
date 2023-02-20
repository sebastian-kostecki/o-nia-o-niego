<template>
  <ion-list lines="full">
    <sidebar-item
      v-for="item in items"
      :key="item.name"
      :item="item"
      :icon="item.icon"
    ></sidebar-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import SidebarItem from "./SidebarItem.vue";

export default {
  name: "SidebarList",
  components: {
    IonList,
    SidebarItem,
  },
  props: ["items"],
};
</script>
