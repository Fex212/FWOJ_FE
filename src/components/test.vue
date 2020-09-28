<template>
  <div>
    <el-button @click="start1()">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>
    </div>
  </div>
</template>
<script>
    export default {
        name: "test",
        data() {
            return {
                show2: true,
                annList:
                    {
                        page:1,
                        pre:5
                    }
            }
        },
        created()
        {
            this.getAnnList()
        },
        methods: {
            start1()
            {
                this.show2 = false;
            },
            async getAnnList()
            {
                const {data:res} =  await this.$http.get('getAnnList',{params:this.annList})
                console.log(res);
            }

        }
    }

</script>

<style less scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
