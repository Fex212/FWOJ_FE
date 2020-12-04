<template>
    <el-card class="box-card" style="width: 70%;align-self: center;margin:0 auto;margin-top: 50px;text-align: center">
        <el-avatar :size="110" :src="src" style="position: absolute;transform: translate(-50%, -70%); border: 1px solid #eee;border-radius: 50%;"></el-avatar>
        <div style="height: 200px"></div>
    </el-card>
</template>

<script>
    import global_ from '../../Global'
    export default {
        name: "userCard",
        created()
        {
            console.log(this.$route.query.username)
        },
        data()
        {
            return{
                src:global_.url+"/getAvatar?username="+this.$route.query.username
            }
        }
    }
</script>

<style scoped>

</style>
