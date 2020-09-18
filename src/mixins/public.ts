/**
 * @method 方法名
 * @name public fn
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/9/9 10:03 上午
 * @version （指定发布版本）
 **/
export const PUBLIC_FUN = {
    timeHandle(timeStr: string): string {
        let tempTime: string = new Date(timeStr).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        return tempTime.substring(0, tempTime.length - 3);
    },
    tagsHandle(arr: any[], tags: any[]): any[] {
        let tmp: any[] = [];
        arr && arr.forEach((vv: any) => {
            tags.forEach((obj: any) => {
                if (obj.id === vv) {
                    tmp.push(obj);
                }
            })
        })
        return tmp;
    }
}