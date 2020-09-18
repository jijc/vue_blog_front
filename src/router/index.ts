import Vue from 'vue'
import {LoadingBar} from 'view-design';
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

LoadingBar.config({
  color: '#2d8cf0',
  height: 4
});

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    },
  },
  // {
  //   path: '/detail',
  //   name: 'Detail',
  //   // component: Detail,
  //   meta:{
  //     title:'详情'
  //   },
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue'),
    meta:{
      title:'关于我'
    },
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  LoadingBar.start();
  console.log('[ to ]: ', to);
  console.log('[ from ]: ', from);
  next();
});

router.afterEach(route => {
  LoadingBar.finish();
});

export default router
