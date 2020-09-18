/**
 * @name    axios 封装 request
 * @module  组件存放位置
 * @desc    加法运算
 * @param   {number}
 * @author  ban chi
 * @date    2020/9/3 4:11 下午
 * @version （指定发布版本）
 **/

import axios from 'axios';
import {Message, LoadingBar} from "view-design";

LoadingBar.config({
    color: '#2d8cf0',
    height: 4
});

/* 防止重复提交，利用 axios 的 cancelToken */
let pending: any[] = []; // 用于存储每个ajax请求的取消函数和 ajax 标识
const CancelToken: any = axios.CancelToken;

const removePending: any = (config: any, f: any) => {
    // 获取请求的url
    const flagUrl = config.url;
    // 判断该请求是否在请求队列中
    if (pending.indexOf(flagUrl) !== -1) {
        // 如果在请求中，并存在f,f即axios提供的取消函数
        if (f) {
            // 执行取消操作
            f('取消重复请求');
        } else {
            // 把这条记录从数组中移除
            pending.splice(pending.indexOf(flagUrl), 1);
        }
    } else {
        // 如果不存在在请求队列中，加入队列
        if (f) {
            pending.push(flagUrl);
            if (pending.length >= 1) {
                // 关闭 加载进度条 和 loading
                LoadingBar.start()
            }
        }
    }
};

/* 创建axios实例 */
const service = axios.create({
    timeout: 5000, // 请求超时时间
    baseURL: process.env.VUE_APP_BASE_API || '', // 基础地址
});

/* request 拦截器 */
service.interceptors.request.use((config: any) => {
    // neverCancel 配置项，允许多个请求
    if (!config.neverCancel) {
        // 生成cancelToken
        config.cancelToken = new CancelToken((c: any) => {
            removePending(config, c);
        });
    }
    // 统一修改请求头，例如 加入 用户 token 等操作
    //   if (store.getters.sessionId) {
    //     config.headers['X-SessionId'] = getSessionId(); // 让每个请求携带token--['X-Token']为自定义key
    //   }
    return config;
}, (error: any) => {
    Promise.reject(error).then(r => {
    });
});

/* respone 拦截器 */
service.interceptors.response.use(
    (response: any) => {
        // 移除队列中的该请求，不传第二个参数 f
        removePending(response.config);

        // 关闭 加载进度条 和 loading
        (Message as any).destroy();
        if (pending.length === 0) {
            LoadingBar.finish()
        }

        // 获取返回数据，并处理。按自己业务需求修改。下面只是个demo
        const res = response.data;
        if (res.code !== 200) {
            if (res.code === 401) {
                if (location.hash === '#/') {
                    return res;
                } else {
                    location.href = '/#/';
                }
            }
            return Promise.reject('error');
        } else {
            return response;
        }
    },
    (error: any) => {
        // 关闭 加载进度条 和 loading
        (Message as any).destroy();
        if (pending.length === 0) {
            LoadingBar.error()
        }

        // 异常处理
        console.log(error)
        pending = [];
        if (error.message === '取消重复请求') {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    },
);

export default service;
