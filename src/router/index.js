import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/FirstPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/hot-drinks',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    children: [
      {
        path: '/hot-drinks',
        name: 'hot',
        component: () => import(/* webpackChunkName: "hot" */ '../views/HotDrink.vue')
      },
      {
        path: '/cold-drinks',
        name: 'cold',
        component: () => import(/* webpackChunkName: "cold" */ '../views/ColdDrink.vue')
      },
      {
        path: '/alcohol-drinks',
        name: 'alco',
        component: () => import(/* webpackChunkName: "alco" */ '../views/AlcoholDrink.vue')
      },
      {
        path: '/cocktails',
        name: 'cocktails',
        component: () => import(/* webpackChunkName: "alco" */ '../views/Cocktails.vue')
      },
      {
        path: '/hookah',
        name: 'hookah',
        component: () => import(/* webpackChunkName: "hookah" */ '../views/Hookah.vue')
      },
      {
        path: '/vip-rooms',
        name: 'vipRooms',
        component: () => import(/* webpackChunkName: "hookah" */ '../views/VipRooms.vue')
      }
    ]
  },
  {
    path: '/preloader',
    name: 'Preloading',
    component: () => import('../components/Preloader.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
