/**
 * set localstorage with expired time:
 * @param {String} key
 * @param {any} data
 * @param {Number} start - start unix time in milliseconds
 * @param {Number} expiredIn  - expired in milliseconds
 * @void
 */
function setItem(key: string, data: any, expiredIn = null, start = new Date().getTime()): void {
    if (!key) throw new Error('no key provided!!!');

    const now = new Date().getTime();
    let _start = null;
    if (start !== null && start !== undefined && typeof start === 'number') {
        _start = start;
    } else {
        _start = now;
    }

    let payload = Object.assign({}, data, { _start });

    if (expiredIn !== undefined && expiredIn !== null && typeof expiredIn === 'number') {
        const expiredAt = Number(_start) + Number(expiredIn || 0);
        payload = Object.assign({}, payload, { _expiredAt: expiredAt });
    }

    const payloadJSON = JSON.stringify(payload);
    localStorage.setItem(key, payloadJSON);
    return;
}

/**
 * get item from localStorage
 * @param {String} key
 * @return {Object|null}
 */
function getItem(key: string): any {
    if (!key) return null;

    const now = new Date().getTime();
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
        return null;
    }

    const itemObj = JSON.parse(itemStr);

    if (!itemObj._expiredAt || now < itemObj._expiredAt) {
        return itemObj;
    }

    localStorage.removeItem(key);
    return null;
}

/**
 * remove item from localStorage
 * @param {string} key
 * @void
 */
function removeItem(key: string): void {
    localStorage.removeItem(key);
}

/**
 * remove all localStorage item:
 * @void
 */
function removeAll(): void {
    localStorage.clear();
}

export default {
    setItem,
    getItem,
    removeItem,
    removeAll,
};
