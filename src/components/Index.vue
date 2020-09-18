<template>
  <el-container>
<!--    页头-->
    <el-header>
      <el-menu  class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/announcementList" @click="change">FW OnlineJudge</el-menu-item>
        <el-menu-item index="/problemList" @click="change">题目</el-menu-item>
        <el-menu-item index="/contestList" @click="change">竞赛</el-menu-item>
        <el-menu-item index="/statusList" @click="change">状态</el-menu-item>
        <el-menu-item index="/rank" @click="change">榜单</el-menu-item>
        <el-menu-item index="/about" @click="change">关于</el-menu-item>
      </el-menu>
    </el-header>
    <!--    页头-->

    <!--    主体-->
    <el-main>

<!--        <transition name="el-zoom-in-top">-->
<!--          <div v-show="show" class="transition-box">-->
<!--            <router-view></router-view>-->
<!--          </div>-->
<!--        </transition>-->
      <transition mode="out-in">
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
                direction: "slide-right"
            }
        },
        methods: {
            change()
            {
                this.show = false;
                this.show = true;
            }

        }
        ,
        watch: {
            $route(to, from) {
                const toDepth = to.path.split("/").length;
                const fromDepth = from.path.split("/").length;
                if (to.path == "/") {
                    this.direction = "slide-right";
                } else if (from.path == "/") {
                    this.direction = "slide-left";
                }else{
                    this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
                }
            }
        }
    }
</script>

<style less scoped>
  .footer-font
  {
    text-align: center;
    font-size: 12px;
    color: #606266;
  }

  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }

</style>
