<template>
  <base-layout title="O Aplikacji">
    <ion-content>
      <ion-list>
        <ion-item class="ion-text-center">
          <ion-label color="primary" class="ion-text-center">
            <h1>O Nią & O Niego</h1>
            <span>Wersja 1.0</span>
          </ion-label>
        </ion-item>
        <ion-item class="ion-text-center">
          <ion-label class="ion-text-center">
            <h2>Wykonanie i projekt</h2>
            <a href="https://www.linkedin.com/in/kostecki-sebastian/">Sebastian Kostecki</a>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label class="ion-text-center">
            <span>2023 O Nią & O Niego</span>
            <br><span>Wszelkie prawa zastrzeżone</span>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { IonContent, IonList, IonItem, IonLabel } from "@ionic/vue";
export default {
  name: "AboutApplication",
  components: {
    BaseLayout,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  }
}
</script>

<style scoped>
ion-list {
  margin-top: 64px;
}
h1, h2 {
  font-weight: bold;
}
</style>