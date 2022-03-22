<template>
<ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
        <ion-buttons slot= "end">
            <ion-button @click="closeModal()">Close</ion-button>
        </ion-buttons>
    </ion-toolbar>
  </ion-header>
<ion-content class="ion-padding">
    <ion-card class="ion-padding">
        <ion-card-content>
             <line-chart v-if="currMonth" :data="currMonth" 
                title="Current Month Data"
                loading="Loading..."
                empty="Current Month Data: Empty"
                discrete= "true">
            </line-chart>
        </ion-card-content>
    </ion-card>
    <br>
    <ion-card class="ion-padding">
        <ion-card-content>
             <line-chart v-if="prevMonth" :data="prevMonth" 
                title="Previous Month Data"
                loading="Loading..."
                empty="Previous Month Data: Empty"
                discrete= "true">
            </line-chart>
        </ion-card-content>
    </ion-card>
    </ion-content>
</template>

<script>

import { 
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    modalController
} from '@ionic/vue'

export default {
    name: 'PlasticMonth',
    components: {
        IonCard,
        IonCardContent,
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonButton,
    },
    props: {
        title: { type: String, default: 'Super Modal' },
    },
    data() {
        return {
            currMonth: [],
            prevMonth: [],
            content: 'Content',
        }
    },
    setup(){
        const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
    },
    mounted() {
        this.currData(),
        this.prevData()
    },
    methods: {
        currData() {
            fetch("http://localhost/capstone/src/backend/MonthlyReport/plasticCurrMonth.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let currMonth = []
                data.forEach(element => {
                    currMonth.push([element.created_at, element.plastic])
                });
                this.currMonth = currMonth
            })
        },
        prevData() {
            fetch("http://localhost/capstone/src/backend/MonthlyReport/plasticPrevMonth.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let prevMonth = []
                data.forEach(element => {
                    prevMonth.push([element.created_at, element.plastic])
                });
                this.prevMonth = prevMonth
            })
        },
    },
    
};
</script>

<style scoped>
ion-card{
  --background: #ffff;
  box-shadow: 5px 5px 5px 5px rgba(14, 14, 15, 0.2);
}
ion-content{
  font-family: 'Poppins';
  --ion-background-color: #ffffff;
}
ion-title{
    font-family: 'Poppins';
}
ion-button{
    font-family: 'Poppins';
    color: #6370ff;
}
</style>
