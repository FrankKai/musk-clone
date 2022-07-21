[中文简体](./README.md)

# musk-clone
Generate a mock shadow clone with same data structure, as speed as Elon Musk.
>Tesla CEO Elon Musk has 9 children, says he's doing his part to increase U.S. fertility

## Why musk-clone?
When you want to make a new mock item with same data structure as an exist one, you must **copy --> modify one by one --> paste** , this progress costs a lot time.
Now you can musk-clone to save your time!

## Feature
According to the incoming data, quickly generate a data of the same data structure, which is used to quickly construct mock data in the development stage

- source mainly supports the two most common types, object types and array types, and supports deep nesting
- Converts only the basic types string, number, boolean, the rest return the original value with the new memory address

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
const target = muskClone(src);
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
const target = muskClone(src);
console.log(target); 
// [
//   { foo: "str-jHGKjWz3kz0ome5-tl6MS", bar: 36, val: false },
//   { foo: "str1-LqOPbB5xXYKXV8hmBB_Q6", bar: 2, val: true }
// ]
```

## API
`muskClone(source)`
### source
- {[key: string]: any} | Array<{[key: string]: any}>

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
