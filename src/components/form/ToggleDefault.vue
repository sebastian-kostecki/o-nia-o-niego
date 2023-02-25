<template>
  <ion-label>{{ title }}</ion-label>
  <ion-toggle
      slot="end"
      v-model="selectedValue"
      @ionChange="setValue"
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
  props: {
    title: String,
  },
  data() {
    return {
      selectedValue: true,
    }
  },
  methods: {
    setValue() {
      this.$emit('set-value', this.selectedValue)
    }
  }
}
</script>