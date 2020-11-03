<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <span>Admin</span>
            </div>
            <el-button type="success" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!-- 侧边栏菜单区域 -->
                <!--                unique-opened 只允许打开一个菜单-->
                <!--                :collapse 是否展开-->
                <!--                router 启动vue router 以index的值进行跳转-->
                <el-menu :default-active="this.$route.path"
                        background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened
                        :collapse="isCollapse" :collapse-transition="false" router >
                    <el-menu-item index="/systemInfo">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统信息</span>
                    </el-menu-item>
                    <el-menu-item index="/userAdmin">
                        <i class="el-icon-user-solid"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/problemAdmin">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">题目管理</span>
                    </el-menu-item>
                    <el-menu-item index="/contestAdmin">
                        <i class="el-icon-trophy-1"></i>
                        <span slot="title">比赛管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右侧内容主体 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name:"adminIndex",
        data() {
            return {
                // 左侧菜单数据
                menulist: [],
                // 是否折叠
                isCollapse: false,
            }
        },
        created() {
            this.adminJudge()
        },
        methods: {
            async adminJudge() {
                if(window.localStorage.getItem("token") != null)
                {
                    const { data: res } = await this.$http.get('tokenIsAdmin', {
                        params: {token:window.localStorage.getItem("token")}
                    })
                    console.log(res)
                    if(res.result !== "1")
                    {
                        this.$message.warning("请先登录")
                        this.$router.push('/')
                    }
                }
                else
                {
                    this.$message.warning("请先登录")
                    this.$router.push('/')
                }
            },
            logout() {
                window.localStorage.clear()
                this.$router.push('/')
            },
            // 点击按钮，切换菜单的折叠与展开
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style lang="less" scoped>
    body
    {
    }
    .home-container {
        height: 100%;
    }
    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;
        > div {
            display: flex;
            align-items: center;
            span {
                margin-left: 15px;
            }
        }
    }

    .el-aside {
        background-color: #333744;
        .el-menu {
            border-right: none;
        }
        height: 888px;
    }

    .el-main {
        background-color: #eaedf1;
        height: 888px;
    }

    .iconfont {
        margin-right: 10px;
    }

    .toggle-button {
        background-color: #4a5064;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
</style>
