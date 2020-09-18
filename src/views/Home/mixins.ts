/**
 * @method 方法名
 * @name mixins - home
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/9/9 10:27 上午
 * @version （指定发布版本）
 **/

import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter, Mutation} from "vuex-class";

@Component
export default class HomeMixins extends Vue {

    // 初始化数据
    private obj: object = {}

    @Getter('postArticleListParam') private postArticleListParam: any

    @Getter('articleListData') private articleListData: any

    @Getter('pageType') private pageType: any

    @Action('postArticleList') private postArticleList: any

    @Mutation('setPageParamPageNow') private setPageParamPageNow: any


    // 声明周期钩子
    mounted() {

    }

    inputClick() {
        this.postArticleList();
    }

    inputEnter() {
        this.postArticleList();
    }

    pageChange(now: number) {
        this.setPageParamPageNow(now);
        this.postArticleList();
    }

}