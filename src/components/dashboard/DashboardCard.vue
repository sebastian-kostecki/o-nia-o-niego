<template>
  <ion-card v-if="isShowed">
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
      <ion-card-subtitle
          v-if="(isShowedSubtitle || expand) && subtitle"
          class="ion-margin-start ion-margin-end ion-text-justify"
          color="primary"
      >{{ subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content
        v-if="expand"
        class="ion-margin-start ion-margin-end ion-text-justify"
    >{{ content }}</ion-card-content>
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
    icon: String,
    isShowed: Boolean,
    isShowedSubtitle: {
      type: Boolean,
      default: true
    }
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
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
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

ion-card-subtitle {
  font-weight: bold;
}
</style>