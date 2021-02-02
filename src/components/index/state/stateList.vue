<template>
    <div>
      <!--    卡片-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>评测状态</span>
        </div>
        <div class="text item" style="width: 100%;">
          <el-table :data="stateList" style="width: 100%;font-size: 12px" stripe
                    :cell-style="{'text-align':'center'}"
                    :header-cell-style="{'text-align':'center'}">
            <el-table-column prop="date" label="时间" min-width="10%"></el-table-column>

            <el-table-column label="id" min-width="5%">
              <template slot-scope="scope">
                <div @click="jumpDetail(scope.row.id)">
                  <el-link class="buttonText" :underline="false" @click="jumpDetail(scope.row.id)"
                           style="font-size: 12px;font-weight: normal;color: #409EFF">
                    {{scope.row.id}}
                  </el-link>
                </div>
              </template>
            </el-table-column>

            <el-table-column  style="background: #F0F9EB;" prop="state" label="状态" min-width="7%">
              <template slot-scope= "scope">
                <div v-if="scope.row.state==='ac'">
                  <el-tag type="success" effect="light" size="mini">
                    答案正确
                  </el-tag>
                </div>
                <div v-else-if="scope.row.state==='wa'">
                  <el-tag type="danger" effect="light" size="mini">
                    答案错误
                  </el-tag>
                </div>
                <div v-else-if="scope.row.state==='tle'">
                  <el-tag type="danger" effect="light" size="mini">
                    时间超限
                  </el-tag>
                </div>
                <div v-else-if="scope.row.state==='re'">
                  <el-tag type="danger" effect="light" size="mini">
                    运行错误
                  </el-tag>
                </div>
                <div v-else-if="scope.row.state==='ce'">
                  <el-tag type="warning" effect="light" size="mini">
                    编译错误
                  </el-tag>
                </div>
                <div v-else-if="scope.row.state==='pd'">
                  <el-tag type="warning" effect="light" size="mini">
                    等待评测
                  </el-tag>
                </div>
                <div v-else-if="scope.row.state==='se'">
                  <el-tag type="warning" effect="light" size="mini">
                    系统错误
                  </el-tag>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="问题" min-width="5%">
              <template slot-scope="scope">
                <div>
                  <el-link class="buttonText" :underline="false" @click="jumpProblemDetail(scope.row.problemId)"
                           style="font-size: 12px;font-weight: normal;color: #409EFF">
                    {{scope.row.problemId}}
                  </el-link>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="用时" min-width="5%">
              <template slot-scope="scope">
                <span style="font-size: 12px">
                  {{scope.row.timeCost}}ms
                </span>
              </template>
            </el-table-column>

            <el-table-column label="内存" min-width="5%">
              <template slot-scope="scope">
                {{scope.row.memoryCost}}MB
              </template>
            </el-table-column>

            <el-table-column prop="language" label="语言" min-width="5%"></el-table-column>


            <el-table-column label="作者" min-width="5%">
              <template slot-scope="scope">
                <div>
                  <el-link class="buttonText" :underline="false" @click="jumpUserDetail(scope.row.authorId)"
                           style="font-size: 12px;font-weight: normal;color: #409EFF">
                    {{scope.row.authorName}}
                  </el-link>
                </div>
              </template>
            </el-table-column>

          </el-table>
        </div>

        <br>
        <!--      分页区域-->
        <div class="block" style="text-align: center">
          <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="queryInfo.page"
                  :page-sizes="[5,10,20]"
                  :page-size="queryInfo.pre"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
          </el-pagination>
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
                          pre:10
                        }
                ,
                stateList: [],
                total:0,
                loading: true
            }
        }
        ,
      created()
      {
        if(this.$route.query.page != null)
          this.queryInfo.page = this.$route.query.page - 0;
        this.getContestList();
      },
      methods: {
        async getContestList()
        {
          this.loading = true;
          const {data:res} =  await this.$http.get('getStateList',{params:this.queryInfo});
          this.loading = false;
          if (res.error !== "0") {
            return this.$message.error('获取状态列表失败！')
          }
          this.stateList = res.data;
          // console.log(this.stateList);
          this.total = res.total;
        },
        jumpDetail(id)
        {
          this.$router.push({path:'/state',query:{id:id,page:this.queryInfo.page}})
        },
        jumpProblemDetail(id)
        {
          this.$router.push({path:'/problem',query:{id:id,page:this.queryInfo.page}})
        },
        jumpUserDetail(id)
        {
          this.$router.push({path:'/userCard/'+id})
        },
        //监听pagesize改变
        handleSizeChange(newsize)
        {
          this.queryInfo.pre = newsize;
          this.getContestList()
        },
        //监听页码的改变
        handleCurrentChange(newPage)
        {
          this.queryInfo.page = newPage;
          this.getContestList()
        },
      }
    }
</script>

<style scoped>

</style>
