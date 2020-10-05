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
import test2 from "../components/test2";
import userIndex from "../components/user/userIndex";
import about from "../components/about/about";
import statusList from "../components/status/statusList";
import status from "../components/status/status";
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {path:"/" , redirect: "/announcementList"},
    {path:"/test",component:test},
    {path:"/test2",component:test2},
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
        {path:'/statusList',component:statusList},
        {path:'/status',component:status},
      ],
    },
  ]

})

