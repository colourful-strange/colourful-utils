import legalURLs from '../legalURLs';

describe('legalURLs', () => {
    // 合法 URL 测试组
    describe('Valid URLs', () => {
        const validCases = [
            'http://example.com',
            'https://www.example.com',
            'http://sub.domain.example.co.uk',
            'https://example.com/path/to/page',
            'http://example.com?query=param',
            'https://example.com/#hash',
            'http://user:pass@example.com',
            'http://127.0.0.1:8080',
            'http://example.com/path/with_underscore',
            'https://example.com/path-with-dash',
            'http://example.com/?q=search+term'
        ];

        validCases.forEach((url) => {
            test(`should validate ${url}`, () => {
                expect(legalURLs(url)).toBe(true);
            });
        });
    });

    // 非法 URL 测试组
    describe('Invalid URLs', () => {
        const invalidCases = [
            'ftp://example.com', // 不支持协议
            'example.com', // 缺少协议
            'http://', // 空域名
            'http://exa mple.com', // 包含空格
            'http://example..com', // 连续点
            'http:///path', // 缺少域名
            'javascript:alert(1)', // 危险协议
            'http://exa<mple.com', // 非法字符
            'http://.com', // 空子域名
            'http://example.', // 不完整域名
            null, // 非字符串类型
            12345, // 数值类型
            {url: 'http://test.com'}, // 对象类型
            undefined // undefined
        ];

        invalidCases.forEach((input) => {
            test(`should reject ${JSON.stringify(input)}`, () => {
                expect(legalURLs(input)).toBe(false);
            });
        });
    });

    // 特殊边界测试组
    describe('Edge Cases', () => {
        test('should handle empty string', () => {
            expect(legalURLs('')).toBe(false);
        });

        test('should handle whitespace strings', () => {
            expect(legalURLs('   ')).toBe(false);
        });

        test('should handle international domains', () => {
            expect(legalURLs('http://例子.测试')).toBe(false); // 需要根据正则表达式调整预期
        });

        test('should handle maximum length URL (2048 chars)', () => {
            const longPath = '/a'.repeat(2048 - 18); // 18 = "http://a.com".length
            const url = `http://a.com${longPath}`;
            expect(legalURLs(url)).toBe(true);
        });
    });
});
