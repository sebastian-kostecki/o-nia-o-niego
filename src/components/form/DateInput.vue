<template>
  <ion-label color="primary" position="stacked">{{ title }}</ion-label>
  <ion-input
      type="date"
      v-model="selectedValue"
  ></ion-input>
</template>

<script>
import { IonLabel, IonInput } from "@ionic/vue";
export default {
  name: "DateInput",
  components: {
    IonInput,
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