<template>

    <el-container>
        <!--            侧边栏-->
        <el-aside width="200px">
            <el-col>
                <el-menu
                        default-active="1-2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-aside>
        <el-container>
<!--                头部-->
                <el-header>Header</el-header>
<!--                中间-->
                <el-main>Main</el-main>
        </el-container>
    </el-container>

</template>
<script>
    export default {
        name: "adminIndex"
        ,
        data()
        {
            return{

            }

        },
        methods: {
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
        padding: 0;
    }
    #app{
        display: none;
    }
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        width: 100%;height: 100%;text-align: center;background-color: rgba(251,252,252,1);
        padding:0;
    }

</style>
