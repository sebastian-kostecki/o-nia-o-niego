<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title
          class="ion-text-center"
      >{{ date }}</ion-card-title>
      <ion-card-subtitle
          class="ion-text-center"
      >{{ liturgicDay }}</ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
  },
  props: {
    date: String,
    liturgicDay: String
  }
}
</script>

<style scoped>
ion-card {
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
  --background: dark;
  border: 2px solid var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
}
ion-card-title,
ion-card-subtitle {
  color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
  font-weight: bold;
}
div {
  margin: 16px 16px 24px 16px;
  border: 2px;
  border-style: solid;
  border-color: var(--ion-background-color, #fff);
  border-radius: 4px;
  color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
  font-weight: bold;
}
</style>