/**
* @name  关于我 - 页面
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/
<template>
    <div id="home">
        <h1 style="margin-top: 4%;">Zhe jia huo hen lan , Shen me dou mei liu xia ...</h1>
        <br/>
        <br/>
        <p style="padding: 0 28%;text-align: right;"> {{ MyName }}</p>
    </div>
</template>
<script lang="ts">
    import {
        Component, Mixins,
    } from 'vue-property-decorator';
    import mixins from "./mixins"

    @Component({
        name: 'About',
        components: {},
    })
    export default class About extends Mixins(mixins) {

    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>