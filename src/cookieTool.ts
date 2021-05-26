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

/**
 * set a cookie value:
 * @param key
 * @param value
 * @param expiresMilliSeconds
 * @void
 */
export function setCookie(key: string, value: string, expiresMilliSeconds?: number): void {
    let expires = '';

    if (expiresMilliSeconds) {
        const d = new Date();
        d.setTime(d.getTime() + expiresMilliSeconds);
        expires = `expires=${d.toUTCString()}`;
    }

    document.cookie = `${key}=${value};${expires ? `${expires};` : ''}path=/`;
    return;
}
