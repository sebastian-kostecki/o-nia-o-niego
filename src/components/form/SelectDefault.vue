<template>
  <ion-label color="primary" position="stacked">{{ title }}</ion-label>
  <ion-select
      interface="popover"
      :placeholder="placeholder"
      v-model="selectedValue"
      @ionChange="setValue"
  >
    <ion-select-option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
    >{{ item.text }}
    </ion-select-option>
  </ion-select>
</template>

<script>
import { IonLabel, IonSelect, IonSelectOption } from "@ionic/vue";
export default {
  name: "SelectDefault",
  components: {
    IonLabel,
    IonSelect,
    IonSelectOption
  },
  props: {
    title: String,
    placeholder: String,
    items: Array
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