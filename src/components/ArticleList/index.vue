/**
* @name  文章列表组件
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/
<template>
    <div class="list">
        <Header class="header-bottom">
            <div class="list-header">
                <span class="title">名称</span><span class="date">创建时间</span>
            </div>
        </Header>
        <div class="no-data" v-if="articleListData.list && articleListData.list.length < 1">
            <div class="bg-img"></div>
            <span>该分类下还没有文章哦</span>
        </div>
        <ul
                v-if="articleListData.list && articleListData.list.length > 0"
                class="issue-list"
        >
            <li
                    class="issue-item"
                    v-for="(item,index) in articleListData.list"
                    :key="index"
            >
                <div class="left">
                    <span class="title" @click="lookDetail(item.id)">{{ item.title }}</span>
                    <span class="tags-warp">
                        <Tags
                                v-for="(item,index) in item.tag"
                                :title="item.title"
                                :key="index"
                                :styles="`background:${item.color};`"
                        ></Tags>
                    </span>
                </div>
                <div class="right">
                    <span class="date">{{ item.display_time }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import {
        Component, Vue,
    } from 'vue-property-decorator';
    import {Getter, Mutation, Action} from "vuex-class";
    import Tags from '@/components/Tag/index.vue'

    @Component({
        name: 'ArticleList',
        components: { Tags },
    })
    export default class ArticleList extends Vue {

        @Getter('articleListData') private articleListData: Object | undefined

        @Getter('postArticleListParam') private postArticleListParam: Object | undefined

        @Action('getArticleDetail') private getArticleDetail: any

        // 声明周期钩子
        mounted() {
            console.log('[ - 提示 - ]: ', '文章列表加载完毕.');
        }

        // 查看详情
        lookDetail(id: string) {
            this.getArticleDetail(id)
        }

    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>