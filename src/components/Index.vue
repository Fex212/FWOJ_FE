<template>
  <el-container>
<!--    页头-->
    <el-header>
      <el-menu  class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/announcementList">FW OnlineJudge</el-menu-item>
        <el-menu-item index="/problemList" >题目</el-menu-item>
        <el-menu-item index="/contestList">竞赛</el-menu-item>
        <el-menu-item index="/statusList">状态</el-menu-item>
        <el-menu-item index="/rank">榜单</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
    </el-header>
    <!--    页头-->

    <!--    主体-->
    <el-main>
      <router-view></router-view>
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
