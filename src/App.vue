<template>
  <ion-app>
    <Menu />
      <AlertNotif />
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Menu from './components/Menu.vue';
import axios from 'axios';
import AlertNotif from './components/alertNotif.vue'
export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu,
    AlertNotif,
  },
   data(){
        return{
            user: null,
        }
    },
    async created(){
    
        const response = await axios.get('user');
        this.$store.dispatch('user', response.data);
    },
};
</script>