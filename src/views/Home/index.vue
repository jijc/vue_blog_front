/**
* @name  博客首页
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/
<template>
    <div id="home">
        <Header class="header">
            <TopHeader></TopHeader>
        </Header>
        <Content>
            <ArticleList v-if="pageType === 'list'"></ArticleList>
            <ArticleDetail v-if="pageType === 'detail'"></ArticleDetail>
        </Content>
        <Footer v-if="pageType === 'list'">
            <Input
                    v-model="postArticleListParam.title"
                    placeholder="按文章标题或内容搜索..."
                    @on-enter="inputEnter"
            >
                <Icon type="ios-search" slot="suffix" @click.prevent="inputClick"/>
            </Input>
            <Page
                    :total="postArticleListParam.total"
                    :current="postArticleListParam.page_now"
                    :page-size="postArticleListParam.page_size"
                    show-elevator
                    show-total
                    @on-change="pageChange"
            />
        </Footer>
    </div>
</template>
<script lang="ts">
    import {
        Component, Mixins
    } from 'vue-property-decorator';
    import TopHeader from '@/components/Header/index.vue'
    import ArticleList from '@/components/ArticleList/index.vue'
    import ArticleDetail from '@/components/ArticleDetail/index.vue'
    import mixins from './mixins'

    @Component({
        name: 'Home',
        components: { TopHeader, ArticleList, ArticleDetail },
    })
    export default class Home extends Mixins(mixins) {
    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>