<template>
    <master-layout pageTitle="Metal Bin">
        
        <div class="card" v-for="gettersBin in gettersBin" :key="gettersBin.id">
              <ion-card id="card" class="ion-padding">
                <ion-card-content>
                  <div v-if="gettersBin.metal == '0'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
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
                  <div v-else-if="gettersBin.metal >= '1' && gettersBin.metal <= '50' && gettersBin.metal !== '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
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
                  <div v-else-if="gettersBin.metal >= '51' && gettersBin.metal <= '60'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
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
                  <div v-else-if="gettersBin.metal >= '61' && gettersBin.metal <= '79'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
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
                  <div v-else-if="gettersBin.metal >= '80' && gettersBin.metal <= '99'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
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
                  <div v-else-if="gettersBin.metal == '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
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
import MetalWeek from './MetalWeek.vue';
import MetalMonth from './MetalMonth.vue';
import {
    IonCard,
    IonCardContent,
    IonLabel,
    modalController,
} from '@ionic/vue';
export default {
    name: 'MetalPage',
    components: {
        IonCard,
        IonCardContent,
        IonLabel,
    },
    methods: {
      async openWeek() {
        const modal = await modalController
          .create({
            component: MetalWeek,
            cssClass: 'my-custom-class',
            componentProps: {
              title: 'Metal Weekly Report',
            },
          })
          return modal.present();
      },
      async openMonth() {
        const modal = await modalController
          .create({
            component: MetalMonth,
            cssClass: 'my-custom-class',
            componentProps: {
              title: 'Metal Monthly Report',
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
