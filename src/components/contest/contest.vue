<template>
    <div style="width: 95%;align-self: center;margin: 0 auto;">
        <el-card class="box-card" style="width: 100%;margin-top: 10px">
            <el-tabs v-model="activeName" value="second" @tab-click="handleClick">
                <el-tab-pane label="概要" name="first">
                    用户管理
                </el-tab-pane>
                <el-tab-pane label="公告" name="second">
                    配置管理
                </el-tab-pane>
                <el-tab-pane label="题目" name="third">
                    角色管理
                </el-tab-pane>
                <el-tab-pane label="榜单" name="fourth">
                    定时任务补偿
                </el-tab-pane>
            </el-tabs>
<!--            <h3>{{problemList.title}}</h3>-->

<!--            &lt;!&ndash;      描述&ndash;&gt;-->
<!--            <br>-->
<!--            <span style="color: #409EFF;">题目描述</span>-->
<!--            <div style="padding-left: 25px">-->
<!--                <p>-->
<!--                    {{problemList.des}}-->
<!--                </p>-->
<!--            </div>-->

<!--            &lt;!&ndash;      输入描述&ndash;&gt;-->
<!--            <br>-->
<!--            <span style="color: #409EFF;">输入</span>-->
<!--            <div style="padding-left: 25px">-->
<!--                <p>-->
<!--                    {{problemList.input}}-->
<!--                </p>-->
<!--            </div>-->

<!--            &lt;!&ndash;      输出描述&ndash;&gt;-->
<!--            <span style="color: #409EFF;">输出</span>-->
<!--            <div style="padding-left: 25px">-->
<!--                <p>-->
<!--                    {{problemList.output}}-->
<!--                </p>-->
<!--            </div>-->

<!--            &lt;!&ndash;      样例&ndash;&gt;-->
<!--            <br>-->
<!--            <div style="display: flex;flex-direction: row;">-->
<!--                <div style="flex: 10">-->
<!--                    <span style="color: #409EFF;">输入样例</span>-->
<!--                    <div style="border-radius: 0;margin-top: 10px;padding-left:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);line-height: 20px">-->
<!--                        <p style="padding-top: 10px;padding-bottom: 10px">-->
<!--                            {{problemList.inputExample}}-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div style="flex:2"></div>-->

<!--                <div style="flex: 10">-->
<!--                    <span style="color: #409EFF;">输出样例</span>-->
<!--                    <div style="border-radius: 0;margin-top: 10px;padding-left:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);line-height: 20px">-->
<!--                        <p style="padding-top: 10px;padding-bottom: 10px">-->
<!--                            {{problemList.outputExample}}-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div style="flex:2"></div>-->
<!--            </div>-->

<!--            &lt;!&ndash;      hint&ndash;&gt;-->
<!--            <span style="color: #409EFF;">提示</span>-->
<!--            <div style="border-radius: 0;margin-top: 10px;padding-left:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);line-height: 20px">-->
<!--                <p style="padding-top: 10px;padding-bottom: 10px">-->
<!--                    {{problemList.hint}}-->
<!--                </p>-->
<!--            </div>-->
        </el-card>


    </div>
</template>

<script>
    export default {
        name: "contest"
        ,
        data()
        {
            return {
                activeName: 'first',
                problemList: [],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        }
        ,
        created() {

            this.getDetail();
        }
        ,
        methods: {
            async getDetail() {
                const {data: res} = await this.$http.get('getProblemDetail', {params: {id: this.$route.query.id}})
                console.log(res);
                this.problemList = res.data;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
        }
</script>

<style scoped>

</style>
