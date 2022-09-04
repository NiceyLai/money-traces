import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import New from '@/views/New.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: 'money',
    path: '/',
    component: Money
  },
  {
    name: 'money',
    path: '/money',
    component: Money
  },
  { name: 'new',
    path: '/new',
    component: New
  },
  {
    name: 'statistics',
    path: '/statistics',
    component:Statistics
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
 
]

const router = new VueRouter({
  routes
})

export default router
