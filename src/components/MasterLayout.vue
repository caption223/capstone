<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-padding">
        <ion-buttons @click="openMenu()" slot="start">
          <ion-icon :icon="menuSharp" slot="start"></ion-icon>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <slot></slot>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  menuController,
} from "@ionic/vue";

import { menuSharp } from "ionicons/icons";
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonIcon,
  },
  props: ["pageTitle"],
  data() {
    return {
      menuSharp,
    };
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
  },
  computed: {
    }
};
</script>

<style scoped>
ion-content{
  font-family: 'Poppins';
  --ion-background-color: #ffffff;
}
ion-title{
    font-family: 'Poppins';
}
ion-buttons{
    float: left;
}
ion-icon{
    color: #6370ff;
}

</style>