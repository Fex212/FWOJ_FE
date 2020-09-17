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
import rank from "../components/rank/rank";
import test from "../components/test";
//使用
Vue.use(VueRouter);
//导出
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
        {path:'/rank',component:rank},
      ],
    },
  ]

})

