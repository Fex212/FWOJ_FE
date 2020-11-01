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
            <el-aside>
                <!-- 侧边栏菜单区域 -->
                <!--                unique-opened 只允许打开一个菜单-->
                <!--                :collapse 是否展开-->
                <!--                router 启动vue router 以index的值进行跳转-->
                <el-menu
                        default-active="0"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-menu-item index="0">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统信息</span>
                    </el-menu-item>
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">题目管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
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
                // 被激活的链接地址
                activePath: ''
            }
        },
        created() {
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            logout() {
                window.sessionStorage.clear()
                this.$router.push('/')
            },
            // 保存链接的激活状态
            saveNavState(activePath) {
                window.sessionStorage.setItem('activePath', activePath)
                this.activePath = activePath
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    body{
        margin: 0;
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
    }

    .el-aside {
        background-color: #333744;
        flex:1;
    }

    .el-main {
        background-color: #eaedf1;
        flex:4;
    }

    .iconfont {
        margin-right: 10px;
    }
</style>
