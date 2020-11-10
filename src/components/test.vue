<template>
    <div>

        <el-button @click="ck"></el-button>
    </div>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
                date1:"",
                date2:"",
                date:[]
            };
        },
        created() {
            this.date.push(this.dateFilter(new Date()))
            this.date.push(this.dateFilter(new Date()))
        },
        methods: {
            dateFilter(input) {
                var d = new Date(input);
                var year = d.getFullYear();
                var month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1);
                var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
                var hour = d.getHours() < 10 ? "0" + d.getHours() : "" + d.getHours();
                var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : "" + d.getMinutes();
                var seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : "" + d.getSeconds();
                return (year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds);
            },
            ck() {
                console.log(this.date)
            }

        }
    }
</script>
