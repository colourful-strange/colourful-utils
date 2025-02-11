import { formateSeconds, formateTimes } from '../formateTime';

describe('formateSeconds', () => {
  // 基础功能测试
  describe('Basic Functionality', () => {
    const testCases = [
      { input: 0, output: '00:00:00' },
      { input: 5, output: '00:00:05' },
      { input: 59, output: '00:00:59' },
      { input: 60, output: '00:01:00' },
      { input: 61, output: '00:01:01' },
      { input: 3599, output: '00:59:59' },
      { input: 3600, output: '01:00:00' },
      { input: 3601, output: '01:00:01' },
      { input: 3661, output: '01:01:01' },
      { input: 86399, output: '23:59:59' },
      { input: 86400, output: '24:00:00' },
      { input: 90061, output: '25:01:01' }
    ];

    testCases.forEach(({ input, output }) => {
      test(`formats ${input} seconds to ${output}`, () => {
        expect(formateSeconds(input)).toBe(output);
      });
    });
  });

  // 异常输入测试
  describe('Edge Cases', () => {
    test('handles string numbers', () => {
      expect(formateSeconds('120' as unknown as number)).toBe('00:02:00');
    });

    test('handles floating numbers', () => {
      expect(formateSeconds(123.9)).toBe('00:02:03');
    });

    test('handles negative numbers', () => {
      expect(formateSeconds(-1)).toBe('00:00:01'); // 根据业务需求调整预期
    });

    test('handles NaN input', () => {
      expect(formateSeconds(NaN)).toBe('00:00:00');
    });

    test('handles Infinity', () => {
      expect(formateSeconds(Infinity)).toBe('NaN:NaN:NaN');
    });
  });

  // 格式规范测试
  describe('Format Specifications', () => {
    test('always uses two digits', () => {
      expect(formateSeconds(5)).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });

    test('uses colon separators', () => {
      expect(formateSeconds(3600)).toContain(':');
    });
  });
});

describe('formateTimes', () => {
    it('should convert "01:00:00" to 3600 seconds', () => {
      expect(formateTimes("01:00:00")).toBe(3600);
    });
  
    it('should convert "02:30:45" to 9045 seconds', () => {
      expect(formateTimes("02:30:45")).toBe(9045); 
    });
  
    it('should convert "00:05:20" to 320 seconds', () => {
      expect(formateTimes("00:05:20")).toBe(320);
    });
  
    it('should convert "00:00:45" to 45 seconds', () => {
      expect(formateTimes("00:00:45")).toBe(45);
    });
  
    it('should convert "23:59:59" to 86399 seconds', () => {
      expect(formateTimes("23:59:59")).toBe(86399);
    });
  
    it('should convert "1:1:1" to 3661 seconds, handling missing leading zeros', () => {
      expect(formateTimes("1:1:1")).toBe(3661);
    });
  
    it('should handle empty string and return 0', () => {
      expect(formateTimes("")).toBe(0);
    });
  
    it('should handle missing seconds and return correct result', () => {
      expect(formateTimes("01:01")).toBe(3660);
    });
  
    it('should handle missing minutes and seconds, treating as 0', () => {
      expect(formateTimes("01")).toBe(3600);
    });
  });