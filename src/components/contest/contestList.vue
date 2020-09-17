<template>
  <div>

    <!--    卡片-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>竞赛列表</span>
      </div>
      <div class="text item" style="width: 100%;">
        <el-table :data="tableData" style="width: 100%"
                  :cell-style="{'text-align':'center'}"
                  :header-cell-style="{'text-align':'center'}">
          <el-table-column label="标题" min-width="10%">
            <template slot-scope="scope">
              <el-link :href="scope.row.url" class="buttonText" :underline="false"
                       style="font-size: 14px;font-weight: normal">
                {{scope.row.title}}
              </el-link>
            </template>
          </el-table-column>

          <el-table-column prop="startTime" label="开始时间" min-width="10%"></el-table-column>
          <el-table-column prop="endTime" label="结束时间" min-width="10%"></el-table-column>
          <el-table-column prop="status" label="状态" min-width="5%"></el-table-column>
        </el-table>
      </div>
    </el-card>
    <!--    卡片-->

  </div>
</template>

<script>
    export default {
        name: "contestList",
        data() {
            return {
                tableData: [
                    {
                        title: "2020新生训练赛1",
                        startTime: "2020-10-15 14:00",
                        endTime: "2020-10-15 16:00",
                        status: "未开始",
                        url: "/#/contest"
                    },
                    {
                        title: "2020新生训练赛2",
                        startTime: "2020-10-16 14:00",
                        endTime: "2020-10-16 16:00",
                        status: "未开始",
                        url: "/#/contest"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
