// @flow
// 格式化秒数 15 -> 00:00:15
export const formateSeconds = (endTime: number): string => {
    let secondTime = parseInt(endTime); //将传入的秒的值转化为Number
    let min = 0; // 初始化分
    let h = 0; // 初始化小时
    let result = "";
    if (secondTime > 60) {
        //如果秒数大于60，将秒数转换成整数
        min = parseInt(secondTime / 60); //获取分钟，除以60取整数，得到整数分钟
        secondTime = parseInt(secondTime % 60); //获取秒数，秒数取佘，得到整数秒数
        if (min >= 60) {
            //如果分钟大于60，将分钟转换成小时
            h = parseInt(min / 60); //获取小时，获取分钟除以60，得到整数小时
            min = parseInt(min % 60); //获取小时后取佘的分，获取分钟除以60取佘的分
        }
    }
    result = `${h.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${secondTime.toString().padStart(2, "0")}`;
    return result;
}

// 00:00:15 -> 15
export const formateTimes = (time: string): number => {
    const hour = time.split(":")[0] || '00';
    const min = time.split(":")[1] || '00';
    const sec = time.split(":")[2] || '00';

    return (Number(hour) * 3600) + (Number(min) * 60) + Number(sec);
}