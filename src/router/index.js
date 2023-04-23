import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import allcategories from '../components/allcategories.vue'
import homeVue from '../components/homeaction.vue'
import addProduct from '../components/addproduct.vue'
import favourite from '../components/favourite.vue'
import login from '../components/login.vue'
// import favourite from '../components/favourite.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeVue
  },
  {
    path: '/allcategories',
    name: 'allcategories',
    component:allcategories
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component:addProduct
  },
  {
    path: '/favourite',
    name:'favourite',
    component:favourite
  },
  {
    path: '/login',
    name:'login',
    component:login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
