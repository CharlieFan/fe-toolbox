/**
 * matched string in an origin string and highlight it with <b> tag:
 * @param {String} keyword - the keyword need to be highlight
 * @param {String} origin - the origin string
 * @return {String}
 */
export function stringhighlighter(keyword = '', origin: string): string {
    if (!keyword) return origin;

    // escape special symbol
    const keywordGroup = keyword.toLowerCase().replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, '\\$&');

    const keywordReg = new RegExp(`(${keywordGroup})`, 'g');
    const _searchable = origin.toLowerCase();
    const _lowerCaseKeyword = keyword.toLowerCase();

    if (keyword.length > 0 && _searchable.match(keywordReg) !== null) {
        const matchLeng = keyword.length; // matched length
        const replaceStartPosition = _searchable.indexOf(_lowerCaseKeyword); // start point
        const replaceEndPosition = replaceStartPosition + matchLeng; // end point
        const replacePart = origin.substring(replaceStartPosition, replaceEndPosition);
        const replaceReg = new RegExp(`${replacePart}`, 'g');

        return origin.replace(replaceReg, `<b>${replacePart}</b>`);
    }

    return origin;
}

/**
 * Number string formatter:
 * e.g input: 100000, output: '100,000'
 * @param {number|string} numberSrc source input number
 * @param {number} digits (optional) The number of digits to appear after the decimal point
 * @param {string} sign (optional) defualt ',' seperator e.g thousand seperator
 * @param {number} gapnum (optioal) defualt 3 seperator per digit
 * @return {string}
 */
export function numberStringFormat(numberSrc: string | number, digits = 0, sign = ',', gapNum = 3): string {
    const num = Number(numberSrc);

    if (Number.isNaN(num)) {
        return `${numberSrc}`;
    }

    const numStr = num.toFixed(digits); // fix the remain

    const numberArr = numStr.split('.');
    const pattern = new RegExp('\\B(?=(\\d{' + gapNum + '})+(?!\\d))', 'g');

    numberArr[0] = numberArr[0].toString().replace(pattern, sign);

    return numberArr.join('.');
}
