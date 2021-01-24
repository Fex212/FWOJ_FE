<template>
  <div>
      <el-button
          size="mini"
          type="primary"
          class="button"
          @click="goFile">
        <i class="el-icon-upload2"></i>上传
      </el-button>
      <input
          type="file"
          style="display: none;"
          id="file"
          ref="files"
          @change="upload"
      />
  </div>
</template>

<script>
    import global_ from './Global'
    export default {
        name: 'test',
        data () {
            return {
                isLogin:global_.isLogin
            }
        }
        ,
        methods: {
              goFile() {
                this.$refs.files.click();
              },
            }

    }
</script>
