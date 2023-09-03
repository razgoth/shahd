import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login2.vue'
import Administrator from '../views/Administrator.vue'
import Giver from '../views/Giver.vue'
import GiverDetails from '../views/GiverDetails.vue'
import Reciever from '../views/Reciever.vue'
import Home from '../views/HomePage.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/administrator',
    name: 'Administrator',
    component: Administrator,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/administrator/:name',
    name: 'Giver',
    component: Giver,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/administrator/:name/details',
    name: 'Details',
    component: GiverDetails,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/administrator/:name',
    name: 'Receiver',
    component: Reciever,
    meta: {
      requiresAuth: true
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if   (to.matched.some(record => record.meta.requiresAuth))
      {
      // Check if user is not logged in
      if (!store.state.isloggedIn) {
          // Redirect to login page
          next({ path: '/login' })
          console.log('redirected')
      } else {
          next()  // Go to the route
          console.log('logged in')
      }
  } else {
      next()  // Otherwise just go to the route
      console.log('just go in')
  }
})

export default router
