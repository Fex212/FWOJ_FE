<template>
  <div style="width: 95%;align-self: center;margin: 0 auto;">
    <div style="width: 100%; height: 30px"></div>
    <!--    卡片-->
    <el-card class="box-card" style="width: 100%;margin: 0 auto;align-self: center">
      <div slot="header" class="clearfix">
        <span style="text-align: left !important;">About / Q&A</span>
      </div>
      <div class="text item" style="width: 100%;">
        <!--    折叠面板-->
        <el-collapse  style="width: 100%;align-self: center;margin-top:15px">
          <el-collapse-item title="这是个什么东西？干啥用的？" name="1">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
              这是一个Online Judge系统（简称OJ），是一个在线的判题系统。用户可以在线提交程序程序源代码，系统对源代码进行编译和执行，并通过预先设计的测试数据来检验程序源代码的正确性。
            </p>
          </el-collapse-item>
          <el-collapse-item title="用了哪些技术？" name="2">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
              采用前后端分离架构，前端使用Vue.js，后端使用SpringBoot。考虑到稳定性，Judger使用了
              <a href="https://github.com/QingdaoU/JudgeServer" target="_blank" style="color: #409EFF;text-decoration:none">QDU</a>
              的judge server，有空重写自己的判题服务。
            </p>
          </el-collapse-item>
          <el-collapse-item title="项目地址有吗？" name="3">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              前端 : <a href="https://github.com/teleport-10032/FWOJ_BE" target="_blank" style="color: #409EFF;text-decoration:none">https://github.com/teleport-10032/FWOJ_BE</a>
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              后端 : <a href="https://github.com/teleport-10032/FWOJ_FE" target="_blank" style="color: #409EFF;text-decoration:none">https://github.com/teleport-10032/FWOJ_FE</a>
            </p>
          </el-collapse-item>
        </el-collapse>
        <!--    折叠面板-->
      </div>
      <br>

    </el-card>
    <!--    卡片-->
  </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>

</style>
