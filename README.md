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

`stringhighlighter` is the function that can match string in an origin string and highlight it with \<b> tag

`stringhighlighter(keywords: string, orgin: string,):string`

```
import { stringhighlighter } from '@charliefan/fe-toolbox';

const highlighted = stringhighlighter('777 Bay', '777 Bay street, Toronto, ON');

// will return '<b>777 Bay</b> street, Toronto, ON'
```

### Array Tool

TODO;
