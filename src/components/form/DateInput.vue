<template>
  <ion-label color="primary" position="stacked">{{ title }}</ion-label>
  <ion-input
      type="date"
      v-model="selectedValue"
      @ionChange="setValue"
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
  props: {
    title: String,
  },
  data() {
    return {
      selectedValue: null
    }
  },
  methods: {
    setValue() {
      this.$emit('set-value', this.selectedValue)
    }
  }
}
</script>