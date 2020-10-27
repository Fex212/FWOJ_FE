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

                    <el-menu-item style="position: absolute;right: 0" v-if="isLogin === false">
                        <el-button size="small" round @click="loginFormVisible = true">Login</el-button>
                        <el-button size="small" round @click="registerFormVisible = true">Register</el-button>
                    </el-menu-item>
                    <el-submenu style="position: absolute;right: 0"  v-else index="0">
                        <template slot="title">{{username}}</template>
                        <el-menu-item index="1">资料卡</el-menu-item>
                        <el-menu-item index="2">设置</el-menu-item>
                        <el-menu-item @click="logout">登出</el-menu-item>
                    </el-submenu>


            </el-menu>
        </el-header>
        <!--    页头-->

        <!--     登陆 -->
        <el-dialog title="登陆" :visible.sync="loginFormVisible" width="400px" >
            <el-form :model="loginForm" label-width="0px" :rules="loginFormRules"
                     ref="loginFormRef">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" size="small"
                              @keyup.enter.native="login"
                              placeholder="用户名" prefix-icon="el-icon-user-solid">
                    </el-input>
                </el-form-item>
                <el-form-item prop="passwd">
                    <el-input v-model="loginForm.passwd" autocomplete="off" size="small"
                              type="password"
                              @keyup.enter.native="login"
                              placeholder="密码" prefix-icon="el-icon-lock">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetLoginForm" size="small">重 置</el-button>
                <el-button @click="resetLoginFormAndClose" size="small">取 消</el-button>
                <el-button type="primary" @click="login" size="small">确 定</el-button>
            </div>
        </el-dialog>
        <!--     登陆 -->

        <!--     注册 -->
        <el-dialog title="注册" :visible.sync="registerFormVisible" width="400px">
            <el-form :model="registerForm" ref="registerFormRef" :rules="registerFormRules"
                     label-width="0px">
                <el-form-item prop="email">
                    <el-input v-model="registerForm.email" autocomplete="off" size="small"
                               type="email"
                              placeholder="邮箱" prefix-icon="el-icon-link"></el-input>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input v-model="registerForm.username" autocomplete="off" size="small"
                              placeholder="用户名" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item  prop="passwd">
                    <el-input v-model="registerForm.passwd" autocomplete="off" size="small"
                              type="password"
                              placeholder="密码" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item  prop="repasswd">
                    <el-input v-model="registerForm.repasswd" autocomplete="off" size="small"
                              type="password"
                              placeholder="确认" prefix-icon="el-icon-unlock"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetRegisterForm" size="small">重 置</el-button>
                <el-button @click="resetRegisterFormAndClose" size="small">取 消</el-button>
                <el-button type="primary" @click="register" size="small">确 定</el-button>
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
    import qs from 'qs'
    import md5 from 'js-md5';
    export default {
        name: "Index"
        ,
        data() {
            var isEmail = (rule, value, callback) => {
                const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
                if (!value) {
                    return callback(new Error('邮箱不能为空'))
                }
                setTimeout(() => {
                    if (mailReg.test(value)) {
                        callback()
                    } else {
                        callback(new Error('请输入正确的邮箱格式'))
                    }
                }, 100)
            };
            var isRepasswd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.registerForm.passwd) {
                    callback(new Error('两次输入密码不一致'))
                } else {
                    callback()
                }
            }
            return {
                isLogin:false,
                show: true,
                direction: "slide-right",
                isRouterAlive: true,
                activePath: '',
                loginFormVisible: false,
                registerFormVisible: false,
                username:"",
                loginForm: {
                    username: '',
                    passwd:'',
                },
                registerForm: {
                    email:'',
                    username: '',
                    passwd:'',
                    repasswd:''
                },
                loginFormRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                },
                registerFormRules: {
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { validator: isEmail, trigger: 'blur'}
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ],
                    repasswd: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                        { validator: isRepasswd, trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            let result =  this.$axios({
                method: 'post',
                url: '/getUserName',
                headers: { 'content-type': 'application/x-www-form-urlencoded'},
                data: qs.stringify({
                    token: window.localStorage.getItem("token")
                })
            });
            result.then(res=>{
                var u = res.data.username
                if(u == null)
                    this.isLogin = false
                else
                {
                    this.isLogin = true
                    this.getUserName()
                }

            })
            if (window.sessionStorage.getItem('activePath') == null)
                window.sessionStorage.setItem('activePath', '/announcementList');
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields()
            },
            resetLoginFormAndClose() {
                this.$refs.loginFormRef.resetFields()
                this.loginFormVisible = false
            },
            resetRegisterForm() {
                this.$refs.registerFormRef.resetFields()
            },
            resetRegisterFormAndClose() {
                this.$refs.registerFormRef.resetFields()
                this.registerFormVisible = false
            },
            saveNavState(activePath) {
                window.sessionStorage.setItem('activePath', activePath);
                this.activePath = activePath;
            },
            login() {
                //预验证
                this.$refs.loginFormRef.validate(async valid => {
                    //未通过则return
                    if (!valid) return
                    //通过
                    let result =  this.$axios({
                        method: 'post',
                        url: '/login',
                        headers: { 'content-type': 'application/x-www-form-urlencoded'},
                        data: qs.stringify({
                            username: this.loginForm.username,
                            passwd: md5(this.loginForm.passwd)
                        })
                    });
                    result.then(res=>{
                        var status = res.data.status;
                        var token = res.data.token;
                        if(status  === '1')
                        {
                            this.$message.success('登录成功')
                            this.loginFormVisible = false
                            window.localStorage.setItem('token',token);
                            if(window.localStorage.getItem('token') != null)
                                this.isLogin = true;
                            this.getUserName();
                            this.$refs.loginFormRef.resetFields()
                        }
                        else
                            return this.$message.error('用户名或密码不正确')
                    })
                })
            },
            register() {
                //预验证
                this.$refs.registerFormRef.validate(async valid => {
                    //未通过则return
                    if (!valid) return
                    //通过
                    let result =  this.$axios({
                        method: 'post',
                        url: '/register',
                        headers: { 'content-type': 'application/x-www-form-urlencoded'},
                        data: qs.stringify({
                            email: this.registerForm.email,
                            username: this.registerForm.username,
                            passwd: md5(this.registerForm.passwd)
                        })
                    });
                    result.then(res=>{
                        var error = res.data.error;
                        console.log(error);
                        if(error === '0')
                        {
                            this.$message.success('注册成功')
                            this.$refs.registerFormRef.resetFields()
                            this.registerFormVisible = false
                        }
                        else if(error === '1')
                            this.$message.warning('邮箱已被注册')
                        else if(error === '2')
                            this.$message.warning('用户名已被注册')
                        else if(error === '3')
                            this.$message.warning('数据格式不符合规范')
                        else
                            this.$message.warning('发生SQL错误，请联系管理员')

                    })
                })
            },
            loginJudge()
            {
                let result =  this.$axios({
                    method: 'post',
                    url: '/getUserName',
                    headers: { 'content-type': 'application/x-www-form-urlencoded'},
                    data: qs.stringify({
                        token: window.localStorage.getItem("token")
                    })
                });
                result.then(res=>{
                    var u = res.data.username
                    if(u == null)
                        this.isLogin = false
                    else
                        this.isLogin = true

                })
            },
            getUserName()
            {
                let result =  this.$axios({
                    method: 'post',
                    url: '/getUserName',
                    headers: { 'content-type': 'application/x-www-form-urlencoded'},
                    data: qs.stringify({
                        token: window.localStorage.getItem("token")
                    })
                });
                result.then(res=>{
                    if(res.data != null)
                    {
                        this.username = res.data.username;
                    }
                })
            },
            logout()
            {
                window.localStorage.clear()
                this.isLogin = false
                this.$message.success('退出成功')
                this.$router.push('/');
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
