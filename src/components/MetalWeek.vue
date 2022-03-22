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
                discrete= "true"
                :colors="['#cf3c4f']">
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
                discrete= "true"
                :colors="['#cf3c4f']">
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
                discrete= "true"
                :colors="['#cf3c4f']">
            </line-chart>
        </ion-card-content>
    </ion-card>
</ion-content>
</template>

<script>

import { 
    IonCard,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    modalController,
    IonContent, 
} from '@ionic/vue'

export default {
    name: 'MetalWeek',
    components: {
        IonCard,
        IonCardContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonContent, 
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
            fetch("http://localhost/capstone/src/backend/WeeklyReport/metalCurrWeek.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let currWeek = []
                data.forEach(element => {
                    currWeek.push([element.created_at, element.metal])
                });
                this.currWeek = currWeek
            })
        },
        prevData() {
            fetch("http://localhost/capstone/src/backend/WeeklyReport/metalPrevWeek.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let prevWeek = []
                data.forEach(element => {
                    prevWeek.push([element.created_at, element.metal])
                });
                this.prevWeek = prevWeek
            })
        },
        todayData() {
            fetch("http://localhost/capstone/src/backend/WeeklyReport/metal24Hour.php")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let today = []
                data.forEach(element => {
                    today.push([element.created_at, element.metal])
                });
                this.today = today
            })
        }
    }
    
};
</script>

<style scoped>
ion-card{
  --background: #ffff;
  box-shadow: 5px 5px 5px 5px rgba(14, 14, 15, 0.2);
}
</style>

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
