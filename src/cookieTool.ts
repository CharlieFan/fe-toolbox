/**
 * get a cookie value by name
 * @param {String} key - cookie key name
 * @return {String} - cookie value
 */
export function getCookieItem(key: string): string {
    if (key === null || key === undefined) return '';

    const cookie = document.cookie;

    if (cookie === null || cookie === '') return '';

    const captureReg = new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`);

    const value = document.cookie.replace(captureReg, '$1');

    return value;
}
