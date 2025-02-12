// @flow
/**
 * 判断是否为移动设备
 * @returns { { mobile: boolean, ios: boolean } } 是否为移动设备
 */
export const isMobileDevice = (): {mobile: boolean, ios: boolean} => {
    if (!isBrowser()) return {mobile: false, ios: false};
    const ua = navigator.userAgent;
    let flag = ua.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Macintosh|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    let flagIOS = ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Macintosh)/i);
    if (!flag) return {mobile: false, ios: false};
    if (ua.indexOf('Macintosh') > -1) {
        try {
            document.createEvent('TouchEvent');
            return {mobile: true, ios: !!flagIOS};
        } catch (e) {
            return {mobile: false, ios: false};
        }
    } else {
        return {mobile: true, ios: !!flagIOS};
    }
};

const isBrowser = () =>
    typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof navigator !== 'undefined';
