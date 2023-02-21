<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title color="primary">
        <font-awesome-icon :icon="icon" pull="left" />
        {{ title }}</ion-card-title>
      <ion-card-subtitle v-if="subtitle">{{ subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>{{ content }}</ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardTitle, IonCardSubtitle, IonCardContent} from "@ionic/vue";

export default {
  components: {
    IonCard, IonCardTitle, IonCardSubtitle, IonCardContent
  },
  props: {
    title: String,
    subtitle: String,
    content: String,
    icon: String
  }
}
</script>

<style scoped>
  ion-card {
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 36px;
  }
  ion-card-title {
    font-weight: bold;
  }
</style>