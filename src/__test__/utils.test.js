import { sleep, strTrim, getStrLen } from '../utils';

describe('sleep', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('应该在指定时间后解析 Promise', async () => {
    const ms = 1000;
    const promise = sleep(ms);
    
    // 验证 setTimeout 被正确调用
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), ms);

    // 推进时间并等待 Promise 解析
    jest.runAllTimers();
    await expect(promise).resolves.toBeUndefined();
  });

  test('应该正确处理 0 毫秒的情况', async () => {
    const promise = sleep(0);
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);

    jest.runAllTimers();
    await expect(promise).resolves.toBeUndefined();
  });

  test('不应该提前解析', async () => {
    const ms = 1000;
    const callback = jest.fn();
    
    sleep(ms).then(callback);
    
    // 未推进时间时回调不应被调用
    jest.advanceTimersByTime(999);
    await Promise.resolve(); // 允许微任务执行
    expect(callback).not.toHaveBeenCalled();

    // 推进剩余 1 毫秒
    jest.advanceTimersByTime(1);
    await Promise.resolve(); // 允许微任务执行
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('应该处理多个并行的 sleep 调用', async () => {
    const promise1 = sleep(1000);
    const promise2 = sleep(2000);
    
    expect(setTimeout).toHaveBeenCalledTimes(2);
    
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    await expect(promise1).resolves.toBeUndefined();
    
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    await expect(promise2).resolves.toBeUndefined();
  });
});

describe('strTrim', () => {

  test('it should trim leading and trailing spaces', () => {
    const input = '   Hello World!   ';
    const output = 'Hello World!';
    expect(strTrim(input)).toBe(output);
  });

  test('it should trim only leading spaces', () => {
    const input = '   Hello World!';
    const output = 'Hello World!';
    expect(strTrim(input)).toBe(output);
  });

  test('it should trim only trailing spaces', () => {
    const input = 'Hello World!   ';
    const output = 'Hello World!';
    expect(strTrim(input)).toBe(output);
  });

  test('it should return the same string if there are no leading or trailing spaces', () => {
    const input = 'Hello World!';
    const output = 'Hello World!';
    expect(strTrim(input)).toBe(output);
  });

  test('it should handle an empty string', () => {
    const input = '';
    const output = '';
    expect(strTrim(input)).toBe(output);
  });

  test('it should handle a string with only spaces', () => {
    const input = '     ';
    const output = '';
    expect(strTrim(input)).toBe(output);
  });

});

describe('getStrLen', () => {
    test('should return correct length for ASCII characters', () => {
        const input = "Hello World";
        const expectedLength = 11;
        expect(getStrLen(input)).toBe(expectedLength);
    });

    test('should return correct length for mixed characters', () => {
        const input = "Hello, 世界!";
        const expectedLength = 12; // "Hello, " = 7, "世界" = 4, "!"= 1
        expect(getStrLen(input)).toBe(expectedLength);
    });

    test('should return correct length for only non-ASCII characters', () => {
        const input = "你好";
        const expectedLength = 4; // Each Chinese character counts as 2
        expect(getStrLen(input)).toBe(expectedLength);
    });

    test('should return 0 for an empty string', () => {
        const input = "";
        const expectedLength = 0;
        expect(getStrLen(input)).toBe(expectedLength);
    });

    test('should return 0 for non-string input', () => {
        // @ts-expect-error: explicitly testing invalid input
        expect(getStrLen(null)).toBe(0);
    });
});
