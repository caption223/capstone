<template>
<master-layout pageTitle="Bin Overview">
    <ion-card>
          <ion-card-content class="ion-padding">
            <ion-card-header>Plastic Bin</ion-card-header>
            <div v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              <div v-if="gettersBin.plastic == '0'">
                <ion-progress-bar :value = "`${gettersBin.plastic}`/100" color = "safe" style="progress: 1;"/>
              </div>
              <div v-else-if="gettersBin.plastic >= '1' && gettersBin.plastic <= '50' && gettersBin.plastic !== '100'">
                <ion-progress-bar :value = "`${gettersBin.plastic}`/100" color = "safe"/>
              </div>
              <div v-else-if="gettersBin.plastic >= '51' && gettersBin.plastic <= '60'">
                <ion-progress-bar :value = "`${gettersBin.plastic}`/100" color = "warning"/>
              </div>
              <div v-else-if="gettersBin.plastic >= '61' && gettersBin.plastic <= '79'">
                <ion-progress-bar :value = "`${gettersBin.plastic}`/100" color = "orange"/>
              </div>
               <div v-else-if="gettersBin.plastic >= '80' && gettersBin.plastic <= '99'">
                <ion-progress-bar :value = "`${gettersBin.plastic}`/100" color = "danger"/>
              </div>
              <div v-else-if="gettersBin.plastic == '100'">
                <ion-progress-bar :value = "`${gettersBin.plastic}`/100" color = "danger"/>
              </div>
            </div>
            <br>
            <ion-label v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              Capacity Usage: {{gettersBin.plastic}}%
            </ion-label>
            <br><br>
            <ion-label>
              Message Status :
            </ion-label>
            <div v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              <ion-label v-if="gettersBin.plastic == '0'">
                Bin is Empty
              </ion-label>
              <ion-label v-else-if="gettersBin.plastic == '1' && gettersBin.plastic !== '100'" >
                Bin Usage Capacity is Under 50%
              </ion-label>
              <ion-label v-else-if="gettersBin.plastic >= '2' && gettersBin.plastic <= '50'">
                Bin Usage Capacity is Under 50%
              </ion-label>
              <ion-label v-else-if="gettersBin.plastic >= '51' && gettersBin.plastic <= '79'">
                Bin Usage Exceeds Half of Its Capacity
              </ion-label>
              <ion-label v-else-if="gettersBin.plastic >= '80' && gettersBin.plastic <= '99'">
                Warning ! Bin is Almost Full !
              </ion-label>
              <ion-label v-else-if="gettersBin.plastic == '100'">
                Maximum Capacity Reached ! Please Change Immediately !
              </ion-label>
            </div>
          </ion-card-content>
        </ion-card>

        <!--Metal-->
        <ion-card>
          <ion-card-content class="ion-padding">
            <ion-card-header>Metal Bin</ion-card-header>
            <div v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              <div v-if="gettersBin.metal == '0'">
                <ion-progress-bar :value = "`${gettersBin.metal}`/100" color = "safe" style="progress: 1;"/>
              </div>
              <div v-else-if="gettersBin.metal >= '1' && gettersBin.metal <= '50' && gettersBin.metal !== '100'">
                <ion-progress-bar :value = "`${gettersBin.metal}`/100" color = "safe"/>
              </div>
              <div v-else-if="gettersBin.metal >= '51' && gettersBin.metal <= '60'">
                <ion-progress-bar :value = "`${gettersBin.metal}`/100" color = "warning"/>
              </div>
              <div v-else-if="gettersBin.metal >= '61' && gettersBin.metal <= '79'">
                <ion-progress-bar :value = "`${gettersBin.metal}`/100" color = "orange"/>
              </div>
               <div v-else-if="gettersBin.metal >= '80' && gettersBin.metal <= '99'">
                <ion-progress-bar :value = "`${gettersBin.metal}`/100" color = "danger"/>
              </div>
              <div v-else-if="gettersBin.metal == '100'">
                <ion-progress-bar :value = "`${gettersBin.metal}`/100" color = "danger"/>
              </div>
            </div>
            <br>
            <ion-label v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              Capacity Usage: {{gettersBin.metal}}%
            </ion-label>
            <br><br>
            <ion-label>
              Message Status :
            </ion-label>
            <div v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              <ion-label v-if="gettersBin.metal == '0'">
                Bin is Empty
              </ion-label>
              <ion-label v-else-if="gettersBin.metal == '1' && gettersBin.metal !== '100'" >
                Bin Usage Capacity is Under 50%
              </ion-label>
              <ion-label v-else-if="gettersBin.metal >= '2' && gettersBin.metal <= '50'">
                Bin Usage Capacity is Under 50%
              </ion-label>
              <ion-label v-else-if="gettersBin.metal >= '51' && gettersBin.metal <= '79'">
                Bin Usage Exceeds Half of Its Capacity
              </ion-label>
              <ion-label v-else-if="gettersBin.metal >= '80' && gettersBin.metal <= '99'">
                Warning ! Bin is Almost Full !
              </ion-label>
              <ion-label v-else-if="gettersBin.metal == '100'">
                Maximum Capacity Reached ! Please Change Immediately !
              </ion-label>
            </div>
          </ion-card-content>
        </ion-card>

        <!--Other Wastes-->
        <ion-card>
          <ion-card-content class="ion-padding">
            <ion-card-header>Other Wastes Material Bin</ion-card-header>
            <div v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              <div v-if="gettersBin.nonPlastic == '0'">
                <ion-progress-bar :value = "`${gettersBin.nonPlastic}`/100" color = "safe" style="progress: 1;"/>
              </div>
              <div v-else-if="gettersBin.nonPlastic >= '1' && gettersBin.nonPlastic <= '50' && gettersBin.nonPlastic !== '100'">
                <ion-progress-bar :value = "`${gettersBin.nonPlastic}`/100" color = "safe"/>
              </div>
              <div v-else-if="gettersBin.nonPlastic >= '51' && gettersBin.nonPlastic <= '60'">
                <ion-progress-bar :value = "`${gettersBin.nonPlastic}`/100" color = "warning"/>
              </div>
              <div v-else-if="gettersBin.nonPlastic >= '61' && gettersBin.nonPlastic <= '79'">
                <ion-progress-bar :value = "`${gettersBin.nonPlastic}`/100" color = "orange"/>
              </div>
               <div v-else-if="gettersBin.nonPlastic >= '80' && gettersBin.nonPlastic <= '99'">
                <ion-progress-bar :value = "`${gettersBin.nonPlastic}`/100" color = "danger"/>
              </div>
              <div v-else-if="gettersBin.nonPlastic == '100'">
                <ion-progress-bar :value = "`${gettersBin.nonPlastic}`/100" color = "danger"/>
              </div>
            </div>
            <br>
            <ion-label v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              Capacity Usage: {{gettersBin.nonPlastic}}%
            </ion-label>
            <br><br>
            <ion-label>
              Message Status :
            </ion-label>
            <div v-for = "gettersBin in gettersBin" :key = "gettersBin.id">
              <ion-label v-if="gettersBin.nonPlastic == '0'">
                Bin is Empty
              </ion-label>
              <ion-label v-else-if="gettersBin.nonPlastic == '1' && gettersBin.nonPlastic !== '100'" >
                Bin Usage Capacity is Under 50%
              </ion-label>
              <ion-label v-else-if="gettersBin.nonPlastic >= '2' && gettersBin.nonPlastic <= '50'">
                Bin Usage Capacity is Under 50%
              </ion-label>
              <ion-label v-else-if="gettersBin.nonPlastic >= '51' && gettersBin.nonPlastic <= '79'">
                Bin Usage Exceeds Half of Its Capacity
              </ion-label>
              <ion-label v-else-if="gettersBin.nonPlastic >= '80' && gettersBin.nonPlastic <= '99'">
                Warning ! Bin is Almost Full !
              </ion-label>
              <ion-label v-else-if="gettersBin.nonPlastic == '100'">
                Maximum Capacity Reached ! Please Change Immediately !
              </ion-label>
            </div>
          </ion-card-content>
        </ion-card>
</master-layout>
</template>

<script>
import { defineComponent } from 'vue'

import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonLabel,
    IonProgressBar,
} from '@ionic/vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonLabel,
        IonProgressBar,
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
})
</script>

<style scoped>

ion-progress-bar{
  height: 20px;
  border-radius: 20px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
ion-card{
  box-shadow: 5px 5px 5px 5px rgba(14, 14, 15, 0.2);
  border: 1px solid black;
  border-radius: 30px;
  font-family: 'Poppins';

}
</style>
