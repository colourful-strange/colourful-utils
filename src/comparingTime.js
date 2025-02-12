// @flow
/**
 * 当前时间和传入时间相差多久
 * 小于1分钟，显示：刚刚
 * 大于等于1分钟、小于1小时，显示：x分钟前
 * 大于等于1小时、小于24小时，显示：x小时前
 * 大于等于24小时小于96小时，显示X天前
 * 大于等于4天，显示：月-日  时-分（01-08  17:00）
 * 大于等于365天，显示：年-月-日 时-分(2019-12-8  15:22)
 * @param {Date | number} time 毫秒数或日期
 * @returns
 */
const lessOneMinute = 1000 * 60; // 一分钟
const lessOneHour = 1000 * 60 * 60; // 一小时
const lessOneDay = 1000 * 60 * 60 * 24; // 一天
const lessFourDay = 1000 * 60 * 60 * 24 * 4; // 四天
const lessOneYear = 1000 * 60 * 60 * 24 * 365;

export default (time: Date | number, baseTime: Date = new Date()): string => {
    let originTime = typeof time === 'number' ? time : time.getTime();
    const year = new Date(originTime).getFullYear();
    let month: string = String(new Date(originTime).getMonth() + 1).padStart(2, '0');
    let day: string = String(new Date(originTime).getDate()).padStart(2, '0');
    let hour: string = String(new Date(originTime).getHours()).padStart(2, '0');
    let minute: string = String(new Date(originTime).getMinutes()).padStart(2, '0');
    const currentTime = baseTime.getTime();
    // 当前的时间肯定比传入的时间大
    const differTime = currentTime - originTime;
    if (differTime < 0) {
        throw new Error('传入的时间不能大于当前时间');
    }

    if (differTime < lessOneMinute) {
        return '刚刚';
    }
    if (differTime >= lessOneMinute && differTime < lessOneHour) {
        return `${Math.floor(differTime / lessOneMinute)}分钟前`;
    }
    if (differTime >= lessOneHour && differTime < lessOneDay) {
        return `${Math.floor(differTime / lessOneHour)}小时前`;
    }
    if (differTime >= lessOneDay && differTime < lessFourDay) {
        return `${Math.floor(differTime / lessOneDay)}天前`;
    }
    if (differTime >= lessFourDay && differTime < lessOneYear) {
        return `${month}-${day}  ${hour}:${minute}`;
    }
    return `${year}-${month}-${day}  ${hour}:${minute}`;
};
