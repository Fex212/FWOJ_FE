<template>
  <div>
    <!--    卡片-->
    <el-card class="box-card" style="width: 95%;align-self: center;margin: 0 auto;">
<!--      柱形图-->
      <div class="text item">
        <div id="main" style="width: 60%;height: 400px;margin: 0 auto;align-self: center"></div>
      </div>
<!--      柱形图-->

<!--      表格-->
      <el-table :data="tableData" style="width: 100%"
      :cell-style="{'text-align':'center'}"
      :header-cell-style="{'text-align':'center'}">
      <el-table-column prop="rank" label="Rank" min-width="5%"></el-table-column>
      <el-table-column label="User" min-width="5%">
        <template slot-scope="scope">
          <el-link :href="scope.row.url" class="buttonText" :underline="false"
                   style="font-size: 14px;font-weight: normal">
            {{scope.row.user}}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="ac"  label="AC" min-width="5%"></el-table-column>
      <el-table-column prop="total" label="Total" min-width="5%"></el-table-column>
      <el-table-column prop="ACRate" label="Rating" min-width="5%"></el-table-column>
      </el-table>
      <!--      表格-->

    </el-card>
    <!--    卡片-->
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "rank",
        data() {
            return {
                charts: '',
                opinionData: ["3", "2", "4", "4", "5"],
                tableData: [
                    {
                        rank:"1",
                        user:"Um_nik",
                        ac:"3459",
                        total:"3459",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"2",
                        user:"tourist",
                        ac:"3438",
                        total:"3438",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"3",
                        user:"maroonrk",
                        ac:"3359",
                        total:"3359",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"4",
                        user:"ecnerwala",
                        ac:"3347",
                        total:"3347",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"5",
                        user:"Benq",
                        ac:"3317",
                        total:"3317",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"6",
                        user:"ksun48",
                        ac:"3309",
                        total:"3309",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"7",
                        user:"ZHAKWF",
                        ac:"3300",
                        total:"3300",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"6",
                        user:"SX",
                        ac:"3200",
                        total:"3200",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"7",
                        user:"PG",
                        ac:"3100",
                        total:"3100",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                    {
                        rank:"8",
                        user:"Horse",
                        ac:"2989",
                        total:"2989",
                        ACRate:"100%",
                        url:"/#/user"
                    },
                ]
            }
        },
        methods: {
            drawLine(id)
            {
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text:'ACM Rank',
                        subtext:'',
                        x:'center',
                        y:'top',
                        textAlign:'left'
                    },
                    tooltip: {},
                    legend: {
                        data:['AC']
                    },
                    xAxis: {
                        data: ["Um_nik","tourist","maroonrk","ecnerwala","Benq","ksun48",
                            "ZHAKWF","SX","PG","Horse"]
                    },
                    yAxis: {},
                    series: [{
                        name: 'Rating',
                        type: 'bar',
                        data: [3459, 3438, 3359, 3347, 3317, 3309
                              ,3300,3200,3100,2989]
                    }]
                };

                // 使用刚指定的配置项和数据显示图表
                myChart.setOption(option);
                setTimeout(function (){
                    window.onresize = function () {
                        myChart.resize();
                    }
                },200)
            }
        },
        //调用
        mounted() {
            this.$nextTick(function() {
                this.drawLine('main')
            })
        }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  .el-card
  {
    margin-top: 30px;
  }
</style>
