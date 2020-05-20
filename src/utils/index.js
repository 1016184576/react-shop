
/**
 * 随机生成n位整数,默认是6位
 * @param {*} count 
 */
export function mathRand(count = 6) {
    let num = "", i = 0;
    for (; i < count; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}