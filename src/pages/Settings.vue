<template>
  <base-layout title="Ustawienia">
    <general-list></general-list>
    <interface-list></interface-list>
  </base-layout>
</template>

<script>
import GeneralList from "@/components/settings/GeneralList.vue";
import InterfaceList from "@/components/settings/InterfaceList.vue";
export default {
  name: "SettingsApp",
  components: {
    GeneralList,
    InterfaceList
  },
};
</script>

<style>
ion-list-header {
  font-weight: bold;
  --color: var(--ion-color-primary-shade);
}
ion-item {
  --color: var(--ion-color-primary-shade);
}
</style>
