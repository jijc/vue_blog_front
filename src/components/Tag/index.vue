/**
* @name  Tag 二次封装 组件
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/
<template>
    <Tag :size="size" :style="styles">{{ title }}</Tag>
</template>
<script lang="ts">
    import {
        Component, Prop, Vue,
    } from 'vue-property-decorator';

    @Component({
        name: 'MyTag',
        components: {},
    })
    export default class MyTag extends Vue {

        @Prop(String)
        styles!: string

        @Prop(String)
        title!: string

        @Prop({
            default: 'default',
        })
        size!: string

    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>