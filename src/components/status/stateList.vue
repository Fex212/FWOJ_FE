<template>
    <div>
      <!--    卡片-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>状态</span>
        </div>
        <div class="text item" style="width: 100%;">
          <el-table :data="stateList" style="width: 100%"
                    :cell-style="{'text-align':'center'}"
                    :header-cell-style="{'text-align':'center'}">
            <el-table-column prop="date" label="时间" min-width="10%"></el-table-column>
            <el-table-column label="id" min-width="5%">
              <template slot-scope="scope">
                <el-link href="/#/status" class="buttonText" :underline="false"
                         style="font-size: 14px;font-weight: normal">
                  {{scope.row.id}}
                </el-link>
              </template>
            </el-table-column>
            <el-table-column prop="state" label="状态" min-width="5%"></el-table-column>
            <el-table-column prop="problemId" label="问题" min-width="5%"></el-table-column>
            <el-table-column prop="timeCost" label="用时" min-width="5%"></el-table-column>
            <el-table-column prop="memoryCost" label="内存" min-width="5%"></el-table-column>
            <el-table-column prop="language" label="语言" min-width="5%"></el-table-column>
            <el-table-column prop="authorId" label="作者" min-width="10%"></el-table-column>
          </el-table>
        </div>
      </el-card>
      <!--    卡片-->
    </div>
</template>

<script>
    export default {
        name: "stateList",
        data() {
            return {
                queryInfo:
                        {
                          page:1,
                          pre:5
                        }
                ,
                stateList: [],
                total:0,
                loading: true,

            }
        }
        ,
      created()
      {
        this.getContestList();
      },
      methods: {
        async getContestList()
        {
          this.loading = true;
          const {data:res} =  await this.$http.get('getStateList',{params:this.queryInfo});
          this.loading = false;
          if (res.status !== 200) {
            return this.$message.error('获取题目列表失败！')
          }
          this.stateList = res.data;
          console.log(this.stateList);
          this.total = res.total;
        },
        jumpDetail(id)
        {
          this.$router.push({path:'/s',query:{id:id}})
        },
        //监听pagesize改变
        handleSizeChange(newsize)
        {
          console.log(newsize);
          this.queryInfo.pre = newsize;
          this.getContestList()
        },
        //监听页码的改变
        handleCurrentChange(newPage)
        {
          console.log(newPage);
          this.queryInfo.page = newPage;
          this.getContestList()
        },
      }
    }
</script>

<style scoped>

</style>
