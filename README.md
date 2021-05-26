# Front End Development Toolbox

## Description

fe-toolbox is a collection of utility functions that might be useful in Front End development

## Install

```
npm i --save @charliefan/fe-toolbox
```

or

```
yarn add @charliefan/fe-toolbox
```

import into js file:

```
import * as feToolbox from '@charliefan/fe-toolbox';
```

## Contents

-   [Cookie Tool](#cookie-tool)
-   [localStorage Tool](#localStorage-tool)
-   [String Tool](#String-Tool)
-   [Array Tool](#Array-Tool)

## Usage

### Cookie Tool

Get cookie value from cookie:

```
import { getCookieItem } from '@charliefan/fe-toolbox';

// if there is 'mykey=123' in cookie, this will return 123 from cookie
const myKeyValue = getCookieItem('mykey');
```

Set a cookie:

`setCookie(key: string, value: string, expiresMilliSeconds?: number): void`

```
import { setCookie } from '@charliefan/fe-toolbox';

const myKey = setCookie('mykey', '123');

const myCookie = setCookie('mykey', '123', 1000);
// myCookie will expired in 1 second
```

### localStorage Tool

1. set item in localStorage:

`storageTool.setItem(key: string, data: any, expiredIn: number, startAt?: number):void`

`expiredIn` and `startAt` are unix time in miliseconds

```
import { storageTool } from '@charliefan/fe-toolbox';

// 1. set item in localStorage without expiration
storageTool.setItem('myData', { a: '1', b: '2'});

// 2. set item in localStorage expired in 1 minutes
storageTool.setItem('myData', { a: '1', b: '2'}, 60000);


// 3. set item in localStorage expired in 1 minutes at given start
storageTool.setItem('myData', { a: '1', b: '2'}, 60000, new Date().getTime();
```

2. get item from localStorage:

`storageTool.getItem(key: string): any`

return `null` if data does not exists or data is expired

```
import { storageTool } from '@charliefan/fe-toolbox';

const retrievedData = storageTool.getItem('my-key');
```

3. remove item from localStorage:

`storageTool.removeItem(key: string): void`

exact same with `localStorage.removeItem`

4. remove all items from localStorage:

`storageTool.removeAll():void`

exact same with `localStorage.clear()`

### String Tool

1. `stringhighlighter` is the function that can match string in an origin string and highlight it with \<b> tag

`stringhighlighter(keywords: string, orgin: string,):string`

```
import { stringhighlighter } from '@charliefan/fe-toolbox';

const highlighted = stringhighlighter('777 Bay', '777 Bay street, Toronto, ON');

// will return '<b>777 Bay</b> street, Toronto, ON'
```

2. `numberStringFormat` is a function to format number into a string as required. For example, to format a number into a currency number string

`numberStringFormat(numberSrc: string | number, bit = 0, sign = ',', gapNum = 3): string`

`digits` (optional) The number of digits to appear after the decimal point

`sign` (optional) default is ',' seperator symbol e.g thousand seperator

`gapnum` (optioal) default is 3, the number of digits where the `sign` appear after.

```
import { numberStringFormat } from '@charliefan/fe-toolbox';

const price = numberStringFormat(64999);

// price -> '64,999'

const productNum = numberStringFormat(123123123433, 0, '-', 4);

// productNum -> '1231-2312-3433'
```

`numberFormat(numberSrc: string | number, bit = 0, sign = ',', gapNum = 3): string`

### Array Tool

`listItemSelector` is a function that get selected items list by given target and current selected list;

```
listItemSelector(
    target: string | number,
    selectedList: Array<string | number>,
    defaultValue: string | number = '',
    isDefaultValueExcludable = false
): Array<string | number>
```

For example:

arrayItemPicker(1, [1,2,3]) will return [2,3]
arrayItemPicker(3, [1,2]) will return [1,2,3]

```
import { listItemSelector } from '@charliefan/fe-toolbox';

const checkedItems = listItemSelector(3, [1,2]);
// checkedItems will be [1,2,3]


// if default value is provided, then it will return an array that contains a default value

const checkedItems2 = listItemSelector(1, [1], 1);
// checkedItems2 will be [1]


// if isDefaultValueExcludable is true, then if the target selected default value, then the array will exclude other values except default value:


const checkedItems3 = listItemSelector(1, [2,3,4], 1, true);
// checkedItems3 will be [1]
```

`flatDeep` is a function to flat an array

`flatDeep(arr: Array<T>, depth: number): Array<T>`

depth is the depth of the array, it can also be infinite:

```
import { flatDeep } from '@charliefan/fe-toolbox';

const flattenArray = flatDeep([1,[2,3], 4], 1);

// flattenArray will be [1,2,3,4]

const flattenArray2 = flatDeep([1,[2,3], 4, [5, [6,7]]], 1);
// flattenArray2 will be [1,2,3,4,5,6,7]
```
