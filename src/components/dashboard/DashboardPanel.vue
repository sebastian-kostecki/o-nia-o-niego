<template>
  <div>
    <p class="ion-text-center">{{ date }}</p>
    <p class="ion-text-center">{{ liturgicDay }}</p>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    liturgicDay: String
  }
}
</script>

<style scoped>
div {
  margin: 72px 16px 24px 16px;
  border: 2px;
  border-style: solid;
  border-color: var(--ion-background-color, #fff);
  border-radius: 4px;
  color: var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));
  font-weight: bold;
}
</style>