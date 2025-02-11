// @flow
/**
 * 睡眠函数
 * @param {number} ms 睡眠时间 毫秒
 * @returns {Promise<void>}
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 移除字符串前后空格
 * @param {string} str 字符串
 * @returns {string} 移除空格后的字符串
 */
export const strTrim = (str: string): string =>  str.replace(/(^\s*)|(\s*$)/g, '');

/**
 * 两数之间的随机小数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机小数
 */
export const randomFloat = (min: number, max: number):number => Math.random() * (max - min) + min;

/**
 * 两数之间的随机正数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机正数
 */
export const randomInt = (min: number, max: number):number => min + Math.floor(Math.random() * (max - min + 1));

/**
 * 两数之间的随机正数 包含两个数在内
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机正数
 */
export const randomIntInclusive = (min: number, max: number):number => Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 

/**
 * 阻止事件冒泡
 * @param {MouseEvent} e
 */
export const stopEvent = (e: MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.returnValue = false;
    return false;
}

