/**
* @name  文章详情组件
* @module 组件存放位置
* @desc 加法运算
* @param {}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/
<template>
    <div class="detail">
        <Header class="header-bottom">
            <div class="detail-header">
                <div class="left">
                    <span class="title">{{ articleDetail.title }}</span>
                    <span class="date">{{ articleDetail.display_time }}</span>
                    <span class="tags-warp">
                        <Tags
                                v-for="(item,index) in articleDetail.tag"
                                :key="index"
                                :title="item.title"
                                :styles="`background:${item.color};`"
                        ></Tags>
                    </span>
                </div>
                <div class="back" @click="back">
                    <Icon type="ios-arrow-round-back"/>
                    <span>返回</span>
                </div>
            </div>
        </Header>
        <div class="detail-warp">
            <div class="detail-main">
                <v-md-preview :text="articleDetail.content"></v-md-preview>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {
        Component, Vue,
    } from 'vue-property-decorator';
    import {Getter, Mutation} from "vuex-class";
    import Tags from '@/components/Tag/index.vue'

    @Component({
        name: 'ArticleDetail',
        components: { Tags, },
    })
    export default class ArticleDetail extends Vue {

        @Getter('articleDetail') private articleDetail: any

        @Mutation('setPageType') private setPageType: any

        // 声明周期钩子
        mounted() {
            console.log('[ - 提示 - ]: ', '文章详情加载完毕.');
        }

        back() {
            this.setPageType();
        }

    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>