# colourful-utils
记录一些使用过有用的工具函数

### 安装

------

script 标签:

```html
<script src='https://cdn.jsdelivr.net/npm/colourful-utils/dist/colourful-utils.js'></script>
<script>
	cUtils.legalURLs("https://cdn.jsdelivr.net")
</script>
```

npm:

```bash
npm install colourful-utils
```

### 方法

------

1. 是否是合法的URL

   ```javascript
   import { legalURLs } from 'colourful-utils'
   legalURLs('https://cdn.jsdelivr.net')
   ```

2. 格式化时间，秒数和时分秒的相互转换 15 -> 00:00:15

    ```javascript
    import { formateSeconds, formateTimes } from 'colourful-utils'
    formateSeconds(1500)
    formateTimes('15:00')
    ```

3. 比较时间，当前时间和传入时间相差多久 

    ```javascript
    // 1. 小于1分钟，显示：刚刚
    // 2. 大于等于1分钟、小于1小时，显示：x分钟前
    // 3. 大于等于1小时、小于24小时，显示：x小时前
    // 4. 大于等于24小时小于96小时，显示X天前
    // 5. 大于等于4天，显示：月-日  时-分（01-08  17:00）
    // 6. 大于等于365天，显示：年-月-日 时-分(2019-12-8  15:22)
    import { comparingTime } from 'colourful-utils'
    comparingTime(new Date('2025-2-11 17:58:36') | '毫秒数', new Date())
    ```

4. 睡眠函数

    ```javascript
    import { sleep } from 'colourful-utils'
    await sleep(5000); // 延迟5秒钟
    ```

5. 移除字符串前后空格

    ```javascript
    import { strTrim } from 'colourful-utils'
    strTrim('  123   ') // 123
    ```

6. 阻止事件冒泡

    ```javascript
    import { stopEvent } from 'colourful-utils'
    dom.addEventListener('click', (e) => {
        stopEvent(e)
    });
    ```

7. 随机区间小数

    ```javascript
    import { randomFloat } from 'colourful-utils'
    random(1,10) // 1-10之间的小数
    ```

8. 随机区间正整数

    ```javascript
    import { randomInt } from 'colourful-utils'
    randomInt(1,10) 
    randomInt(1.2, 10.8) // [2,10] 最小值会向上取整，最大值会向下取整
    ```

9. 计算字符串的长度 假定ASCLL范围内0-128为单字节 其他为双字节

    ```javascript
    import { getStrLen } from 'colourful-utils'
    getStrLen('hello') // 5
    getStrLen('hello, 世界') // 11
    ```

10. 判断是否为移动设备

    ```javascript
    import { isMobileDevice } from 'colourful-utils'
    isMobileDevice() // { mobile: true, ios: false }
    ```

11. 是否是IE浏览器

     ```javascript
     import { isIE } from 'colourful-utils'
     isIE() // false
     ```

12. RGBA  RGB颜色格式转换为16进制颜色值

     ```javascript
     import { rgbaToHex, rbgToHex } from 'colourful-utils'
     rgbaToHex('rgba(255,125,46,0.9)') // #ff7d2ee6
     rgbToHex('rgb(255,125,46)') // #ff7d2e
     ```

13. base64数据转换为Blob

     ```javascript
     import { base64ToBlob } from 'colourful-utils'
     base64ToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=') // Blob对象
     ```

14. 将数从一个范围映射到另一个范围

     ```javascript
     import { scale } from 'colourful-utils'
     scale(10,0,100,1,10) // 0.1
     ```

15. 函数的组合使用，当某项数据需要多个方法处理时

     ```javascript
     import { combination } from 'colourful-utils'
     function fn1(x){
        return x * 2;
     }
     function fn2(x){
        return x + 1;
     }
     const fn = combination(fn1, fn2);
     console.log(fn(2)); // 5
     ```

     
