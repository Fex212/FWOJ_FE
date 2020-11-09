<template>
    <div>
        <el-card>
            <el-tag>SystemInfo Board</el-tag>
            <br><br>
            <el-tag>用户数量:</el-tag> <el-tag type="success">{{userNum}}</el-tag>
            <br><br>
            <el-tag>题目数量:</el-tag> <el-tag type="success">{{problemNum}}</el-tag>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "systemInfo",
        data()
        {
            return{
                userNum:-1,
                problemNum:-1,
            }
        },
        created() {
            this.getSystemInfo()
        },
        methods:{
            async getSystemInfo()
            {
                const {data:res} =  await this.$http.get('getSystemInfo',{params:{token:window.localStorage.getItem("token")}});
                this.userNum = res.userNum;
                this.problemNum = res.problemNum;
            }
        }
    }
</script>

<style scoped>

</style>
