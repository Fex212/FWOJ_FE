//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Index from "../components/Index";
import announcementList from "../components/announcement/announcementList";
import announcement from "../components/announcement/announcement";
import problemList from "../components/problem/problemList";
import problem from "../components/problem/problem";
import contestList from "../components/contest/contestList";
import contest from "../components/contest/contest";
import rank from "../components/rank/rank";
import test from "../components/test";
import userIndex from "../components/user/userIndex";
import about from "../components/about/about";
import stateList from "../components/status/stateList";
import state from "../components/status/state";
//使用
Vue.use(VueRouter);
//导出

//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
  routes: [
    {path:"/" , redirect: "/announcementList"},
    {path:"/test",component:test},
    {
      path: '/', component: Index,
      children: [
        {path:"/announcement", component: announcement},
        {path:'/announcementList',component:announcementList},
        {path:'/problemList',component:problemList},
        {path:'/problem',component:problem},
        {path:'/contestList',component:contestList},
        {path:'/contest',component:contest},
        {path:'/rank',component:rank},
        {path:'/user',component:userIndex},
        {path:'/about',component:about},
        {path:'/stateList',component:stateList},
        {path:'/state',component:state},
      ],
    },
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  // if (to.path === '/login') return next()
  // 获取token
  // const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/login')
  // next()
// })

