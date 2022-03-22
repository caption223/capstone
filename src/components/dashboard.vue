<template>
    <master-layout pageTitle="Dashboard">
      <div v-for="gettersBin in gettersBin" :key="gettersBin.id">
        <ion-card class="ion-padding">
          <ion-card-content>
            <pie-chart donut="true" :data="[['Plastic', `${gettersBin.plastic}`], ['Metal', `${gettersBin.metal}`], ['Other Wastes', `${gettersBin.nonPlastic}`]]"></pie-chart>
          </ion-card-content>
        </ion-card>
      </div>
      
      <div v-for="gettersBin in gettersBin" :key="gettersBin.id">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card id="card" class="ion-padding">
                <ion-card-content>
                  <div v-if="gettersBin.plastic == '0'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="100"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Plastic</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '1' && gettersBin.plastic <= '50' && gettersBin.plastic !== '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="100"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Plastic</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '51' && gettersBin.plastic <= '60'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="100"
                      color="#ffc409"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Plastic</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '61' && gettersBin.plastic <= '79'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="100"
                      color="#ff8652"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Plastic</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic >= '80' && gettersBin.plastic <= '99'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="100"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Plastic</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.plastic == '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.plastic}`" 
                      size="100"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Plastic</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <br>
                  <ion-label>Bin Capacity Usage</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col>
              <ion-card id="card" class="ion-padding">
                <ion-card-content>
                  <div v-if="gettersBin.metal == '0'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
                      size="100"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Metal</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.metal >= '1' && gettersBin.metal <= '50' && gettersBin.metal !== '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
                      size="100"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Metal</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.metal >= '51' && gettersBin.metal <= '60'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
                      size="100"
                      color="#ffc409"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Metal</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.metal >= '61' && gettersBin.metal <= '79'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
                      size="100"
                      color="#ff8652"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Metal</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.metal >= '80' && gettersBin.metal <= '99'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
                      size="100"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Metal</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.metal == '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.metal}`" 
                      size="100"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                    <template #legend-caption>
                        <br>
                        <ion-label>Metal</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <br>
                  <ion-label>Bin Capacity Usage</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col>
              <ion-card id="card" class="ion-padding">
                <ion-card-content>
                  <div v-if="gettersBin.nonPlastic == '0'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.nonPlastic}`" 
                      size="100"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Other Wastes</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.nonPlastic >= '1' && gettersBin.nonPlastic <= '50' && gettersBin.nonPlastic !== '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.nonPlastic}`" 
                      size="100"
                      color="#6dca81"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Other Wastes</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.nonPlastic >= '51' && gettersBin.nonPlastic <= '60'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.nonPlastic}`" 
                      size="100"
                      color="#ffc409"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Other Wastes</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.nonPlastic >= '61' && gettersBin.nonPlastic <= '79'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.nonPlastic}`" 
                      size="100"
                      color="#ff8652"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Other Wastes</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.nonPlastic >= '80' && gettersBin.nonPlastic <= '99'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.nonPlastic}`" 
                      size="100"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Other Wastes</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <div v-else-if="gettersBin.nonPlastic == '100'">
                    <ve-progress class="progress"
                      :progress="`${gettersBin.nonPlastic}`" 
                      size="100"
                      color="#eb445a"
                      :legend-formatter="({ currentValue }) => `${currentValue}%`"
                      fontColor="#000"
                      determinate="true"
                    >
                      <template #legend-caption>
                        <br>
                        <ion-label>Other Wastes</ion-label>
                      </template>
                    </ve-progress>
                  </div>
                  <br>
                  <ion-label>Bin Capacity Usage</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </master-layout>
</template>

<script>
import { 
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel, 
} from '@ionic/vue';
export default {
    name: 'DashboardPage',
    components: {
      IonCard,
      IonCardContent,
      IonGrid,
      IonRow,
      IonCol,
      IonLabel, 
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
  position: relative;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
