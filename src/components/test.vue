<template>
    <codemirror
            ref="mycode"
            :value="curCode"
            :options="cmOptions"
            class="code">
    </codemirror>
</template>

<script>
    import { codemirror } from 'vue-codemirror'
    import "codemirror/theme/ambiance.css";  // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
    require("codemirror/mode/javascript/javascript"); // 这里引入的模式的js，根据设置的mode引入，一定要引入！！
    export default {
        name: "test",
        components:{
            codemirror
        },
        created()
        {
            e = b.find_element_by_css_selector(".CodeMirror textarea")
            p = b.find_element_by_css_selector("pre.CodeMirror-line")
            p.click()
            e.send_keys("Hello, World!")

        },
        data()
        {
            return{
                curCode:'//Success',
                cmOptions:{
                    value:'',
                    mode:"text/javascript",
                    theme: "ambiance",
                    readOnly:true,
                }
            }
        }
    }
</script>

<style scoped>

</style>
