<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title color="primary">
        <div id="wrapper">
          <font-awesome-icon :icon="icon" pull="left" class="ion-margin-start"/>
          <span>{{ title }}</span>
          <ion-button fill="clear" @click="expand=!expand">
            <ion-icon :icon="chevronDown" slot="icon-only" v-if="!expand"></ion-icon>
            <ion-icon :icon="chevronUp" slot="icon-only" v-if="expand"></ion-icon>
          </ion-button>
        </div>
      </ion-card-title>
      <ion-card-subtitle v-if="subtitle" class="ion-margin-start">{{ subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content v-if="expand">{{ content }}</ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon} from "@ionic/vue";
import { chevronDown, chevronUp } from 'ionicons/icons';

export default {
  components: {
    IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon
  },
  props: {
    title: String,
    subtitle: String,
    content: String,
    icon: String
  },
  data() {
    return {
      expand: false,
      chevronDown,
      chevronUp
    }
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

#wrapper {
  display: flex;
  align-items: center;
}

ion-button {
  position: absolute;
  right: 0;
}

</style>