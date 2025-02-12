// @flow
/**
 * 将base64数据转换为blob对象
 * @param {string} base64Data - base64数据
 * @returns {Blob} - blob对象
 */
const base64ToBlob = (base64Data: string): Blob => {
    let byteString;
    if (base64Data.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(base64Data.split(',')[1]);
    } else {
        byteString = unescape(base64Data.split(',')[1]);
    }
    let mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type: mimeString});
};

export default base64ToBlob;
