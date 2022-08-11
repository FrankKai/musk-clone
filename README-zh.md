[English](./README.md)

# musk-clone
生成具有相同数据结构的模拟影子克隆，速度与 Elon Musk 一样。
>特斯拉CEO马斯克生9个子女，说自己为提高美国生育率正在尽一份力

## 为什么要用 musk-clone?
当你想制作一个与现有的具有相同数据结构的新模拟项目时，你必须**复制--> 逐一修改--> 粘贴**，这个过程会花费很多时间。

现在您可以使用musk-clone以节省您的时间！

## 特性
根据传入的数据，快速生成一份相同数据结构的数据，用于开发阶段快速构造mock数据

- source主要支持最常见的两种类型，对象类型和数组类型，支持深层嵌套
- 仅对基本类型string，number，boolean进行转换，其余均返回具有新内存地址的原值

## 安装

```js
yarn add -D musk-clone
```

## 使用

### 基本使用
```js
import muskClone from 'musk-clone'

const src = ["foo", 1, true]
const target = muskClone(src);
console.log(target); 
// ["foo-0v3DrX7hoOqIFaQeMDDaF", 71, true],
```

### 常用场景
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

## 示例

### 数组
```js
["foo", 1, true]
=>

["foo-0v3DrX7hoOqIFaQeMDDaF", 71, false]
```
### 对象
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
### 对象数组
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
### 复杂嵌套数据结构
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

## 其它
欢迎提PR和issue
## License

[MIT](LICENSE).
