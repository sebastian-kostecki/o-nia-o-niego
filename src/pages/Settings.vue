<template>
  <base-layout title="Ustawienia">
    <ion-list lines="none">
      <ion-item class="ion-margin-horizontal">
        <ion-label position="stacked">Nazwa róży</ion-label>
        <ion-input placeholder="Wpisz nazwę róży"></ion-input>
      </ion-item>
      <ion-item class="ion-margin-horizontal">
        <ion-label position="stacked">Początek modlitwy</ion-label>
        <ion-input type="date"></ion-input>
      </ion-item>
      <ion-item class="ion-margin-horizontal">
        <ion-label position="stacked">Pierwsza tajemnica</ion-label>
        <ion-select interface="popover" placeholder="Wybierz tajemnicę różańca">
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item class="ion-margin-horizontal">
        <ion-label position="stacked">Płeć</ion-label>
        <ion-select interface="popover" placeholder="Wybierz płeć">
          <ion-select-option value="women">Kobieta</ion-select-option>
          <ion-select-option value="men">Mężczyzna</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonInput, IonLabel } from "@ionic/vue";
export default {
  name: "SettingsApp",
  components: {
    IonList,
    IonItem,
    IonInput,
    IonLabel,
  },
};
</script>

<style scoped>
ion-list {
  margin-top: 64px;
}
</style>
