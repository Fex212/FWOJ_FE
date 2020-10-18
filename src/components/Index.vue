<template>
    <el-container>
        <!--    页头-->
        <el-header>
            <el-menu class="el-menu-demo" mode="horizontal" :default-active="activePath" router>
                <el-menu-item index="/announcementList" @click="saveNavState('/announcementList')">
                    FW OnlineJudge
                </el-menu-item>
                <el-menu-item index="/problemList" @click="saveNavState('/problemList')">题目</el-menu-item>
                <el-menu-item index="/contestList" @click="saveNavState('/contestList')">竞赛</el-menu-item>
                <el-menu-item index="/stateList" @click="saveNavState('/stateList')">状态</el-menu-item>
                <el-menu-item index="/rank" @click="saveNavState('/rank')">榜单</el-menu-item>
                <el-menu-item index="/about" @click="saveNavState('/about')">关于</el-menu-item>
                <el-menu-item style="position: absolute;right: 0">
                    <el-button size="small" round @click="loginFormVisible = true">Login</el-button>
                    <el-button size="small" round @click="registerFormVisible = true">Register</el-button>
                </el-menu-item>
            </el-menu>
        </el-header>
        <!--    页头-->

        <!--     登陆 -->
        <el-dialog title="登陆" :visible.sync="loginFormVisible" width="400px">
            <el-form :model="loginForm">
                <el-form-item label="用户名" label-width="100px">
                    <el-input v-model="loginForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" label-width="100px">
                    <el-input v-model="loginForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="loginFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="loginFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!--     登陆 -->

        <!--     注册 -->
        <el-dialog title="注册" :visible.sync="registerFormVisible" width="400px">
            <el-form :model="registerForm">
                <el-form-item label="用户名" label-width="100px">
                    <el-input v-model="registerForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" label-width="100px">
                    <el-input v-model="registerForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" label-width="100px">
                    <el-input v-model="registerForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="registerFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="registerFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!--     注册 -->

        <!--    主体-->
        <el-main>

            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>

        </el-main>
        <!--    主体-->
        <!--    页脚-->
        <el-footer>
            <div class="footer-font">
                <br>
                Copyright © 2020-现在 Teleport. All rights reserved.
                <br>
                Powered by
                <el-link type="primary" href="https://github.com/teleport-10032/FWOJ_FE"
                         style="font-size: 12px;font-weight:normal;" target="_blank" :underline="false">
                    Flame Wielder OnlineJudge
                </el-link>
                Version: 20200917
            </div>
        </el-footer>
        <!--    页脚-->
    </el-container>
</template>

<script>
    export default {
        name: "Index"
        ,
        data() {
            return {
                show: true,
                direction: "slide-right",
                isRouterAlive: true,
                activePath: '',
                loginFormVisible: false,
                registerFormVisible: false,
                loginForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                registerForm: {
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
        },
        created() {
            console.log(window.sessionStorage.getItem('activePath'));
            if (window.sessionStorage.getItem('activePath') == null)
                window.sessionStorage.setItem('activePath', '/announcementList');
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            saveNavState(activePath) {
                window.sessionStorage.setItem('activePath', activePath);
                this.activePath = activePath;
            }
        }
    }
</script>

<style scoped>
    .footer-font {
        text-align: center;
        font-size: 12px;
        color: #606266;
    }


    .fade-transform-leave-active, .fade-transform-enter-active {
        transition: all .2s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateZ(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateZ(30px);
    }
</style>
