import Vue from 'vue'
import Router from 'vue-router'

import Classify from'../pages/Classify/Classify'
import Discern from'../pages/Discern/Discern'
import Msite from'../pages/Msite/Msite'
import Order from'../pages/Order/Order'
import Profile from'../pages/Profile/Profile'

Vue.use(Router);
export default new Router({
routes:[

    {
      path:'/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/discern',
      component: Discern,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/profile',
      component: Profile,
    },
  ]
})
