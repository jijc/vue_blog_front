/**
 * @name 关于我 - 页面 mixins
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/9/9 10:14 上午
 * @version （指定发布版本）
 **/

import {Component, Vue} from 'vue-property-decorator';

@Component
export default class AbuotMixins extends Vue {

    public name = 'Ban';

    public say(msg: string) {
        console.log(msg);
    }

    created() {
        this.say(this.name);
    }

    // 声明周期钩子
    mounted() {
        this.say(this.name);
    }

    // 计算属性
    get MyName(): string {
        return `-- By ${ this.name } .`;
    }

}
