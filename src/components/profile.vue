<template>
    <master-layout pageTitle="Profile">
        <ion-card>
            <ion-card-header>
                <ion-card-title>Profile</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            </ion-card-content>
        </ion-card>
    </master-layout>
</template>

<script>
import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/vue'
export default {
    name: 'ProfilePage',
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
    },
};
</script>
