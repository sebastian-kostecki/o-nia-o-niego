<template>
  <ion-label color="primary" position="stacked">{{ title }}</ion-label>
  <ion-select
      interface="popover"
      :placeholder="placeholder"
      v-model="selectedValue"
  >
    <ion-select-option
        v-for="(item, index) in items"
        :key="index"
        :value="item.id"
    >{{ item.text }}
    </ion-select-option>
  </ion-select>
</template>

<script>
import {IonLabel, IonSelect, IonSelectOption} from "@ionic/vue";

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
    items: Array,
    item: {
      type: Object,
      default: () => ({})
    }
  },
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

<style>
</style>