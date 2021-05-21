/**
 * get selected string array by given current target and current selected list:
 *
 * e.g:
 * arrayItemPicker(1, [1,2,3]) returns [2,3]
 * arrayItemPicker(3, [1,2]) returns [1,2,3]
 *
 * @param {String|Number} target
 * @param {Array[String|Number]} selectedList
 * @param {String|Number} defaultValue
 * @param {Boolean} isDefaultExcludable
 * @return {Array<number|string>}
 */
export function listItemSelector(
    target: string | number,
    selectedList: Array<string | number>,
    defaultValue: string | number = '',
    isDefaultValueExcludable = false
): Array<string | number> {
    let nextArray = [];

    // if selected default value and default reset is true:
    if (target === defaultValue && isDefaultValueExcludable === true && defaultValue !== undefined) {
        nextArray = [defaultValue];
        return nextArray;
    }

    // if nothing selected then return this value in array:
    if (selectedList.length === 0) {
        return [target];
    }

    // if isDefaultValueExcludable is true and target value is not exist then return value without default value:
    if (isDefaultValueExcludable === true && selectedList.indexOf(target) < 0) {
        nextArray = selectedList.concat([target]).filter((item) => item !== defaultValue);
        return nextArray;
    }

    // if the value is selected again then remove it from list:
    if (selectedList.indexOf(target) >= 0) {
        nextArray = selectedList.filter((item) => item !== target);
        return nextArray;
    }

    return selectedList.concat([target]);
}
