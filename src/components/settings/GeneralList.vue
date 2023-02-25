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
      <ion-label color="primary" position="stacked">Płeć</ion-label>
      <ion-select interface="popover" placeholder="Wybierz płeć">
        <ion-select-option value="women">Kobieta</ion-select-option>
        <ion-select-option value="men">Mężczyzna</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
import {IonList, IonItem, IonLabel, IonListHeader, IonSelect, IonSelectOption} from "@ionic/vue";
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
    IonSelect,
    IonSelectOption,
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