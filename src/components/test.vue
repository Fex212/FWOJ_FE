<template>
    <div class="block">
        <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
        <el-date-picker
                type="datetimerange"
                align="right"
                start-placeholder="2020-1-2"
                end-placeholder="结束日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
                timeDefaultShow: new Date('2022-10-23'),
                value1: 'new Date(\'2022-10-23\')',
            };
        }
    }
</script>
