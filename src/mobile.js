// @flow
/**
 * 判断是否为移动设备
 * @returns {boolean} 是否为移动设备
 */
export const isMobileDevice = ():boolean => {
    const ua = navigator.userAgent;
    let flag = ua.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Macintosh|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    );
    if (!flag) return false;
    if (ua.indexOf('Macintosh') > -1) {
        try {
            document.createEvent('TouchEvent');
            return true;
        } catch (e) {
            return false;
        }
    } else {
        return true;
    }
};

/**
 * 判断是否为IOS移动设备
 * @returns {boolean} 是否为IOS移动设备
 */
export const isMobileDeviceIOS = ():boolean => {
    const ua = navigator.userAgent;
    let flag = ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Macintosh)/i);
    if (!flag) return false;
    if (ua.indexOf('Macintosh') > -1) {
        try {
            document.createEvent('TouchEvent');
            return true;
        } catch (e) {
            return false;
        }
    } else {
        return true;
    }
};