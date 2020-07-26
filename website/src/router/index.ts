import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import LFC from '../views/projects/LFC.vue'



Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children:[
      {name:'home',path:'/',component:Home},
      {name:"国际免午",path:"/projects/lfc",component:LFC}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
