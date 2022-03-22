<template>
    <div v-for="gettersBin in gettersBin" :key="gettersBin.id">
        <div v-if="`${gettersBin.plastic}` == 0">
            <ion-alert
              header="NOTICE!"
              subHeader="Plastic Bin"
              message="Bin is Empty"
              :buttons= "buttons"
              cssClass="zero-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.plastic}` == 50">
            <ion-alert 
              header="NOTICE!"
              subHeader="Plastic Bin"
              message="Bin Usage is in 50% Threshold!"
              :buttons= "buttons"
              cssClass="zero-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.plastic}` == 70">
            <ion-alert
              header="NOTICE!!"
              subHeader="Plastic Bin"
              message="Bin Usage is in 70% Threshold!!"
              :buttons= "buttons"
              cssClass="seventy-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.plastic}` == 85">
            <ion-alert 
              header="NOTICE!!!"
              subHeader="Plastic Bin"
              message="Bin Usage is almost Full, Please Change Immediately!!"
              :buttons= "buttons"
              cssClass="eighty-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.plastic}` == 100">
            <ion-alert 
              header="NOTICE!!!"
              subHeader="Plastic Bin"
              message="Bin is Full!!"
              :buttons= "buttons"
              cssClass="eighty-threshold"
            />
        </div>
    </div>
    <div v-for="gettersBin in gettersBin" :key="gettersBin.id">
        <div v-if="`${gettersBin.metal}` == 0">
            <ion-alert
              header="NOTICE!"
              subHeader="Metal Bin"
              message="Bin is Empty"
              :buttons= "buttons"
              cssClass="zero-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.metal}` == 50">
            <ion-alert 
              header="NOTICE!"
              subHeader="Metal Bin"
              message="Bin Usage is in 50% Threshold!"
              :buttons= "buttons"
              cssClass="zero-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.metal}` == 70">
            <ion-alert
              header="NOTICE!!"
              subHeader="Metal Bin"
              message="Bin Usage is in 70% Threshold!!"
              :buttons= "buttons"
              cssClass="seventy-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.metal}` == 85">
            <ion-alert 
              header="NOTICE!!"
              subHeader="Metal Bin"
              message="Bin Usage is almost Full, Please Change Immediately!!"
              :buttons= "buttons"
              cssClass="eighty-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.metal}` == 100">
            <ion-alert 
              header="NOTICE!!"
              subHeader="Metal Bin"
              message="Bin is Full!!"
              :buttons= "buttons"
              cssClass="eighty-threshold"
            />
        </div>
    </div>
    <div v-for="gettersBin in gettersBin" :key="gettersBin.id">
        <div v-if="`${gettersBin.nonPlastic}` == 0">
            <ion-alert
              header="NOTICE!"
              subHeader="Other Waste Materials Bin"
              message="Bin is Empty"
              :buttons= "buttons"
              cssClass="zero-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.nonPlastic}` == 50">
            <ion-alert 
              header="NOTICE!"
              subHeader="Other Waste Materials Bin"
              message="Bin Usage is in 50% Threshold!"
              :buttons= "buttons"
              cssClass="zero-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.nonPlastic}` == 70">
            <ion-alert
              header="NOTICE!!"
              subHeader="Other Waste Materials Bin"
              message="Bin Usage is in 70% Threshold!!"
              :buttons= "buttons"
              cssClass="seventy-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.nonPlastic}` == 85">
            <ion-alert 
              header="NOTICE!!"
              subHeader="Other Waste Materials Bin"
              message="Bin Usage is almost Full, Please Change Immediately!!"
              :buttons= "buttons"
              cssClass="eighty-threshold"
            />
        </div>
        <div v-else-if="`${gettersBin.nonPlastic}` == 100">
            <ion-alert 
              header="NOTICE!!"
              subHeader="Other Waste Materials Bin"
              message="Bin is Full!!"
              :buttons= "buttons"
              cssClass="eighty-threshold"
            />
        </div>
    </div>
</template>

<script>

import { IonAlert } from '@ionic/vue';

export default {
    name: 'aletNotif',
    components: {
        IonAlert
    },
    setup(){
        const buttons = ['Close'];
        return { buttons }
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

