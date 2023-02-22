<template>
  <div>
    <p class="ion-text-center">{{ date }}</p>
    <p class="ion-text-center">{{ liturgicTitle }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      return this.$store.getters.getDateDisplayed;
    },
    liturgicTitle() {
      return this.$store.getters.getLiturgicTitle;
    }
  }
}
</script>

<style scoped>
div {
  margin: 72px 16px 24px 16px;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  font-weight: bold;
}
</style>