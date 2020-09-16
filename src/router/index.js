//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Index from "../components/Index";
import announcement from "../components/announcement/announcement";
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      path: '/index', redirect: '/'
    },
    {
      path: '/', component: Index,
      children: [
        {path:'/announcement',component:announcement},
      ],
    },
    // {
    //   path:'/announcement',component:announcement
    // }

  ]

})

