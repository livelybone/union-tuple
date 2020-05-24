# union-tuple
[![NPM Version](http://img.shields.io/npm/v/union-tuple.svg?style=flat-square)](https://www.npmjs.com/package/union-tuple)
[![Download Month](http://img.shields.io/npm/dm/union-tuple.svg?style=flat-square)](https://www.npmjs.com/package/union-tuple)
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")

[English Document](./README.md)

Generics to work with union/tuple in typescript

## repository
https://github.com/livelybone/union-tuple.git

## Demo
https://github.com/livelybone/union-tuple#readme

## Run Example
你可以通过运行项目的 example 来了解这个组件的使用，以下是启动步骤：

1. 克隆项目到本地 `git clone https://github.com/livelybone/union-tuple.git`
2. 进入本地克隆目录 `cd your-module-directory`
3. 安装项目依赖 `npm i`(使用 taobao 源: `npm i --registry=http://registry.npm.taobao.org`)
4. 启动服务 `npm run dev`
5. 在你的浏览器看 example (地址通常是 `http://127.0.0.1:3000/examples/test.html`)

## Installation
```bash
npm i -S union-tuple
```

## Global name - The variable the module exported in `umd` bundle
`UnionTuple`

## Interface
去 [index.d.ts](./index.d.ts) 查看可用方法和参数

## Usage

### TupleToUnion
```typescript
import { TupleToUnion } from 'union-tuple'

type Foo = TupleToUnion<[1, 2]>
const foo: Foo = 1
```

### UnionPop
```typescript
import { UnionPop } from 'union-tuple'

type Foo = UnionPop<1 | 2>
const foo: Foo = 2
```

### TuplePrepend
```typescript
import { TuplePrepend } from 'union-tuple'

type Foo = TuplePrepend<[1, 2], 3>
const foo: Foo = [3, 1, 2]
```

### UnionToTuple
```typescript
import { UnionToTuple } from 'union-tuple'

type Foo = UnionToTuple<1 | 2 | 3>
const foo: Foo = [1, 2, 3]
```

### UnionToTuple
```typescript
import { UnionToTuple } from 'union-tuple'

type Foo = UnionToTuple<1 | 2 | 3>
const foo: Foo = [1, 2, 3]
```

### UnionToTupleWithMap
```typescript
import { UnionToTupleWithMap } from 'union-tuple'

type Foo = UnionToTupleWithMap<1 | 2 | 3, { 1: 'a', 2: 'c', 3: [1, 2] }>
const foo: Foo = ['a', 'c', [1, 2]]
```

### TupleMap
```typescript
import { TupleMap } from 'union-tuple'

type Foo = TupleMap<[2, 1, 3], { 1: 'a', 2: 'c', 3: [1, 2] }>
const foo: Foo = ['c', 'a', [1, 2]]
```
