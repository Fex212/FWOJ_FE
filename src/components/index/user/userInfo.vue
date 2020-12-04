<template>
    <el-card shadow="hover">
        <el-row>
            <el-col>
                <span>个人信息设置</span><br><br>
                <el-form :model="form" ref="formRef" label-width="60px" style="width: 400px" >
                    <!--                 :rules="registerFormRules"-->
                    <el-form-item  prop="id" label="ID">
                        <el-input v-model="form.id" autocomplete="off" size="small"
                                  @keyup.enter.native="update" disabled
                                  placeholder="ID"></el-input>
                    </el-form-item>
                    <el-form-item  prop="email" label="邮箱">
                        <el-input v-model="form.email" autocomplete="off" size="small"
                                  @keyup.enter.native="update" disabled
                                  placeholder="邮箱"></el-input>
                    </el-form-item>
                    <el-form-item  prop="username" label="用户名">
                        <el-input v-model="form.username" autocomplete="off" size="small"
                                  @keyup.enter.native="update" disabled
                                  placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item  prop="type" label="类型">
                        <el-input v-model="form.type" autocomplete="off" size="small"
                                  @keyup.enter.native="update" disabled
                                  placeholder="类型"></el-input>
                    </el-form-item>
                </el-form>
                <div>
                    <el-button @click="resetForm" size="small">重置</el-button>
                    <el-button type="primary" @click="update" size="small">更新个人信息</el-button>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "userInfo",
        data()
        {
            return{
                form:{
                    id:'',
                    email:'',
                    username:'',
                    type:''
                }
            }
        },
        created()
        {
            this.getUserPersonInfo()
        },
        methods: {
            resetForm() {
                this.$refs.formRef.resetFields()
            },
            getUserPersonInfo()
            {
                let result =  this.$axios({
                    method: 'post',
                    url: 'getUserPersonInfo',
                    headers: { 'content-type': 'application/x-www-form-urlencoded'},
                    data: qs.stringify({
                        token: window.localStorage.getItem("token")
                    })
                });
                result.then(res=>{
                    if(res.data.error === "0")
                    {
                        this.form.id = res.data.id;
                        this.form.email = res.data.email;
                        this.form.username = res.data.username;
                        this.form.type = res.data.type;
                    }
                    else
                        this.$message.error('获取信息失败')
                })

            },
            update()
            {

            }
        }
    }
</script>

<style scoped>

</style>
