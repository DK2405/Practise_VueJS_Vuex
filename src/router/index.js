import Vue from 'vue'
import Router from 'vue-router'
import FirstRoute from '@/components/FirstRoute'
import FirstRouteChild from '@/components/FirstRouteChild'
import listfirst from '@/components/listfirst'
import listsecond from '@/components/listsecond'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute,
      children: [
        {
          path: 'child',
          name: 'firstroutechild',
          component: FirstRouteChild
        }
      ]
    },
    {
      path: '/listfirst',
      name: 'listfirst',
      component: listfirst
    },
    {
      path: '/listsecond',
      name: 'listsecond',
      component: listsecond
    }
  ],
  data () {
    return {
      products: [
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80}
      ]
    }
  }
})
