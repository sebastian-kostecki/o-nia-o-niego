<template>
  <base-layout title="Ustawienia">
    <general-list></general-list>
  </base-layout>
</template>

<script>
import GeneralList from "@/components/settings/GeneralList.vue";
export default {
  name: "SettingsApp",
  components: {
    GeneralList,
  },
};
</script>

<style>
ion-list-header {
  font-weight: bold;
  --color: var(--ion-color-primary-shade);
}
</style>
