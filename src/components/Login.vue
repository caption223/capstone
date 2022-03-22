<template>
<master-layout pageTitle="Sign In">
    <ion-card class="ion-padding">
        <ion-card-content>
            <form @submit.prevent="handleSubmit">
                <ion-input class="ion-padding" v-model="employeeID" placeholder="Enter Employee ID" autofocus="true" type="text"></ion-input>
                <br>
                <ion-input class="ion-padding" v-model="password" placeholder="Enter Password" type="password"></ion-input>
                <br>
                <ion-button type="submit" size="full">Log In</ion-button>
            </form>
        </ion-card-content>
        <div v-if="error" role="alert">{{error}}</div>
    </ion-card>
</master-layout>
</template>

<script>

import axios from 'axios'

import { defineComponent } from 'vue'

import { 
    IonCard,
    IonCardContent,
    IonInput,
    IonButton, 
} from '@ionic/vue';

export default defineComponent({
    name: 'LoginPage',
    components: {
        IonCard,
        IonCardContent,
        IonInput,
        IonButton,
    },

    data(){
        return{
            employeeID: '',
            password: '',
        }
    },

    methods: {
        async handleSubmit(){
            try{
            const response = await axios.post('login', {
                employeeID: this.employeeID,
                password: this.password,
            });
            localStorage.setItem('token', response.data.token);
            this.$store.dispatch('user', response.data.user);
            this.$router.replace('/dashboard');
            }catch(e){
                this.error  =  'Invalid ID/password!'
            }
        },
    },
})
</script>

<style scoped>

ion-card{
  box-shadow: 5px 5px 5px 5px rgba(14, 14, 15, 0.2);
  border: 1px solid black;
  border-radius: 30px;
  font-family: 'Poppins';


  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

}

ion-input{
    font-family: 'Poppins';
    --background: #383a3e;
    border-radius: 30px;
    --placeholder-color: white;
}

ion-button{
    --background: #6370ff;
    font-family: 'Poppins';
}

</style>
