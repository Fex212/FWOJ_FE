<template>
    <el-container>
        <el-aside width="400px">
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu router
                            default-active="1"
                            class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">个人信息设置</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-document"></i>
                            <span slot="title">账号设置</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>

        <el-main>
            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "userIndex",
        methods: {
        }
    }
</script>

<style scoped>

</style>
