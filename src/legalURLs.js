// @flow
// 判断是否是合法的URL
export default function isLegalURL(url: string): boolean {
    // const reg = /(http|https):\/\/([\w.]+\/?)\S*/g;
    const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
    return reg.test(url);
}
