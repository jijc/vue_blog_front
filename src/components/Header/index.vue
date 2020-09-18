/**
* @name  top header 组件
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/

<template>
    <div class="header-warp">
        <Tags
                :styles="active === 0 ? 'background:#3478F6;' : ''"
                :class="active === 0 ? 'active' : ''"
                size="large"
                title="All"
                @click.native="changeTag(0)"
        ></Tags>
        <Tags
                v-for="(item,index) in tagsListData"
                :title="item.title"
                :key="index"
                size="large"
                :styles="active === item.id ? `background:${item.color};` : ''"
                :class="active === item.id ? 'active' : ''"
                @click.native="changeTag(item.id)"
        ></Tags>
    </div>
</template>
<script lang="ts">
    import {
        Component, Vue,
    } from 'vue-property-decorator';
    import {Getter, Action, Mutation} from 'vuex-class';
    import Tags from '@/components/Tag/index.vue'

    @Component({
        name: 'Header',
        components: { Tags },
    })
    export default class Header extends Vue {
        private active: number = 0

        @Action('getTagsList') private getTagsList: any

        @Action('postArticleList') private postArticleList: any

        @Getter('tagsListData') private tagsListData: any

        @Getter('postArticleListParam') private postArticleListParam: any

        @Mutation('setPostArticleListParam') private setPostArticleListParam: any

        mounted() {
            this.getTagsList();
            const param = this.postArticleListParam;
            this.postArticleList(param);
        }

        changeTag(id: number) {
            let param: any = JSON.parse(JSON.stringify(this.postArticleListParam))
            param['tag'] = id;
            param['page_now'] = 1;
            this.active = id;
            this.setPostArticleListParam(param);
            this.postArticleList();
        }

    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>