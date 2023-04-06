<template>
    <div>
        <ion-button
                class="ion-margin pray-button"
                expand="block"
                size="large"
                @click="$emit('prayed')"
        >{{ text }}
        </ion-button>
    </div>
</template>

<script>
import {IonButton} from "@ionic/vue";

export default {
  name: "PrayedButton",
  components: {
    IonButton
  },
  props: {
    gender: String
  },
  computed: {
    text() {
      if (this.gender === 1) {
        return "Pomodliłam się";
      } else {
        return "Pomodliłem się";
      }
    }
  }
}
</script>

<style scoped>
ion-button {
    font-weight: bold;
    --background: var(--ion-color-primary);
    --background-hover: var(--ion-color-primary-tint);
    --background-activated: var(--ion-color-primary-shade);
    --background-focused: var(--ion-color-primary-shade);

    --color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));

    --border-color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
    --border-style: solid;
    --border-width: 2px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --padding-top: 10px;
    --padding-bottom: 10px;
}
</style>