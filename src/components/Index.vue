<template>
  <el-container>
<!--    页头-->
    <el-header>
<!--      default-active="/announcementList"-->
      <el-menu  class="el-menu-demo" mode="horizontal"  :default-active="activePath" router>
        <el-menu-item index="/announcementList" @click="saveNavState('/announcementList')">FW OnlineJudge</el-menu-item>
        <el-menu-item index="/problemList" @click="saveNavState('/problemList')">题目</el-menu-item>
        <el-menu-item index="/contestList" @click="saveNavState('/contestList')">竞赛</el-menu-item>
        <el-menu-item index="/statusList" @click="saveNavState('/statusList')">状态</el-menu-item>
        <el-menu-item index="/rank" @click="saveNavState('/rank')">榜单 </el-menu-item>
        <el-menu-item index="/about" @click="saveNavState('/about')">关于</el-menu-item>
      </el-menu>
    </el-header>
    <!--    页头-->
    <!--    主体-->
    <el-main>


      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>

    </el-main>
    <!--    主体-->
    <!--    页脚-->
    <el-footer>
      <div class="footer-font">
        <br>
        Copyright © 2020-现在 Teleport. All rights reserved.
        <br>
        Powered by <el-link type="primary" href="https://github.com/teleport-10032/FWOJ_FE"
      style="font-size: 12px;font-weight:normal;" target="_blank" :underline="false">
        Flame Wielder OnlineJudge
      </el-link>
         Version: 20200917
      </div>
    </el-footer>
    <!--    页脚-->
  </el-container>
</template>

<script>
    export default {
        name: "Index"
        ,
        data() {
            return {
                show: true,
                direction: "slide-right",
                isRouterAlive: true,
                activePath: ''
            }
        },
        created()
        {
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            saveNavState(activePath)
            {
                window.sessionStorage.setItem('activePath',activePath);
                this.activePath = activePath;
            }
        }
    }
</script>

<style scoped>
  .footer-font
  {
    text-align: center;
    font-size: 12px;
    color: #606266;
  }


  .fade-transform-leave-active,.fade-transform-enter-active {
    transition: all .2s;
  }
  .fade-transform-enter {
    opacity: 0;
    transform: translateZ(-30px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateZ(30px);
  }
</style>
