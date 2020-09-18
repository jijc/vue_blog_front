<template>
    <div id="app">
        <Layout>
            <Sider hide-trigger>
                <BanSider></BanSider>
            </Sider>
            <Layout>
                <router-view/>
            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {
        Component, Emit, Inject, Model, Prop, Provide, Vue, Watch,
    } from 'vue-property-decorator';
    import BanSider from '@/components/Sider/index.vue'

    @Component({
        name: 'Home',
        components: { BanSider },
    })
    export default class App extends Vue {

    }

</script>

<style lang="less">
    html {
        height: 100%;
    }

    body {
        height: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .ivu-layout {
        overflow: hidden;
        height: 100%;
        background: #FFFFFF;

        .ivu-layout-header {
            background: #FFFFFF;
        }
    }
</style>
