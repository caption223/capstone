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
             <area-chart v-if="today" :data="today" 
                title="Last 24 Hours Data"
                loading="Loading..."
                empty="Last 24 Hours Data: Empty"
                discrete= "true">
            </area-chart>
        </ion-card-content>
    </ion-card>
    <br>
    <ion-card class="ion-padding">
        <ion-card-content>
             <line-chart v-if="currWeek" :data="currWeek" 
                title="Current Week Data"
                loading="Loading..."
                empty="Current Week Data: Empty"
                discrete= "true">
            </line-chart>
        </ion-card-content>
    </ion-card>
    <br>
    <ion-card class="ion-padding">
        <ion-card-content>
             <line-chart v-if="prevWeek" :data="prevWeek" 
                title="Previous Week Data"
                loading="Loading..."
                empty="Previous Week Data: Empty"
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
    name: 'PlasticWeek',
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
            currWeek: [],
            prevWeek: [],
            today: [],
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
        this.prevData(),
        this.todayData()
    },
    methods: {
        currData() {
            fetch("http://localhost/capstone/src/backend/WeeklyReport/plasticPresentWeek.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let currWeek = []
                data.forEach(element => {
                    currWeek.push([element.created_at, element.plastic])
                });
                this.currWeek = currWeek
            })
        },
        prevData() {
            fetch("http://localhost/capstone/src/backend/WeeklyReport/plasticPrevWeek.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let prevWeek = []
                data.forEach(element => {
                    prevWeek.push([element.created_at, element.plastic])
                });
                this.prevWeek = prevWeek
            })
        },
        todayData() {
            fetch("http://localhost/capstone/src/backend/WeeklyReport/plastic24Hour.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let today = []
                data.forEach(element => {
                    today.push([element.created_at, element.plastic])
                });
                this.today = today
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
