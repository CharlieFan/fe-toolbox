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
