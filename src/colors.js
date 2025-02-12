// @flow
/**
 * 将rgba颜色值转换为16进制颜色值
 * @param {string} rgba - 以 "rgba(r,g,b,a)" 格式的颜色值
 * @returns {string} - 16进制颜色值
 */
export const rgbaToHex = (rgba:string):string=>{
    // 匹配rgba字符串格式，提取r, g, b和a的值
    const result = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/);

    if (!result) {
        throw new Error('Invalid RGBA color format');
    }

    // 提取整数形式的r, g, b和a值
    const r = parseInt(result[1]);
    const g = parseInt(result[2]);
    const b = parseInt(result[3]);
    const a = parseFloat(result[4]);

    // 将r, g, b值转换为两位的16进制字符串
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // 将透明度转换为0到255之间的整数，再转换为两位的16进制字符串
    const hexA = Math.round(a * 255).toString(16).padStart(2, '0');

    // 组合所有16进制值，构成最终的16进制颜色值
    return `#${hexR}${hexG}${hexB}${hexA}`;
};

/**
 * 将rgb颜色值转换为16进制颜色值
 * @param {string} rgb - 以 "rgb(r,g,b)" 格式的颜色值
 * @returns {string} - 16进制颜色值
 */
export const rgbToHex = (rgb:string):string => {
    // 匹配rgb字符串格式，提取r, g, b的值
    const result = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

    if (!result) {
        throw new Error('Invalid RGB color format');
    }

    // 提取整数形式的r, g, b值
    const r = parseInt(result[1]);
    const g = parseInt(result[2]);
    const b = parseInt(result[3]);

    // 将r, g, b值转换为两位的16进制字符串
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // 组合所有16进制值，构成最终的16进制颜色值
    return `#${hexR}${hexG}${hexB}`;
}