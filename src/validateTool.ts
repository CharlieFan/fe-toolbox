/**
 * return if value is literally empty
 * @param {any} value
 * @param {Boolean} zeroIsEmpty whether 0 count as empty (default yes)
 * @param {Boolean} zeroStringIsEmpty whether '0' count as empty (default yes)
 * @return {Boolean} true (empty) false (not empty)
 */
export function isEmpty(value: unknown, zeroAsEmpty = false, zeroStringAsEmpty = false): boolean {
    let result = value !== undefined && value !== null && value !== '';

    if (zeroAsEmpty) {
        result = result && value !== 0;
    }

    if (zeroStringAsEmpty) {
        result = result && value !== '0';
    }

    return !result;
}

/**
 * check if string is an emial
 * pattern="[A-Za-z0-9._%+-]+@(?!51.ca$|vip.51.ca|51.com|vip.51.com$)([A-Za-z0-9.-]+\.)[A-Za-z]{1,63}"
 * @param {String} email
 * @return {Boolean}
 */
export function isEmail(email: string, excludeDomains?: string[]): boolean {
    if (!email || typeof email !== 'string') {
        return false;
    }

    if (excludeDomains !== undefined && Array.isArray(excludeDomains) && excludeDomains.length > 0) {
        const excludeDomainsStr = excludeDomains.map((domain) => `${domain}$`).join('|');

        const regex = new RegExp(`[A-Za-z0-9._%+-]+@(?!${excludeDomainsStr})([A-Za-z0-9.-]+.)[A-Za-z]{1,63}`);

        return regex.test(email);
    }

    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

/**
 *
 * @param {String} tel
 * @param {en-US|en-CA|en-HK|zh-CN|zh-TW} locale - 地区码 默认加拿大
 *  - 支持加拿大，美国，香港，台湾，中国大陆
 *  - 加拿大和美国一样
 */
const PHONE_REGX = {
    'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    'en-CA': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
    'zh-TW': /^(\+?886-?|0)?9\d{8}$/,
};
export function isMobilePhone(tel: string, locale: keyof typeof PHONE_REGX = 'en-CA'): boolean {
    const phone = `${tel}`;
    if (!phone || phone.length < 1 || !locale || !PHONE_REGX[locale]) {
        return false;
    }

    return PHONE_REGX[locale].test(phone);
}
