import Vue from 'vue'
import Vuex from 'vuex'
import {ApiAll} from '@/api/api_all'
import {PUBLIC_FUN} from "@/mixins/public";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            avatar:'',
            nick:'',
            introduction:'',
        },
        tagsList: {
            list: [],
        },
        articleListData: {},
        postArticleListParam: {
            title: '',
            tag: null,
            total: null,
            page_now: 1,
            page_size: 12,
        },
        pageType: 'list',
        articleDetail: {},
    },
    getters: {
        userInfoData(state) {
            return state.userInfo
        },
        tagsListData(state) {
            return state.tagsList.list
        },
        articleListData(state) {
            return state.articleListData
        },
        postArticleListParam(state) {
            return state.postArticleListParam
        },
        pageType(state) {
            return state.pageType
        },
        articleDetail(state) {
            return state.articleDetail
        },


    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data
        },
        setTagsList(state, data) {
            state.tagsList = data
        },
        setArticleList(state, data) {
            state.articleListData = data
        },
        setPostArticleListParam(state, data) {
            state.postArticleListParam = data
        },
        setPageParamPageNow(state, now) {
            state.postArticleListParam.page_now = now
        },
        setPageParamTotal(state, total) {
            state.postArticleListParam.total = total
        },
        setPageType(state, type) {
            if (!type) {
                state.pageType === 'list' ? state.pageType = 'detail' : state.pageType = 'list'
            } else {
                state.pageType = type
            }
        },
        setArticleDetail(state, data) {
            const tags = state.tagsList.list;
            data.display_time = PUBLIC_FUN.timeHandle(data.display_time)
            data.tag = PUBLIC_FUN.tagsHandle(data.tag, tags)
            state.articleDetail = data
        },
        setTagColor(state, data) {
            const tags = state.tagsList.list;
            data.list.forEach((v: any) => {
                v.display_time = PUBLIC_FUN.timeHandle(v.display_time)
                v.tag = PUBLIC_FUN.tagsHandle(v.tag, tags)
            })
        },
    },
    actions: {
        getUserInfo(context) {
            ApiAll.getUserInfo().then(response => {
                context.commit('setUserInfo', response.data.data)
            }).catch(err => {
                console.log(err)
            })
        },
        getTagsList(context) {
            ApiAll.getTagsList().then(response => {
                context.commit('setTagsList', response.data.data)
            }).catch(err => {
                console.log(err)
            })
        },
        postArticleList(context) {
            const param = context.state.postArticleListParam
            ApiAll.postArticleList(param).then(response => {
                context.commit('setPageParamTotal', response.data.data.total)
                context.commit('setArticleList', response.data.data)
                context.commit('setTagColor', response.data.data)
                context.commit('setPageType', 'list')
            }).catch(err => {
                console.log(err)
            })
        },
        getArticleDetail(context, param) {
            ApiAll.getArticleDetail(param).then(response => {
                context.commit('setArticleDetail', response.data.data)
                context.commit('setPageType', 'detail')
            }).catch(err => {
                console.log(err)
            })
        },
    },
    modules: {}

})
