<template>
    <div>
      <!--    卡片-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>状态</span>
        </div>
        <div class="text item" style="width: 100%;">
          <el-table :data="tableData" style="width: 100%"
                    :cell-style="{'text-align':'center'}"
                    :header-cell-style="{'text-align':'center'}">
            <el-table-column prop="time" label="时间" min-width="10%"></el-table-column>
            <el-table-column label="ID" min-width="5%">
              <template slot-scope="scope">
                <el-link href="/#/status" class="buttonText" :underline="false"
                         style="font-size: 14px;font-weight: normal">
                  {{scope.row.ID}}
                </el-link>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="5%"></el-table-column>
            <el-table-column prop="problem" label="问题" min-width="5%"></el-table-column>
            <el-table-column prop="timeCost" label="用时" min-width="5%"></el-table-column>
            <el-table-column prop="spaceCost" label="内存" min-width="5%"></el-table-column>
            <el-table-column prop="language" label="语言" min-width="5%"></el-table-column>
            <el-table-column prop="author" label="作者" min-width="10%"></el-table-column>

          </el-table>
        </div>
      </el-card>
      <!--    卡片-->
    </div>
</template>

<script>
    export default {
        name: "statusList",
        data() {
            return {
                tableData: [
                    {
                        time:"2020-9-15 24:56:12",
                        ID: "1001",
                        status:"accept",
                        problem:"1001",
                        timeCost:"9",
                        spaceCost:"45",
                        language:"C",
                        author:"ZHAKWF"
                    },
                    {
                        time:"2020-9-15 24:56:14",
                        ID: "1002",
                        status:"accept",
                        problem:"1002",
                        timeCost:"9",
                        spaceCost:"45",
                        language:"C",
                        author:"ZHAKWF"
                    },
                    {
                        time:"2020-9-15 24:57:02",
                        ID: "1003",
                        status:"accept",
                        problem:"1001",
                        timeCost:"9",
                        spaceCost:"45",
                        language:"C",
                        author:"PG"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
