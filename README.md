# xApi Statement Builder

The aim of this library is to ease the creation of xApi statements 
providing a builder with a fluent interface to configure mandatory
and optional parts of it

## Install and usage

```shell
$ npm i @taylora/xapi-statement-builder 
```

```js
import xApi from '@taylora/xapi-statement-builder';

const authority = xApi.IFI.account({
    name: 'authority-username',
    homePage: 'http://www.example.com/learning-record-provider'
});
const alice = xApi.cmi5.actor(xApi.IFI.account({name: 'Alice', homePage: 'http://alice.me'}));

const statement = xApi.cmi5.completed()
    .actor(alice)
    .activityId('http://www.awsome-courses.com/course-id')
    .activityName({value: 'The Awesome course'})
    .result('PT8H0M0S')
    .authority({name: 'Learning Record Provider', IFI: authority})
    .when(new Date('2020-01-01'));

const element = document.createElement('code');
element.innerHTML = JSON.stringify(statement.getStatement());
return element;
```

for more example refer to `lib/index.spec.js` test file