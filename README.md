[中文简体](./README-zh.md)

# musk-clone
Generate a mock shadow clone with same data structure, as speed as Elon Musk.
>Tesla CEO Elon Musk has 9 children, says he's doing his part to increase U.S. fertility

## Why musk-clone?
When you want to make a new mock item with same data structure as an exist one, you must **copy --> modify one by one --> paste** , this progress costs a lot time.
Now you can musk-clone to save your time!

## Online demo
https://codesandbox.io/s/musk-clone-x137mv

## Feature
According to the incoming data, quickly generate a data of the same data structure, which is used to quickly construct mock data in the development stage

- source mainly supports the two most common types, object types and array types, and supports deep nesting
- Converts only the basic types string, number, boolean, the rest return the original value with the new memory address
- Support repeat, return multiple musk-clone objects in batches
- Supports ignoring some keys of mock objects
- Supports customizing the return content of the key

## Install
```
npm install musk-clone --save-dev
```
```js
yarn add -D musk-clone
```

## Usage

### Basic Usage
```js
import muskClone from 'musk-clone'

const src = ["foo", 1, true]
const target = muskClone({source: src});
console.log(target); 
// ["foo-0v3DrX7hoOqIFaQeMDDaF", 71, true],
```

### Frequently-used Case
```js
import muskClone from 'musk-clone'

const src = [
  { foo: "str", bar: 1, val: true },
  { foo: "str1", bar: 2, val: false },
]
const target = muskClone({source: src});
console.log(target); 
// [
//   { foo: "str-jHGKjWz3kz0ome5-tl6MS", bar: 36, val: false },
//   { foo: "str1-LqOPbB5xXYKXV8hmBB_Q6", bar: 2, val: true }
// ]
```

### Clone multiple
```js
import muskClone from 'musk-clone'

const src = [
  { foo: "str", bar: 1, val: true },
  { foo: "str1", bar: 2, val: false },
]
const target = muskClone({source: src, repeat:2});
console.log(target); 
// [
//   [
//     {
//       "foo": "str-GEoG0NphDqhwQZ44aH2LF",
//       "bar": 5,
//       "val": true
//     },
//     {
//       "foo": "str1-mxD-IMD6U9BocOp8ql_XY",
//       "bar": 7,
//       "val": true
//     }
//   ],
//   [
//     {
//       "foo": "str-ldPI7kVtHeUOMph1U4yi8",
//       "bar": 3,
//       "val": true
//     },
//     {
//       "foo": "str1-EbVeOGe1YRjudpKDjA-gR",
//       "bar": 7,
//       "val": false
//     }
//   ]
// ]
```

### Ignore mock object key
```js
import muskClone from 'musk-clone'

const src = [
  { foo: "str", bar: 1 },
  { foo: "str1", bar: 2 },
]
const target = muskClone({source: src, repeat: 2, ignores:['foo']});
console.log(target); 
// [
//   [
//     {
//       "foo": "str",
//       "bar": 5,
//     },
//     {
//       "foo": "str1",
//       "bar": 7,
//     }
//   ],
//   [
//     {
//       "foo": "str",
//       "bar": 3,
//     },
//     {
//       "foo": "str1",
//       "bar": 7,
//     }
//   ]
// ]
```

### Customize the return content of the key
```js
const src = [
  { foo: "str", bar: 1, val: true },
  { foo: "str1", bar: 2, val: false },
];
const target = muskClone({source:src, repeat:2, ignores:["foo"], fieldCallbacks: {
  bar: (item) => item + Math.random(),
}});
// [
//   [
//     {
//       "foo": "str",
//       "bar": 1.6969435733626381,
//       "val": true
//     },
//     {
//       "foo": "str1",
//       "bar": 2.8654049353811537,
//       "val": false
//     }
//   ],
//   [
//     {
//       "foo": "str",
//       "bar": 1.840926677103744,
//       "val": true
//     },
//     {
//       "foo": "str1",
//       "bar": 2.9165549953686725,
//       "val": false
//     }
//   ]
// ]
```

## API
`muskClone({source, repeat = 1, ignores = [], fieldCallbacks = {}})`

```ts
{
  source: SourceType;
  repeat?: number;
  ignores?: Array<string>;
  fieldCallbacks?: Record<string, Function>;
}
```

## Example

### Array
```js
["foo", 1, true]
=>

["foo-0v3DrX7hoOqIFaQeMDDaF", 71, false]
```
### Object
```js
{ 
  foo: "str", 
  bar: 1, 
  val: true 
}
=>

{
  foo: "str-I5s0VjK7209eBqV6QYUeJ",
  bar: 68,
  val: true
}
```
### Object Array
```js
[
  { 
    foo: "str", 
    bar: 1, 
    val: true 
  }
]
=>
[
  {
    foo: "str-eALWWUK2tsA6sn_aSAB3I",
    bar: 38,
    val: false
  }
]
```
### Complex Nest Data Structure
```js
[
  { 
    foo: "str", 
    bar: 1, 
    val: true, 
    nest: [
      { 
        baz: 2 
      }
    ] 
  }
]
=>
[
  {
    foo: "str-67nhBc5A9cDZl3dQ7L48c",
    bar: 42,
    val: true,
    nest: [
      {
        baz: 74
      }
    ]
  }
]

```

## Other
Welcome to pull request or create issue
## License

[MIT](LICENSE).
