<template>
  <div style="width: 95%;align-self: center;margin: 0 auto;">
    <el-button type="primary" @click="back()" size="small" round>返回状态列表</el-button>

    <div style="margin: 0 auto;width:95%;align-self: center">
      <el-card class="box-card" :style="bgColor">
        <div style="padding-left: 10px;">
          <div>
            <i :class="icon" :style="color"></i>
            {{ title }}
          </div>
          <div style="padding-top: 10px;font-size:14px;">
            时间:{{ state.timeCost }}ms &nbsp;
            内存:{{ state.memoryCost }}MB &nbsp;
            作者:{{ state.authorName }} &nbsp;
            语言:{{ state.language }} &nbsp;
          </div>
          <p style="font-size: 12px">
            {{state.compileInfo}}
          </p>
        </div>
      </el-card>
      <br>
    </div>

    <!--       代码-->
    <div style="margin: 0 auto;width:95%;align-self: center">
      <el-card>
        <span :style="color">Code</span>
        <div style="display: flex;">
          <div style="flex: 1"></div>
          <div style="flex: 30;white-space: pre-line;font-size: 14px">
            {{ state.code }}
          </div>
        </div>
      </el-card>
    </div>

  </div>

</template>

<script>
export default {
  name: "state",
  data() {
    return {
      state: [],
      color:'',
      bgColor:'',
      icon:'',
      title:''
    }
  }
  ,
  created() {
    this.getDetail()
  }
  ,
  methods: {
    async getDetail() {
      const {data: res} = await this.$http.get('getStateDetail', {params: {id: this.$route.query.id}})
      this.state = res.data;

      let att = this.state.state
      //根据state定制
      if(att === 'ac')
      {
        this.color='color:#67C23B'
        this.bgColor='background:#F0F9EB;margin-top:10px'
        this.icon = 'el-icon-success'
      }
      else if(att === 'wa' || att === 're' || att === 'tle')
      {
        this.color='color:#F56C6C'
        this.bgColor='background:#FDE2E2;margin-top:10px'
        this.icon = 'el-icon-error'
      }
      else if(att === 'ce'  || att === 'pd' || att === 'se')
      {
        this.color='color:#E6A23C'
        this.bgColor='background:#FDF6EC;margin-top:10px'
        if(att === 'pd')
          this.icon = 'el-icon-loading'
        else
          this.icon = 'el-icon-error'
      }

      if(att === 'ac')
        this.title = '答案正确'
      else if(att === 'wa')
        this.title = '答案错误'
      else if(att === 'tle')
        this.title = '时间超限'
      else if(att === 're')
        this.title = '运行错误'
      else if(att === 'pd')
        this.title = '等待评测'
      else if(att === 'ce')
        this.title = '编译错误'
      else if(att === 'se')
        this.title = '系统错误'

    }
    ,
    back() {
      this.$router.push({path: '/stateList', query: {page: this.$route.query.page}})
    }
  }
}
</script>

<style scoped>

</style>
