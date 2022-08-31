import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import New from '@/views/New.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'money',
    component: Money
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/new',
    name: 'new',
    component: New
  },
  {
    path: '/statistics',
    name: 'statistics',
    component:Statistics
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
 
]

const router = new VueRouter({
  routes
})

export default router
