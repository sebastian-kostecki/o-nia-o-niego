<template>
  <div>
    <base-layout title="Ustawienia">
      <ion-content>
        <general-list class="ion-margin-top"></general-list>
        <interface-list></interface-list>
      </ion-content>
    </base-layout>
  </div>
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
