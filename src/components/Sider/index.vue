/**
* @name  侧边栏 - 组件
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/9/4 10:58 上午
* @version （指定发布版本）
**/
<template>
    <div class="sider-main">
        <div class="user">
            <Avatar size="large" :src="userInfoData.avatar"/>
            <div class="nick">{{ userInfoData.nick }}</div>
            <div class="introduction">{{ userInfoData.introduction }}</div>
            <div class="links">
                <Icon type="logo-github" @click="goTo('gitHub')"/>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li @click="changeRouter(0)" :class="active === 0 ? 'active' : '' ">
                    <router-link to="/home">个人博客</router-link>
                </li>
                <li @click="changeRouter(1)" :class="active === 1 ? 'active' : '' ">
                    <router-link to="/about">关于我</router-link>
                </li>
            </ul>
        </div>
        <div class="copyright">@ 2017 - 2020 : By BanChi</div>
    </div>
</template>
<script lang="ts">
    import {
        Component, Vue,
    } from 'vue-property-decorator';
    import {Getter, Action} from 'vuex-class';

    @Component({
        name: 'siderMain',
        components: {},
    })
    export default class SiderMain extends Vue {

        private active = 0

        @Action('getUserInfo') private getUserInfo: any

        @Getter('userInfoData') private userInfoData: any

        mounted() {
            this.getUserInfo();
        }

        changeRouter(num: number) {
            this.active = num
        }

        goTo(name: string) {
            if (name === 'gitHub') {
                window.open('https://github.com/ban-chi', '_blank');
            }
        }

    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>