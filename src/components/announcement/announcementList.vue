<template>
  <div style="width: 100%;">

<!--    卡片-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>公告栏</span>
      </div>
      <div class="text item" style="width: 100%;">
        <el-table :show-header="false" :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="时间" min-width="30%"></el-table-column>
          <el-table-column label="标题" min-width="50%">
            <template slot-scope="scope">
              <el-link :href="scope.row.url" class="buttonText" :underline="false"
              style="font-size: 14px;font-weight: normal"
              >
                {{scope.row.title}}
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="creater" label="创建者" min-width="10%"></el-table-column>
        </el-table>
      </div>
    </el-card>
    <!--    卡片-->

  </div>
</template>

<script>
    export default {
        name: "announcementList"
        ,
        data() {
            return {
                tableData: [
                    {
                      date: '2018-05-02',
                      title: '如何将默认语言改为中文',
                      creater: 'root',
                      url: "/#/announcement"
                    },
                    {
                        date: '2020-09-12',
                        title: '山东建筑大学第八届ICPC校赛通知',
                        creater: 'root',
                        url:"/#/announcement"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.el-card
{
  margin-top: 30px;
}
</style>
