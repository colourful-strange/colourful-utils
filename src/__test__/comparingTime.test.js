import comparingTime from '../comparingTime';

describe('comparingTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-10-05T12:00:00Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('返回"刚刚"当时间差小于1分钟', () => {
    const time = new Date(Date.now() - 30 * 1000);
    expect(comparingTime(time)).toBe('刚刚');
  });

  test('返回分钟数当时间差在1-59分钟', () => {
    const time = new Date(Date.now() - 5 * 60 * 1000);
    expect(comparingTime(time)).toBe('5分钟前');
  });

  test('返回小时数当时间差在1-23小时', () => {
    const time = new Date(Date.now() - 3 * 60 * 60 * 1000);
    expect(comparingTime(time)).toBe('3小时前');
  });

  test('返回天数当时间差在1-3天', () => {
    const time = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    expect(comparingTime(time)).toBe('2天前');
  });

  test('返回月日时分当时间差在4天到1年之间', () => {
    const time = new Date('2023-10-01T12:00:00');
    expect(comparingTime(time)).toBe('10-01  12:00');
  });

  test('返回年月日时分当时间差超过1年', () => {
    const time = new Date('2021-10-05T12:00:00');
    expect(comparingTime(time)).toBe('2021-10-05  12:00');
  });

  test('处理边界条件：正好1分钟', () => {
    const time = new Date(Date.now() - 60 * 1000);
    expect(comparingTime(time)).toBe('1分钟前');
  });

  test('处理日期补零', () => {
    jest.setSystemTime(new Date('2023-03-10T03:05'));
    const time = new Date('2023-03-05T03:05');
    expect(comparingTime(time)).toBe('03-05  03:05');
  });

  test('处理数字时间戳输入', () => {
    const time = Date.now() - 2 * 60 * 1000;
    expect(comparingTime(time)).toBe('2分钟前');
  });

  test('抛出错误当传入未来时间', () => {
    const futureTime = new Date(Date.now() + 1000);
    expect(() => comparingTime(futureTime)).toThrow('传入的时间不能大于当前时间');
  });
});