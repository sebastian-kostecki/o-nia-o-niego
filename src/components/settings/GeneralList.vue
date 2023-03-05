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
          v-model:item="patron"
      ></select-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <date-input
          title="Początek modlitwy"
          v-model:item="beginningDate"
      ></date-input>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <select-default
          title="Pierwsza tajemnica"
          placeholder="Wybierz tajemnice różańca"
          :items="mysteryOfRosary"
          v-model:item="firstMystery"
      ></select-default>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <select-default
          title="Płeć"
          placeholder="Wybierz płeć"
          :items="genders"
          v-model:item="gender"
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
      patron: null,
      beginningDate: "",
      firstMystery: null,
      gender: null
    };
  },
  created () {
    DatabaseService.initDatabase();
  },
  mounted() {
    this.getSettings();
  },
  methods: {
    async getSettings() {
      await this.setLoading(true);
      await this.getPatron();
      await this.getBeginning();
      await this.getFirstMystery();
      await this.getGender();
    },
    async setPatron(patron) {
      await DatabaseService.setData('patron', patron);
    },
    async getPatron() {
      this.patron = await DatabaseService.getData('patron');
    },
    async setBeginning(date) {
      await DatabaseService.setData('beginning_date', date);
    },
    async getBeginning() {
      this.beginningDate = await DatabaseService.getData('beginning_date');
    },
    async setFirstMystery(mystery) {
      await DatabaseService.setData('first_mystery', mystery);
    },
    async getFirstMystery() {
      this.firstMystery = await DatabaseService.getData('first_mystery');
    },
    async setGender(gender) {
      await DatabaseService.setData('gender', gender);
    },
    async getGender() {
      this.gender = await DatabaseService.getData('gender');
    },
    async setLoading(value) {
      this.loading = value;
    }
  },
  watch: {
    patron(value) {
      this.setPatron(value);
    },
    beginningDate(value) {
      this.setBeginning(value);
    },
    firstMystery(value) {
      this.setFirstMystery(value);
    },
    gender(value) {
      this.setGender(value);
    },
  }
};
</script>