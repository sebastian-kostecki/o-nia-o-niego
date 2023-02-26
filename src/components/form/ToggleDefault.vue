<template>
  <ion-label>{{ title }}</ion-label>
  <ion-toggle
      slot="end"
      v-model="selectedValue"
  ></ion-toggle>
</template>

<script>
import {IonLabel, IonToggle} from "@ionic/vue";
export default {
  name: "ToggleDefault",
  components: {
    IonToggle,
    IonLabel
  },
  props: ['title', 'item'],
  emits: ['update:item'],
  computed: {
    selectedValue: {
      get() {
        return this.item;
      },
      set(newValue) {
        this.$emit('update:item', newValue)
      },
    },
  },
}
</script>