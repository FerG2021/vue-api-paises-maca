import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contador',
    name: 'Contador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contador.vue')
  },
  {
    path: '/paises',
    name: 'Paises',
    component: () => import(/* webpackChunkName: "about" */ '../views/Paises.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
