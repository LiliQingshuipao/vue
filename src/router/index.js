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
      redirect: "/cube/main",
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
      },{
        path:'tooltip',
        component:resolve => {
          require(["../cube/pages/tooltip"], resolve)
        }
      },{
        path: 'project',
        component: resolve => {
          require(['../cube/pages/projects/index'], resolve)
        },
        children:[{
          path: 'details',
          component: resolve => {
            require(['../cube/pages/projects/details/index'], resolve)
          },
          children:[{
            path: 'worksheet',
            component: resolve => {
              require(['../cube/pages/projects/details/worksheet/index'], resolve)
            },
            children:[{
              path: 'list',
              component: resolve => {
                require(['../cube/pages/projects/details/worksheet/list/index'], resolve)
              }
            }]
          }]
        }]
      },{
        path: 'main',
        component:resolve => {
          require(['../cube/pages/main/MainFramework'], resolve)
        },
        children:[{
          path:'list',
          name: 'MainList',
          component: resolve => {
            require(['../cube/pages/main/list/MainList'],resolve)
          },
        },{
          path: 'details',
          name: 'MainDetails',
          component: resolve => {
            require(['../cube/pages/main/details/MainDetails'],resolve)
          }
        }]
      }],
    }
  ]
})
