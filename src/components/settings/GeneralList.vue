<template>
  <ion-list lines="full">
    <ion-list-header>
      <ion-label>Ogólne</ion-label>
    </ion-list-header>
    <ion-item class="ion-margin-horizontal">
      <select-default
          title="Patron róży"
          placeholder="Wybierz patrona róży"
          :items="patrons"
          @set-value="setPatron"
      ></select-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <date-input
          title="Początek modlitwy"
          @set-value="setBeginning"
      ></date-input>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <select-default
          title="Pierwsza tajemnica"
          placeholder="Wybierz tajemnice różańca"
          :items="mysteryOfRosary"
          @set-value="setFirstMystery"
      ></select-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <select-default
          title="Płeć"
          placeholder="Wybierz płeć"
          :items="gender"
          @set-value="setGender"
      ></select-default>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonListHeader } from "@ionic/vue";
import DatabaseService from "@/services/database";
import SelectDefault from "@/components/form/SelectDefault.vue";
import DateInput from "@/components/form/DateInput.vue";
import SettingsVariablesMixins from "@/mixins/settingsVariablesMixins";

export default {
  name: "GeneralList",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    SelectDefault,
    DateInput
  },
  mixins: [SettingsVariablesMixins],
  data() {
    return {
      loading: false,
    };
  },
  created() {
    DatabaseService.initDatabase();
  },
  methods: {
    async setPatron(patronId) {
      await DatabaseService.setData('patron', patronId);
    },
    async setBeginning(date) {
      await DatabaseService.setData('beginning_date', date);
    },
    async setFirstMystery(mystery) {
      await DatabaseService.setData('first_mystery', mystery);
    },
    async setGender(gender) {
      await DatabaseService.setData('gender', gender.text);
    },
    setLoading(value) {
      this.loading = value;
    }
  }
};
</script>

<style scoped>
ion-list {
  margin-top: 56px;
}
</style>