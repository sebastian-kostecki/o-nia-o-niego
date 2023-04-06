<template>
  <ion-content>
    <ion-img src="/assets/rose-white.png"></ion-img>
  </ion-content>
</template>

<script>
import {IonImg, IonContent} from "@ionic/vue";

export default {
  name: "LoadingLayout",
  components: {
    IonImg,
    IonContent
  }
}
</script>

<style>
ion-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>