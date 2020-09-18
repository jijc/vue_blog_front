import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from "view-design"
import 'view-design/dist/styles/iview.css'
Vue.use(iView);

import {PUBLIC_FUN} from "@/mixins/public"
// @ts-ignore
Vue.mixin(PUBLIC_FUN);

// markdown 预览组件
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

// @ts-ignore
// 代码行号功能
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
VMdPreview.use(createLineNumbertPlugin());

// @ts-ignore
// TodoList 功能
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
VMdPreview.use(createTodoListPlugin());

// @ts-ignore
// 快速复制功能
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
VMdPreview.use(createCopyCodePlugin());

// @ts-ignore 白色 GitHub 主题
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
VMdPreview.use(githubTheme);

// @ts-ignore
// 主题 黑色
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VMdPreview.use(vuepressTheme);

Vue.use(VMdPreview);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
