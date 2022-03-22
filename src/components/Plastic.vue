<template>
    <master-layout pageTitle="Plastic Bin">
        <div class="card" v-for="gettersBin in gettersBin" :key="gettersBin.id">
              <ion-card id="card" class="ion-padding">
                <ion-card-content>
                  <div v-if="gettersBin.plastic == '0'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="250"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Bin Capacity Usage</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '1' && gettersBin.plastic <= '50' && gettersBin.plastic !== '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="250"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Bin Capacity Usage</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '51' && gettersBin.plastic <= '60'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="250"
                      color="#ffc409"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Bin Capacity Usage</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '61' && gettersBin.plastic <= '79'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="250"
                      color="#ff8652"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Bin Capacity Usage</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '80' && gettersBin.plastic <= '99'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="250"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Bin Capacity Usage</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic == '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="250"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Bin Capacity Usage</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                </ion-card-content>
              </ion-card>
        </div>
        <br>
        <ion-button @click="openWeek" size="large" expand="full">Weekly Report</ion-button>
        <br>
        <ion-button @click="openMonth" size="large" expand="full">Monthly Report</ion-button>
    </master-layout>
</template>

<script>
import PlasticWeek from './PlasticWeek.vue';
import PlasticMonth from './PlasticMonth.vue';
import {
    IonCard,
    IonCardContent,
    IonLabel,
    IonButton,
    modalController,
} from '@ionic/vue';
export default {
    name: 'PlasticWeek',
    components: {
        IonCard,
        IonCardContent,
        IonLabel,
        IonButton,
    },
    methods: {
      async openWeek() {
        const modal = await modalController
          .create({
            component: PlasticWeek,
            cssClass: 'my-custom-class',
            componentProps: {
              title: 'Plastic Weekly Report',
            },
          })
          return modal.present();
      },
      async openMonth() {
        const modal = await modalController
          .create({
            component: PlasticMonth,
            cssClass: 'my-custom-class',
            componentProps: {
              title: 'Plastic Monthly Report',
            },
          })
          return modal.present();
      },
    },
    computed: {
        gettersBin(){
            return this.$store.getters.allBin;
        },

        smartbin(){
            return this.$store.state.smartbin;
        },
    },
    mounted(){
        this.$store.dispatch("getBin");
    }
};
</script>

<style scoped>
pie-chart{
  font-family: 'Poppins';
}
ion-card{
  --background: #ffff;
  box-shadow: 5px 5px 5px 5px rgba(14, 14, 15, 0.2);
}
ion-label{
  font-family: 'Poppins';
  color: #000;
}
.progress{
  font-family: 'Poppins';
}
#card{
  text-align: center;
}
ion-button{
  font-family: 'Poppins';
  --background: #6370ff;
  box-shadow: 5px 5px 5px 5px rgba(14, 14, 15, 0.2);
}

</style>
