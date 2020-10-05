<template>
  <div style="width: 95%;align-self: center;margin: 0 auto;">
    <el-button type="primary" @click="back()" size="small" round>返回</el-button>


    <el-card class="box-card" style="width: 100%;margin-top: 10px">
      <h3>{{problemList.title}}</h3>

<!--      描述-->
      <br>
      <span style="color: #409EFF;">题目描述</span>
      <div style="padding-left: 25px">
        <p>
          {{problemList.des}}
        </p>
      </div>

<!--      输入描述-->
      <br>
      <span style="color: #409EFF;">输入</span>
      <div style="padding-left: 25px">
        <p>
          {{problemList.input}}
        </p>
      </div>

      <!--      输出描述-->
      <span style="color: #409EFF;">输出</span>
      <div style="padding-left: 25px">
        <p>
          {{problemList.output}}
        </p>
      </div>

      <!--      样例-->
      <br>
      <div style="display: flex;flex-direction: row;">
        <div style="flex: 10">
          <span style="color: #409EFF;">输入样例</span>
          <div style="border-radius: 0;margin-top: 10px;padding-left:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);line-height: 20px">
            <p style="padding-top: 10px;padding-bottom: 10px">
              {{problemList.inputExample}}
            </p>
          </div>
        </div>
        <div style="flex:2"></div>

        <div style="flex: 10">
          <span style="color: #409EFF;">输出样例</span>
          <div style="border-radius: 0;margin-top: 10px;padding-left:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);line-height: 20px">
            <p style="padding-top: 10px;padding-bottom: 10px">
              {{problemList.outputExample}}
            </p>
          </div>
        </div>
        <div style="flex:2"></div>
      </div>

      <!--      hint-->
      <span style="color: #409EFF;">提示</span>
      <div style="border-radius: 0;margin-top: 10px;padding-left:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);line-height: 20px">
        <p style="padding-top: 10px;padding-bottom: 10px">
          {{problemList.hint}}
        </p>
      </div>

    </el-card>


    <el-card class="box-card" style="width: 100%;margin-top: 10px">

    </el-card>

  </div>
</template>

<script>
    export default {
        name: "problem"
        ,
        data()
        {
            return {
                problemList: []
            }
        }
        ,
        created() {
            this.getDetail();
        }
        ,
        methods: {
            async getDetail()
            {
                const {data:res} =  await this.$http.get('getProblemDetail',{params:{id:this.$route.query.id}})
                console.log(res);
                this.problemList = res.data;
            }
            ,
            back()
            {
                this.$router.push('/problemList');
            }

        }
    }
</script>

<style scoped>

</style>
