// @flow
// 判断是否是合法的URL
export default function legalURLs(url: string): boolean {
    const urlPattern =
        /^(https?:\/\/)((([a-zA-Z\d-]+\.)+[a-zA-Z]{2,})|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))(?::\d{2,5})?(\/[^\s]*)?(\?[^\s#]*)?(#\S*)?$/;
    url = String(url);
    if (url.includes('@')) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }
    return urlPattern.test(url);
}
