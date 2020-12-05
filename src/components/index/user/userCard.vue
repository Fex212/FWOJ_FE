<template>
    <el-card class="box-card" style="width: 70%;align-self: center;margin:0 auto;margin-top: 50px;text-align: center" shadow="hover">
        <el-avatar :size="100" :src="src" style="position: absolute;transform: translate(-50%, -70%); border: 1px solid #eee;border-radius: 50%;"></el-avatar>
        <div style="height: 50px"></div>
        <span style="font-size: 18px;">{{username}}</span>
        <br>
        <span v-if="type==='admin'"  style="margin-top: 100px">
        <el-tag type="success" size="mini">管理员</el-tag>
        </span>
        <span v-else-if="type==='user'">
            <el-tag size="mini">普通用户</el-tag>
        </span>
        <span v-else>
            <el-tag size="mini" type="info">未定义用户</el-tag>
        </span>
        <br><br>
        <span>
            <span style="font-size: 12px">签名档</span>
        </span>
    </el-card>
</template>

<script>
    import global_ from '../../Global'
    export default {
        name: "userCard",
        created()
        {
            this.getUserCardInfo()
        },
        data()
        {
            return{
                src:global_.url+"/getAvatar?username="+this.$route.params.username,
                username:this.$route.params.username,
                type:'',
                site:'',
                sign:'',
                github:''
            }
        },
        methods: {
            async getUserCardInfo()
            {
                const {data:res} =  await this.$http.get('getUserCardInfo/'+this.username);
                if(res != null)
                {
                    this.type = res.type
                    this.site = res.site
                    this.sign = res.sign
                    this.github = res.github
                }
                else
                    this.$message.error("获取信息失败")
            }
        }
    }
</script>

<style scoped>
    span {
        font-family:"PingFang SC";
    }

</style>
