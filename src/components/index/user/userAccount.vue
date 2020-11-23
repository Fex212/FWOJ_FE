<template>
    <el-card>
        <span>更新密码</span><br><br>
        <el-form :model="form" ref="formRef" label-width="0px" style="width: 400px">
            <!--                 :rules="registerFormRules"-->
            <el-form-item  prop="oldpasswd">
                <el-input v-model="form.oldpasswd" autocomplete="off" size="small"
                          type="password" @keyup.enter.native="register"
                          placeholder="原密码"></el-input>
            </el-form-item>
            <el-form-item  prop="passwd">
                <el-input v-model="form.passwd" autocomplete="off" size="small"
                          type="password" @keyup.enter.native="register"
                          placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item  prop="repasswd">
                <el-input v-model="form.repasswd" autocomplete="off" size="small"
                          type="password" @keyup.enter.native="register"
                          placeholder="确认新密码"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="resetForm" size="small">重置</el-button>
            <el-button type="primary" @click="register" size="small">更新密码</el-button>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "userAccount",
        data()
        {
            return{
                form:
                    {
                        oldpasswd:'',
                        passwd:'',
                        repasswd:''
                    },
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
