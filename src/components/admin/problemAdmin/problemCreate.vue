<template>
    <div>
        <!-- 卡片视图区域 -->
        <el-card>
            <el-row type="flex">
                <el-col :span="2">
                    <el-button type="primary" @click="back()" size="small" round>返回</el-button>
                </el-col>
                <el-col :span="18"></el-col>
                <el-col :span="4" align="right">
                    <el-tag>创建题目</el-tag>
                </el-col>
            </el-row>
            <el-divider></el-divider>

<!--            表单-->
            <el-form ref="form" :model="form" label-width="80px">

                <el-row>
                    <el-col :span="8">
                        <el-form-item label="标题">
                            <el-input v-model="form.title"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                    </el-col>
                </el-row>
                <el-form-item label="题目描述">
                    <el-input type="textarea" :rows="5" v-model="form.des"></el-input>
                </el-form-item>
                <el-form-item label="输入描述">
                    <el-input type="textarea" :rows="5" v-model="form.input"></el-input>
                </el-form-item>
                <el-form-item label="输出描述">
                    <el-input type="textarea" :rows="5" v-model="form.output"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="样例输入">
                            <el-input type="textarea" :rows="5" v-model="form.inputExample"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="样例输出">
                            <el-input type="textarea" :rows="5" v-model="form.outputExample"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item label="Hint">
                    <el-input type="textarea" :rows="5" v-model="form.hint"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即创建</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "problemCreate",
        data()
        {
            return{
                form: {
                    title:"",
                    des:"",
                    input:"",
                    output:"",
                    inputExample:"",
                    outputExample:"",
                    hint:""
                }
            }
        }
        ,methods: {
            back()
            {
                this.$router.push({path:'/problemAdmin'})
            }
        }

    }
</script>

<style scoped>

</style>
