<template>
    <div>

      <!--    卡片-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>问题列表</span>
        </div>
        <div class="text item" style="width: 100%;">
          <el-table :data="tableData" style="width: 100%"
                    :cell-style="{'text-align':'center'}"
                    :header-cell-style="{'text-align':'center'}">
            <el-table-column prop="is_AC" label="#" min-width="5%"></el-table-column>
            <el-table-column prop="ID" label="ID" min-width="5%"></el-table-column>
            <el-table-column label="标题" min-width="30%">
              <template slot-scope="scope">
                <el-link :href="scope.row.url" class="buttonText" :underline="false"
                         style="font-size: 14px;font-weight: normal">
                  {{scope.row.title}}
                </el-link>
              </template>
            </el-table-column>
            <el-table-column prop="submitNum" label="提交" min-width="5%"></el-table-column>
            <el-table-column prop="ACRate" label="AC" min-width="5%"></el-table-column>
          </el-table>
        </div>
      </el-card>
      <!--    卡片-->

    </div>
</template>

<script>
    export default {
        name: "problemList"
        ,
        data() {
            return {
                tableData: [
                    {
                        ID : "1",
                        title : "敌兵布阵敌兵布阵敌兵布阵敌兵布阵",
                        submitNum: "1458",
                        ACRate: "14.4%",
                        url: "/#/problem"
                    },
                    {
                        ID : "2",
                        title : "炮兵布阵",
                        submitNum: "1158",
                        ACRate: "5.1%",
                        url: "/#/problem"
                    },
                    {
                        ID : "3",
                        title : "八皇后",
                        submitNum: "41",
                        ACRate: "1.2%",
                        url: "/#/problem"
                    },
                ]
            }
        }
    }
</script>

<style less scoped>

  .el-card
  {
    margin-top: 30px;
  }

</style>
