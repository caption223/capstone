<template>
  <ion-menu mode="md" menu-id="app-menu" content-id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar class="ion-padding" id="container">
        <ion-title size="large">BinTrackr</ion-title>
        <br>
        <ion-title size="small" v-if="!user">Welcome!</ion-title>
        <ion-title size="small" v-if="user">Hi, {{user.firstname}} {{user.lastname}}! <a style="float: right;" v-if="user" href="javascript:void(0)" @click="handleClick">Logout</a></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="menu-content">
      <ion-list class="ion-no-border">
        <ion-item lines="none" v-if="!user" button @click="menuNavigation('/home')">
          <ion-label style="font-family: Poppins;">Bin Overview</ion-label>
        </ion-item>
        <ion-item lines="none" v-if="user" button @click="menuNavigation('/dashboard')">
          <ion-icon :icon="pieChartSharp"></ion-icon>
          <ion-label style="font-family: Poppins;">Dashboard</ion-label>
        </ion-item>
        <ion-item lines="full" style="font-family: Poppins;" v-if="!user" button @click="menuNavigation('/login')">
          <ion-label style="font-family: Poppins;">Login</ion-label>
        </ion-item>
        <!--<ion-item lines="full" v-if="user" button @click="menuNavigation('/profile')">
           <ion-icon v-slot: start :icon="personCircleSharp"></ion-icon>
          <ion-label style="font-family: Poppins;">Profile</ion-label>
        </ion-item>-->
        <ion-item lines="none" v-if="user" button @click="menuNavigation('/plastic')">
          <ion-icon :icon="trashSharp"></ion-icon>
          <ion-label style="font-family: Poppins;">Plastic</ion-label>
        </ion-item>
        <ion-item lines="none" v-if="user" button @click="menuNavigation('/metal')">
          <ion-icon :icon="trashSharp"></ion-icon>
          <ion-label style="font-family: Poppins;">Metal</ion-label>
        </ion-item>
        <ion-item lines="none" v-if="user" button @click="menuNavigation('/others')">
          <ion-icon :icon="trashSharp"></ion-icon>
          <ion-label style="font-family: Poppins;">Other Waste Materials</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
import { mapGetters } from 'vuex';
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonLabel,
  menuController,
  IonIcon,
} from "@ionic/vue";
import { 
  pieChartSharp,
  personCircleSharp,
  trashSharp, 
  } from 'ionicons/icons';
export default {
    name: 'MenuPage',
  components: {
    IonMenu,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    IonIcon,
  },
  setup(){
    return{
      pieChartSharp,
      personCircleSharp,
      trashSharp,
    }
  },
    methods:{
        menuNavigation(url){
            menuController.close("app-menu");
            this.$router.push(url);
        },
        handleClick(){
            localStorage.removeItem('token');
            this.$store.dispatch('user', null);
            this.$router.push('/home');
        }
    },
    computed: {
        ...mapGetters(['user'])
    }
};
</script>

<style scoped>

#container {
  text-align: center;
  --background: #6370ff;
}
#menu-content{
    --ion-background-color: #828cf8;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
}
ion-label{
    font-family: 'Poppins';
}
ion-item{
    --background: #828cf8;
    
}
ion-title{
  font-family: 'Poppins';
}
</style>