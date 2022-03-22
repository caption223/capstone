import { createStore } from 'vuex';
import axios from 'axios'
const store = createStore({
    state:{
           users:[],
           tbl_admin:[],
           smartbin:[],
           user: null,
    },
    getters:{
        allUser: (state) => state.users,
        allAdmin: (state) => state.tbl_admin,
        allBin: (state) => state.smartbin,
        allDay: (state) => state.smartbin,
        user: (state) => {
            return state.user;
        },
    },
    actions:{
        getDay({commit}){
            axios.get('http://localhost/capstone/src/backend/getDay.php')
            .then(response => {
                commit('SET_Day', response.data)
            })
        },
        getBin({commit}){
            axios.get('http://localhost/capstone/src/backend/getBin.php')
            .then(response => {
                commit('SET_Bin', response.data)
            })
        },
        getUser({commit}){
            axios.get('http://localhost/capstone/src/backend/getData.php')
            .then(response => {
                commit('SET_User', response.data)
            })
        },
        getAdmin({commit}){
           axios.get('http://localhost/capstone/src/backend/getAdmin.php')
           .then(response => {
               commit('SET_Admin', response.data)
           })
       },
       user(context, user){
           context.commit('user', user);
       },
    },
    mutations: {
        SET_Day(state, smartbin){
            state.smartbin = smartbin
        },
        SET_User(state, users){
            state.users = users
        },
        SET_Admin(state, tbl_admin){
           state.tbl_admin = tbl_admin
       },
        SET_Bin(state, smartbin){
            state.smartbin = smartbin
        },
        user(state, user){
            state.user = user;
        }
    }
});

export default store;