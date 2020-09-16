<template>
  <el-container>
<!--    页头-->
    <el-header>
      <el-menu  class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1">FW OnlineJudge</el-menu-item>
        <el-menu-item index="1">公告</el-menu-item>
        <el-menu-item index="2">题目</el-menu-item>
        <el-menu-item index="3">竞赛</el-menu-item>
        <el-menu-item index="4">榜单</el-menu-item>
      </el-menu>
    </el-header>
    <!--    页头-->

    <!--    主体-->
    <el-main>

    </el-main>
    <!--    主体-->
    <!--    页脚-->
    <el-footer>
      <div class="footer-font">
        <br>
        Copyright © 2017-现在 Teleport. All rights reserved.
        <br>
        Powered by Flame Wielder OnlineJudge   Version: 20200709-f092d
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
