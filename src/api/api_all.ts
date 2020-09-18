/**
 * @name  all api
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/9/3 5:38 下午
 * @version （指定发布版本）
 **/

import request from '@/utils/request';

export const ApiAll = {
    postArticleList(params: any) {
        return request({
            url: '/article/list',
            method: 'post',
            data: params
        });
    },
    getArticleDetail(params: any) {
        return request({
            url: '/article/detail?id='+params,
        });
    },
    getUserInfo() {
        return request({
            url: '/user/baseInfo',
        });
    },
    getTagsList() {
        return request({
            url: '/tag/list',
        });
    },
}
