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
      <ion-label color="primary" position="stacked">Pierwsza tajemnica</ion-label>
      <ion-select interface="popover" placeholder="Wybierz tajemnicę różańca">
        <ion-select-option
            v-for="mystery in mysteryOfRosary"
            :key="mystery.value"
            :value="mystery.value"
        >{{ mystery.text }}
        </ion-select-option
        >
      </ion-select>
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
      selectedDate: null,
      mysteryOfRosary: [
        {
          text: "Zwiastowanie",
          value: 1,
        },
        {
          text: "Nawiedzenie św. Elżbiety",
          value: 2,
        },
        {
          text: "Narodzenie",
          value: 3,
        },
        {
          text: "Ofiarowanie",
          value: 4,
        },
        {
          text: "Znalezienie w świątyni",
          value: 5,
        },
        {
          text: "Chrzest w Jordanie",
          value: 6,
        },
        {
          text: "Objawienie na weselu w Kanie",
          value: 7,
        },
        {
          text: "Głoszenie Królestwa Bożego",
          value: 8,
        },
        {
          text: "Przemienienie Pańskie",
          value: 9,
        },
        {
          text: "Ustanowienie Eucharystii",
          value: 10,
        },
        {
          text: "Modlitwa w Ogrójcu",
          value: 11,
        },
        {
          text: "Biczowanie",
          value: 12,
        },
        {
          text: "Cierniem Ukoronowanie",
          value: 13,
        },
        {
          text: "Droga Krzyżowa",
          value: 14,
        },
        {
          text: "Śmierć na Krzyżu",
          value: 15,
        },
        {
          text: "Zmartwychwstanie",
          value: 16,
        },
        {
          text: "Wniebowstąpienie",
          value: 17,
        },
        {
          text: "Zesłanie Ducha Świętego",
          value: 18,
        },
        {
          text: "Wniebowzięcie NMP",
          value: 19,
        },
        {
          text: "Ukoronowanie NMP",
          value: 20,
        },
      ],
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
      await DatabaseService.setData('beginningDate', date);
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