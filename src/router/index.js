import { createRouter, createWebHistory } from 'vue-router'
import Candidat from '../views/Candidat.vue'
import Agenda from '../views/Agenda.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Agenda
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/candidat',
    name: 'Candidat',
    component: Candidat
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
