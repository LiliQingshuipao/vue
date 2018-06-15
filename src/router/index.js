import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: "/cube"
    },
    {
      path: '/cube',
      name: 'cube',
      redirect: "/cube/editor",
      component: resolve=>{
        require(["../cube/"],resolve)
      },
      children:[{
        path:'editor',
        component:resolve => {
          require(["../cube/pages/editor"], resolve)
        }
      },{
        path:'drag',
        component:resolve => {
          require(["../cube/pages/drag"], resolve)
        }
      }],
    }
  ]
})
