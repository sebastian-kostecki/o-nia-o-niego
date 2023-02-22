<template>
  <ion-list lines="full">
    <ion-list-header>
      <ion-label>Ogólne</ion-label>
    </ion-list-header>
    <ion-item class="ion-margin-horizontal">
      <ion-label color="primary" position="stacked">Patron róży</ion-label>
      <ion-select interface="popover" placeholder="Wybierz patrona róży">
        <ion-select-option
            v-for="patron in patrons"
            :key="patron.id"
            :value="patron.id"
        >{{ patron.text }}
        </ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item class="ion-margin-horizontal">
      <ion-label color="primary" position="stacked">Początek modlitwy</ion-label>
      <ion-input type="date"></ion-input>
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
import {IonList, IonItem, IonInput, IonLabel, IonListHeader} from "@ionic/vue";

export default {
  name: "GeneralList",
  components: {
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonListHeader
  },
  data() {
    return {
      patrons: [
        {
          id: 1,
          text: "Duch Święty"
        },
        {
          id: 2,
          text: "Święta Rodzina"
        },
        {
          id: 1,
          text: "Św. Józef"
        }
      ],
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
};
</script>

<style scoped>
ion-list {
  margin-top: 64px;
}
</style>