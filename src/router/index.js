import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Plastic from '@/components/Plastic.vue';
import Dashboard from '@/components/dashboard.vue';
import Metal from '@/components/Metal.vue';
import Others from '@/components/Others.vue';
import Profile from '@/components/profile.vue';
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/plastic',
    component: Plastic,
  },
  {
    path: '/metal',
    component: Metal,
  },
  {
    path: '/others',
    component: Others,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
