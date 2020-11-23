<template>
    <el-card>
        <span>个人信息设置</span><br><br>
        <el-form :model="form" ref="formRef" label-width="0px" style="width: 400px">
            <!--                 :rules="registerFormRules"-->
            <el-form-item  prop="email">
                <el-input v-model="form.email" autocomplete="off" size="small"
                           @keyup.enter.native="update"
                          placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item  prop="username">
                <el-input v-model="form.username" autocomplete="off" size="small"
                           @keyup.enter.native="update"
                          placeholder="用户名"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="resetForm" size="small">重置</el-button>
            <el-button type="primary" @click="update" size="small">更新个人信息</el-button>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "userInfo",
        data()
        {
            return{
                form:{
                    email:'',
                    username:''
                }
            }
        },
        methods: {
            resetForm() {
                this.$refs.formRef.resetFields()
            },
        }
    }
</script>

<style scoped>

</style>
