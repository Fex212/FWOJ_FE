<template>

</template>

<script>
    import axios from "axios";

    const isLogin = false;
    const url = axios.defaults.baseURL
    export default
    {
        //全局判断是否登录
        isLogin,
        //请求头像的URL
        url
    }
</script>

<style scoped>

</style>
